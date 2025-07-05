require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js"); 
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

const mongoUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.error(" DB Connection Error:", err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  try {
    // 1. Create dummy user
    const existingUser = await User.findOne({ username: "avinash" });
let user;
if (existingUser) {
  user = existingUser;
  console.log(" Dummy user already exists. Using existing user.");
} else {
  user = await User.register(
    new User({
      email: "avinash@gmail.com",
      username: "avinash",
    }),
    "avinash"
  );
  console.log("Dummy user created:", user._id);
}


    // 2. Delete old listings
    await Listing.deleteMany({});
    console.log("🧹 Old listings cleared.");

    // 3. Prepare new listings
    const updatedData = await Promise.all(
      initData.data.map(async (obj) => {
        let response;
        try {
          response = await geoCodingClient
            .forwardGeocode({
              query: `${obj.location}, ${obj.country}`,
              limit: 1,
            })
            .send();
        } catch (error) {
          console.error(
            ` Geocoding failed for ${obj.location}, ${obj.country}:`,
            error
          );
          return { ...obj, owner: user._id, geometry: null };
        }

        const geometry = response.body.features[0]?.geometry || null;

        return {
          ...obj,
          owner: user._id,
          geometry,
        };
      })
    );

    // 4. Insert into DB
    await Listing.insertMany(updatedData);
    console.log(` ${updatedData.length} listings inserted.`);
  } catch (error) {
    console.error(" Error during DB initialization:", error);
  }
};

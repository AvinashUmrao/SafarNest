
---

# 🌍 SafarNest 🏡

A Full-Stack Vacation Rental Platform

## 🚀 Project Summary

**SafarNest** is a comprehensive full-stack web application that allows users to browse, book, and list vacation accommodations, including houses, villas, and farmhouses. Inspired by platforms like Airbnb, it offers a seamless and intuitive user experience, real-time property mapping, and secure user authentication.

## 🌐 Frontend

**Technologies:** HTML, CSS, JavaScript, Bootstrap, EJS
**Features:**

* 📱 Fully Responsive Design
* 🔍 Search & Filter Listings
* 🗺️ Mapbox Integration for Property Location View
* 🎨 EJS Templates for Dynamic Content

## 🛠️ Backend

**Technologies:** Node.js, Express.js
**Features:**

* 🔒 Authentication via Passport.js (Local, Google & GitHub OAuth)
* 🧩 RESTful APIs for Listings, Reviews, and Users
* 📦 MVC Architecture for Scalability
* 🍪 Session & Cookie Handling with Flash Messages

## 🗄️ Database

**MongoDB Atlas** with **Mongoose ODM**

* Structured Schema for Listings, Users, and Reviews
* Query Handling for Search, Filter, and Booking

## ☁️ Cloudinary Integration

* Secure and optimized image hosting
* Fast media delivery for property visuals

## 🌟 Key Features

* 🛏 Browse & Book Unique Stays
* 🔍 Advanced Filters by Category (Trending, Camping, etc.)
* 📝 User Reviews & Ratings
* 📊 Client/Server-side Validations
* 🧾 Tax Toggle for Price Transparency

## 🗺 Deployment

**Live App:** [SafarNest on Render](https://wnaderlust-89l3.onrender.com/listings)
**Database:** MongoDB Atlas
**Image Hosting:** Cloudinary

## 📂 Folder Structure

```
SafarNest/
│-- controllers/       # Business logic  
│-- models/            # Mongoose schemas  
│-- routes/            # Express routes  
│-- views/             # EJS templates  
│-- public/            # Static assets (CSS, JS, images)  
│-- utils/             # Utility functions  
│-- middleware.js      # Custom middleware  
│-- cloudconfig.js     # Cloudinary config  
│-- app.js             # Main server file  
│-- .env               # Environment variables  
```

## ⚙️ Installation & Setup

```bash
git clone https://github.com/yourusername/safarnest.git  
cd safarnest  
npm install  
```

Create a `.env` file with:

```env
CLOUD_NAME=your_cloudinary_name  
CLOUD_API_KEY=your_key  
CLOUD_API_SECRET=your_secret  
MAP_API_KEY=your_mapbox_key  
ATLASDB_URL=your_mongodb_uri  
SECRET=your_session_secret  
```

## 📦 Tech Stack

* **Frontend:** HTML, CSS, JS, Bootstrap, EJS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Authentication:** Passport.js (Local + OAuth)
* **File Uploads:** Multer + Cloudinary
* **Validation:** Joi
* **Session Management:** express-session + connect-mongo

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---



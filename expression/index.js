const express = require("express");
const path = require("path");
const mongoose = require("./db"); // Import the MongoDB connection
const sessions = require("express-session");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const port = process.env.PORT || "8888";

// Set Pug as the template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware to handle JSON and form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up public folder for static files (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Set up session handling
app.use(
  sessions({
    secret: process.env.SESSIONSECRET,
    name: "MyUniqueSessID",
    saveUninitialized: false,
    resave: false,
    cookie: {},
  })
);

// Import Routes
app.use("/admin", require("./routes/admin")); // Admin routes for managing data

// Default Route (Redirects to Admin Panel)
app.get("/", (req, res) => {
  res.redirect("/admin/projects/add");
});

app.get("/", (req, res) => {
  res.render("index");
});


// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

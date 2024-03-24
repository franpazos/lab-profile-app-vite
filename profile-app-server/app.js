const cors = require("cors");

require("dotenv").config();

// ℹ️ Connects to the database

require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express

const express = require("express");
const app = express();

app.use(cors())

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware

require("./config")(app);

// 👇 Start handling routes here



const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const { isAuthenticated } = require("./middleware/jwt.middleware");

const indexRoutes = require("./routes/index.routes");
app.use("/api", isAuthenticated, indexRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes

require("./error-handling")(app);

module.exports = app;

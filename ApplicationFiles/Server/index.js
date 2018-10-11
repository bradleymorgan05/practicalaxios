const express = require("express");
// Call database file to connect to externalMongoDB database
// AND get database functions (addFood, deleteFood)
const { addFood, deleteFood } = require("../Database/Food.js");

// allow for references to our path
const path = require("path");

// Create an app instance of express
const app = express();
// Serve up files from the client/dist
app.use(express.static(path.join(__dirname, "/../client/dist")));

// Listen for incoming calls
app.listen(3000, () => {
  console.log("listening to port 3000");
});

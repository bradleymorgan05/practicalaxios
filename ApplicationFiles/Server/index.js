// Require express and Body Parser
const express = require("express");
const bodyParser = require("body-parser");
// allow for references to our path
const path = require("path");
// Call database file to connect to externalMongoDB database
// AND get database functions (addFood, deleteFood)
const { getFoods, addFood } = require("../Database/Food.js");

// Create an app instance of express
const app = express();
// Requests app to use body parser to parse data
app.use(bodyParser.json());
// Serve up files from the client/dist
app.use(express.static(path.join(__dirname, "/../FrontEnd/dist")));

app.get("/basic", (req, res) => {
  res.send("Hello students!");
});

// Get All Foods
app.get("/foods", (req, res) => {
  getFoods(data => {
    res.send(data);
  });
});

// Save Food Item
app.post("/food", (req, res) => {
  addFood(req.body.params.food);
  res.send();
});

// Listen for incoming calls
app.listen(3000, () => {
  console.log("listening to port 3000");
});

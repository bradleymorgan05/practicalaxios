const express = require("express");
const mongoose = require("mongoose");
// allow for references to our path
const path = require("path");

// connect to external database using mongoose
mongoose.connect(
  "mongodb://axios:axios123@ds015899.mlab.com:15899/practicalaxios",
  { useCreateIndex: true, useNewUrlParser: true }
);
// Upon attempted connection, log result
mongoose.connection
  .once("open", () => console.log("Connected to MongoDB.."))
  .on("error", error => console.log("Error connecting to DB"));

// Create an app instance of express
const app = express();
// Serve up files from the client/dist
app.use(express.static(path.join(__dirname, "/../client/dist")));

// Listen for incoming calls
app.listen(3000, () => {
  console.log("listening to port 3000");
});

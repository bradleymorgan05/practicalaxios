const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// connect to external database using mongoose
mongoose.connect(
  "mongodb://axios:axios123@ds015899.mlab.com:15899/practicalaxios",
  { useCreateIndex: true, useNewUrlParser: true }
);
// Upon attempted connection, log result
mongoose.connection
  .once("open", () => console.log("Connected to MongoDB.."))
  .on("error", error => console.log("Error connecting to DB"));

// Create food schema
const foodSchema = new Schema({
  name: String
});
// Declare food model
const Food = mongoose.model("Food", foodSchema);

// Get all food database call
const getFoods = cb => {
  Food.find({}, (err, food) => {
    cb(food);
  });
};

// Create food database call
const addFood = (food, cb) => {
  var newFood = new Food({
    name: food
  });
  newFood.save();
};

// Delete food database call
const deleteFood = (food, cb) => {
  Food.findOneAndRemove({ name: food });
};

module.exports = { getFoods, addFood, deleteFood };

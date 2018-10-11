const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Call database file to connect to external MongoDB database
// AND get database functions (addFood, deleteFood)
const { addFood, deleteFood } = require("./Food.js");

// Create food schema
const foodSchema = new Schema({
  food: String,
  quantity: { type: Number, default: 0 }
});
// Declare food model
const Food = mongoose.model("Food", userSchema);

// Create food database call
const addFood = (food, cb) => {
  var newFood = new Food({
    food: food.name,
    quantity: food.quantity
  });
  newFood.save();
};

// Delete food database call
const deleteFood = (food, cb) => {
  Food.findOneAndRemove({ name: food.name });
};

module.exports = { addFood, deleteFood };

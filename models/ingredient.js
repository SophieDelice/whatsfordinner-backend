const mongoose = require("mongoose");
const IngredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  addedBy: {
    type: String, // firebase user ID
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
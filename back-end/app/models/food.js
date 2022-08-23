const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema  = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  foodId: { type: String, unique : true },
  resturantId: { type: String, required: true },
  isVeg: { type: Boolean, required: true },
  isNonVeg: { type: Boolean, required: true },
  isVegan: { type: Boolean, required: true },
  image: { data: Buffer, contentType: String },
  section: { type: String, required: true },
});

const Food = mongoose.model('food', FoodSchema);

module.exports = Food;
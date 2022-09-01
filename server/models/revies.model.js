const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const reviewSchema = new Schema({
  _id:{ type:String},
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  description: { type:String ,required: true },
  cDate: { type: String },
  uDate: { type: String },
});

const Review = model("review", reviewSchema);
module.exports = Review;



const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const reviewSchema = new Schema({
  _id:{ type:String},
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsersInfo",
    required: true,
  },
  description: { type:String ,required: true },
  cDate: { type: String },
  uDate: { type: String },
});

const Review = model("UserReviews", reviewSchema);
module.exports = Review;



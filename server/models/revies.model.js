const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const reviewSchema = new Schema({
    _id:{type: String},
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true,
//   },
  description:{ type: String, required: true },
   cDate:{ type: String},
//   uDate:Date(),
 
});

const Review = model("review", reviewSchema);
module.exports = Review;

// 1 → userId
// 2 → description
// 3 → cDate (yyyy/mm/dd/hh/mm/ss)
// 4 → uDate(yyyy/mm/dd/hh/mm/ss)
// 5 → _id (uuid v4)

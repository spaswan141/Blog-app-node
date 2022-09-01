const Review=require('../models/revies.model');
const { v4: uuidv4 } = require('uuid');

module.exports.review= async function(req, res, next){
    const review= new Review({
        _id:uuidv4(),
        description: req.body.description,
        cDate:formatDate(new Date()),
        uDate:formatDate(new Date())
    });
     review.save()
    return res.send(review)

}
module.exports.getReview= async function(req, res, next){
   const reviews= await Review.find().populate("userId").lean().exec()
   return res.send(reviews)    
}



function padTo2Digits(num) {
    return num.toString().padStart(2,'0');
  }
function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('/') +
      "/"+
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join('/')
    );
  }


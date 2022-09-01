const {review,getReview}=require('../controllers/review')
const router=require('express').Router()


router.post('/reviews',review)
router.get('/reviews',getReview)
module.exports=router
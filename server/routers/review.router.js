const {review,getReview,deleteReview}=require('../controllers/review')
const router=require('express').Router()


router.post('/reviews',review)
router.get('/reviews',getReview)
router.delete("/delete/review/:id",deleteReview)
module.exports=router
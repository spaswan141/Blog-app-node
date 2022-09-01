const {newuser,loginUser}=require('../controllers/user')
const router=require('express').Router()


router.post('/signup',newuser)
router.post('/login',loginUser)
module.exports=router
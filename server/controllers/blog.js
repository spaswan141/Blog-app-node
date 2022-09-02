const Blog= require('../models/blog.model')
const { v4: uuidv4 } = require('uuid');


module.exports.getBlog=async function (req, res){
    let blog= await Blog.find()
    try{
        return res.status(200).send(blog)
    }catch(err){
        return res.send(501).send(err)
    }
}
module.exports.singleBlog=async function(req, res){
    const {id}=req.params
    const blog=await Blog.findById(id)
    try{
        return res.send(blog)

    }catch(err){
        return res.send(err)
    }
}
module.exports.newBlog=function (req, res){
    let createBlog= new Blog({
        _id:uuidv4(),
        Body:req.body.Body,
        Title:req.body.Title,
        cDate:formatDate(new Date()),
        uDate:formatDate(new Date())
    })
    createBlog.save((err, blog)=>{
        res.status(201).send(blog["_doc"]);
     });
}
module.exports.deleteBlog=async function(req, res){
    const {id}= req.params
   const blog =await Blog.findByIdAndDelete(id)
   res.send("Blog Deleted") 
}

module.exports.updateBlog= async function (req, res){
    const {id} = req.params
    const blog =await Blog.findByIdAndUpdate(id,{
        Body:req.body.Body,
        Title:req.body.Title,
        uDate:formatDate(new Date())
    })
    res.status(200).send({message:"SuccessFully Updated",blog})
     

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


  

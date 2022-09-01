const {Schema, model} = require("mongoose")

const blogSchema = new Schema({
    _id: {type: String},
    Title :{type: String, required: true},
    Body : { type: String, required: true},
    cDate:{ type: String,},
    uDate:{ type: String,}
   
})

const Blog= model("blog",blogSchema)
module.exports =Blog




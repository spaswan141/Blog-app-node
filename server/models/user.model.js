const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity")

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  age:{type:String, required: true}
});

UserSchema.methods.generateAuthToken = function (req, res) {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.name,
      gender:this.gender
    },
    process.env.PrivateKey,
    { expiresIn: "7d" }
  );
  return token
};

const validate = function (user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().required(),
    password:passwordComplexity().required(),
    age: Joi.string().required(),
    gender: Joi.string().valid("Male","Female").required(),
  });
  return schema.validate(user)
};
const User = model("user", UserSchema);

module.exports = { User,validate};
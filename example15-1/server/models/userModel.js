const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
      },
      firstName: {
        type: String,
        required: true,
        trim: true
      },
      lastName: {
        type: String,
        required: true,
        trim: true
      },
      password:{
        type:String,
        required:true,
      },
      keywords:{
        type:[String],
        default:[]
      }
},{timestamps:true})


const User = mongoose.model('User',userSchema);

module.exports = User;
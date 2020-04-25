const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
  name:{
    required:true,
    type:String,
    unique:1,
    maxlength:100
  }
})
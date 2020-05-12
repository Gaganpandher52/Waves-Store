const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name:{
    required: true,
    type: String,
    unique: 1,
    maxlength:100,
  },
  description:{
    required: true,
    type: String,
    maxlength:100000,
  },
  price:{
    required: true,
    type: Number,
    maxlength:255,
  },
  brand:{
    
  }
  
});

const Product = mongoose.model('Product',productSchema);

module.exports = { Product }
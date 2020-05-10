const mongoose = require('mongoose');


const woodSchema = mongoose.Schema({
  name:{
    required: true,
    type: String,
    unique: 1,
    maxlength: 100
  }
});

const wood  = mongoose.model('Wood', woodSchema);

module.exports = { Wood }
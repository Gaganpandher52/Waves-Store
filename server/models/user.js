const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT = 10;

const userSchema = mongoose.Schema({
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:5,
  },
  name:{
    type:String,
    required:true,
    maxlength:100
  },
  lastname:{
    type:String,
    required:true,
    minLength:100,
  },
  cart:{
    type:Array,
    default:[],
  },
  history:{
    type:Array,
    default:[],
  },
  role:{
    type:Number,
    default:0
  },
  token:{
    type:String,
  }
  
})

userSchema.pre('save',function(next){
  var user = this
  bcrypt.genSalt(SALT,function(err,salt){
    if(err) return next(err)

    bcrypt.hash(user.password,salt,function(err,hash){
      if(err) return next(err);
        user.password = hash;
        next();
    })

  })

})

const User = mongoose.model('User',userSchema);

module.exports = { User }
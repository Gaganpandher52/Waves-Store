const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app =  express();
const mongoose =  require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({entended:true}));
app.use(bodyParser.json()); 
app.use(cookieParser());

const { User } = require('./models/user');

//==================================
//              USERS
//==================================

app.post('/api/users/register',(req,res)=>{
  res.status(200)
  const user = new User(req.body);

  user.save((err,doc)=>{
    if(err) return res.json({success:false,err});
    res.status(200).json({
      success:true,
      userdata: doc
    })
  })
});

app.post('/api/users/login',(req,res)=>{

  User.findOne({'email':req.body.email},(err,user)=>{
    if(!user) return res.json({loginSuccess:fasle})


  })
  

});


const port = process.env.PORT || 3002;

app.listen(port,()=>{
  console.log(`Server Running at ${port}`)
})
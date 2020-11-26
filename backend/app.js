const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session')

const app = express();

mongoose.connect("mongodb://localhost/nemoneKar-1") ;

const Schema = mongoose.Schema;
var userSchema = new Schema({
  email : String,
  name : String,
  password : String,
  password_2 : String,
  mobil : String,
  shahr : String,
  jensiat : String,
  tavalod : String
}) ;
var InputModel = mongoose.model("User" , userSchema ) ;

app.use(morgan('common')) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	cookie: { maxAge: 60000 },
    secret : "secret",
    resave : false,
    saveUninitialized : true
})) ;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/singup", (req, res, next) => {
  console.log(req.body);
});

app.post("/api/singin", (req, res, next) => {
  var formData = req.body;
  var name = formData.name;
  var family = formData.family;
  var email = formData.email;
  var password = formData.password;
  var password2 = formData.password2;
  var titel = formData.titel;
  var tell = formData.tell;

if(name.length && family.length
  && password.length && password2.length
  && titel.length && tell.length) {
    if(password.length >=8 && password_2.length >=8){
      if(password === password_2){
        InputModel.find({email}, function (err, docs) {
          if (err) {throw err}
          else if(docs.length){
              res.send('ایمیل قبلا وارد شده')
          }else{
            var newUser = new InputModel({
              email : formData.email,
              name : formData.name,
              password : formData.password,
              password_2 : formData.password_2,
              mobil : formData.mobil,
              shahr : formData.shahr,
              jensiat : formData.jensiat,
              tavalod : formData.tavalod
            });
            newUser.save() ;
            console.log(newUser);
            console.log('sabte name ba mofaghiat anjam shod');
            res.send('ثبت نام با موفقیت انجام شد');
            //res.sendFile(__dirname + '/views/new_aghahi.html')
          }

        });
      }else{
        res.send('پسورد با تکرار آن مطابقت ندارد')
      }

    }else{
      res.send('پسورد باید 8 رقم یا بیشتر باشد')
    }

}else{
  res.send('لطفا همه موارد را کامل کنید');
  }
});


module.exports = app;

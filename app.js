
if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const productroute=require('./routes/product');
const methodOverride=require('method-override');
const session=require('express-session');
const flash=require('connect-flash');
const passport=require('passport');
const Localstrategy=require('passport-local');
const User=require('./models/user');
const authroutes=require('./routes/auth');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));



const sessionConfig={
    secret:'nobodyknowsmysecret',
    resave:false,
    saveUninitialized:true
}

app.use(session(sessionConfig));
app.use(flash());

//intialize kiya passport aur session user ki info ko store karne ke liye
app.use(passport.initialize());
app.use(passport.session());

//configuring the passport to use local startegy
passport.use(new Localstrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success=req.flash('success');
  res.locals.error=req.flash('error');
  res.locals.currentUser=req.user;
  next();
})



mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    }).then(()=>{
        console.log("DB CONNECTED")
    }).catch((err)=>{
        console.log("opps thers is some error");
        console.log(err);
    })


 // seedDB();


app.use(productroute);
app.use(authroutes);

app.get('/',(req,res)=>{
      res.render('landingpage')
  //  res.send("LANDING PAGE");
})







   app.listen(process.env.PORT || 3000,()=>{
       console.log("server listen at port 3000");
   }) 
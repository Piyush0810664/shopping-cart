const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
})

//behind the scenes username password set karega
userSchema.plugin(passportLocalMongoose);

const User=mongoose.model('User',userSchema);

module.exports=User;

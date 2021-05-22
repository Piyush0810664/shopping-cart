
const isLoggedIn=(req,res,next)=>{
 // is method se pata lagega ki user login hai ya nhi
 if(!req.isAuthenticated()){
    req.flash('error','Find your account and Login');
    return res.redirect('/login');
}
next();
}

 module.exports={
     isLoggedIn
    }
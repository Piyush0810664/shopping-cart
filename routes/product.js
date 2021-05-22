const express=require('express');
const router=express.Router();
const Product=require('../models/product');
const Review=require('../models/review');
const { isLoggedIn }=require('../middleware');



router.get('/products',async (req,res)=>{

    const products=await Product.find({});
    res.render('products/index',{products});

})


router.get('/products/new',isLoggedIn,(req,res)=>{
   
    res.render('products/new');
})


router.post('/products',isLoggedIn,async (req,res)=>{

    try{
   
        await Product.create(req.body.product);
        req.flash('success','Product Created successfully')
    
        res.redirect('/products');
    }
    catch(e) {
        console.log(e.message);
        req.flash('error','Cannot Create Products');
        res.render('error');
    }
    
   
})



router.get('/products/:id',async(req,res)=>{

    try{
        const product=await Product.findById(req.params.id).populate('reviews');
        // console.log(product);
    
        res.render('products/show',{product});
    }
    catch(e){
        console.log(e.message);
        req.flash('error',' Cannot find products');
        res.redirect('/error')
    }
 
})

router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{

    const product=await (await Product.findById(req.params.id));

   

res.render('products/edit',{product});
})

router.patch('/products/:id',isLoggedIn,async(req,res)=>{
    await Product.findByIdAndUpdate(req.params.id,req.body.product);

    req.flash('success','Updated Sucessfully');
    res.redirect(`/products/${req.params.id}`);
})

router.delete('/products/:id',isLoggedIn,async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
   

    res.redirect('/products');
})

//creating a new comment on a url

router.post('/products/:id/review',isLoggedIn,async(req,res)=>{
   // console.log(req.body);
const product=await Product.findById(req.params.id)

const review=new Review({
    user: req.user.username,
    ...req.body
});
//  const review =new Review(req.body);

product.reviews.push(review);

await review.save();
await product.save();

res.redirect(`/products/${req.params.id}`);
   // res.send('you hit the comment route');
})


router.get('/error',(req,res)=>{
    res.status(404).render('error');
})
module.exports=router;
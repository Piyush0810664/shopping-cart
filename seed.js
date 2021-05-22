const mongoose = require('mongoose');
const  Product=require('./models/product');
const products = [
    {
        name: "Iphone 12",
        img: 'https://images.unsplash.com/photo-1610602699047-18cb7f727a2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 100000,
        desc: "You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone. It’s good for you and the planet."

    },
    {
        name: "Macbook AIr",
        img: 'https://images.unsplash.com/photo-1610277027770-abb0f444c4e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 900000,
        desc: "You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone. It’s good for you and the planet."

    }, {
        name: "Watches",
        img: 'https://images.unsplash.com/photo-1594576722512-582bcd46fba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        price: 5000,
        desc: "You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone. It’s good for you and the planet."

    }, {
        name: "Headphones",
        img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 3000,
        desc: "You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone. It’s good for you and the planet."

    }, {
        name: "Duke Ball",
        img: 'https://images.unsplash.com/photo-1574883578510-aa1bbbb7472c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGR1a2UlMjBiYWxsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 1000,
        desc: "You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone. It’s good for you and the planet."

    },
    {
        name: "Drone",
        img: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 100000,
        desc: "You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone. It’s good for you and the planet."

    },
]


const seedDB=async()=>{
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports=seedDB;
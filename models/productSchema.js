var mongoose = require('mongoose');
const Currency = mongoose.Types.Currency;

var products = mongoose.Schema({
    productCategory : 
    {
        type:String ,
        required:true,
    },
    price:
    {
        type:Currency,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    manufacturer:
    {
        type:String,
        required:true
    },
    rating:
    {
        type:Number,
        min:1,
        max:5,
        required:true
    },
    quantityInventory:
    {
        type:Number,
        required:true
    },
    featured:
    {
        type:Boolean,
        required:true
    },
    refurbished:
    {
        type:Boolean,
        required:true
    },
    tags:
    {   
        type:String,
        enum:['new','featured','best-picks']
    }
});
mongoose.model('Products',products)
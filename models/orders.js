var mongoose = require('mongoose');
var orders = mongoose.Schema({
    // orderId:
    // {
    //     type:Number
    // },
    // user : 
    // {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    products:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cart'
    },
    deliveryDate:
    {
        type:Date,
        required:true,
        default:Date.now()
    },
    total:
    {
        type:Number,
        required:true,
        min:0
    },
    paymentDetails:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Payment'
    }    
});
mongoose.model('Orders',orders);
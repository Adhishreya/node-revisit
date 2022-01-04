var mongoose = require('mongoose');
var cart = mongoose.Schema({
    productId :{
        unique:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    },
    quantity:
    {
        type:Number,
        default:0,
        validate(value)
        {
            if(value < 0) throw new Error("");
        }
    }
});
module.exports = mongoose.model('CartItem',cart);

var mongoose = require('mongoose');
var cart = mongoose.Schema({
    item :{
        unique:true,
        type:[mongoose.Schema.Types.ObjectId],
        ref:'CartItem'
    },
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
});
module.exports = mongoose.model('Cart',cart);


    
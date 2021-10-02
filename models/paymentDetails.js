var mongoose = require('mongoose');
var payment = mongoose.Schema({
    paymentType:
    {
        type:String,
        reqired:true
    },
    provider:
    {
        type:String,
        required:true
    }

});
mongoose.model('Payments',payment);
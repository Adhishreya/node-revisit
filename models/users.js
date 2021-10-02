var mongoose = require('mongoose');
var users =  mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:String
    },
    address:
    {
        type:String,
        minLength:10,
        required:true
    }
});
mongoose.model('Users',users);
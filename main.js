const app = require('express')();
// const config = 
require('dotenv').config();
const PORT =  process.env.PORT || 5000;
var mongoose = require('mongoose');

//trying to connect to database
var uri = process.env.URL;
mongoose.connect(uri,{useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});

//getting th database connection
var db = mongoose.connection;

//error to be displayed in case of a connection error
db.on('error',console.error.bind(console,"MongoDb connection error"));
app.get('/',(req,res)=>{
    // console.log(process.env.URL)
    res.sendStatus(200);
});
app.listen(PORT,console.log(`listening ${PORT}`))
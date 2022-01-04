const app = require('express')();
// const config = 
require('dotenv').config();
const PORT =  process.env.PORT || 5050;
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

const config ={
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
}
console.log(config);

cloudinary.config(config);

app.get('/',(req,res)=>{
    // console.log(process.env.URL)
    res.sendStatus(200);
});

app.post("/upload-image",(req,res)=>{
    const image = req.body.image;
    if(image){
    cloudinary.uploader.upload(image).then(result=>{
        res.statusCode=200;
        res.json({
            status: "success",
            message: "Image uploaded successfully",
            result: result
            });
        }).catch(err=>{
            res.statusCode=500;
            res.json({
                status: "error",
                message: "Image upload failed",
                result: err
            });
        }
    );
    }
    else{
        res.sendStatus(400);
    }
})

app.listen(PORT,console.log(`listening ${PORT}`))
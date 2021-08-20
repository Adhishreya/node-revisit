const app = require('express')();
const products= require('./data');

const logger =(req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();//t oexecute the next middleware

}
//logger is the middleware
app.get('/',logger,(req,res)=>{
    console.log('this is home');
    res.send('Home');
});
app.get('/about',logger,(req,res)=>{
    console.log('this is about');
    res.send('about')
})
app.listen(3002,()=>{console.log('listening')})
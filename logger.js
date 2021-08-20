const logger =(req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();//t oexecute the next middleware

}
module.exports = logger;
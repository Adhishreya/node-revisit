const http= require('http')

const server=http.createServer((req,res)=>{
    // res.write('basic')
    // res.end();
    if(req.url === '/')
    res.end('home page')
    else if(req.url === '/about')
    res.end('about page')
    else
    res.end(`<div><h2>Oops that page doesn't exist</h2><a href='/'>home</a></div>`)
});
server.listen(3002);
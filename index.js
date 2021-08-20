const http = require('http');
const {readFileSync} =require('fs');
const homePage=readFileSync('./index.html');
const aboutPage=readFileSync('./front-end/index.html');
const aboutPageStyle=readFileSync('./front-end/style.css');
const aboutPageScript=readFileSync('./front-end/script.js');
const server = http.createServer((req,res)=>
{  
     if(req.url === '/')
{
    
    res.writeHead(200,{"content-type":"text/html"})
    res.end(homePage)
}
    else  if(req.url === '/about')
    {
        
        res.writeHead(200,{"content-type":"text/html"})
        res.end(aboutPage)
    }

    //creating custom resources for css and scipt page request endpoints
    else  if(req.url === '/style.css')
    {
        
        res.writeHead(200,{"content-type":"text/css"})
        res.end(aboutPageStyle)
    }

    else  if(req.url === '/script.js')
    {
        
        res.writeHead(200,{"content-type":"text/javascript"})
        res.end(aboutPageScript)
    }


    else  
    {
        
        res.writeHead(404,{"content-type":"text/html"});//server could not find the requested resource
        res.end('<h2>Page not Found</h2>')
    }
    
    
});

server.listen(3002);
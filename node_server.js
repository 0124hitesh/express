// 

const http=require('http');

//craete server object
const server=http.createServer((req,res)=>{

    const url=req.url;
    if(url === '/'){
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body>HOmeee</body>");
        res.write("</html>");
        return res.end();
    }

    if(url=== '/about'){
        res.write("<html>");
        res.write("<head><title>Aboout</title></head>");
        res.write("<body>Aboutt</body>");
        res.write("</html>");
        return res.end();
    }
});

//Server Setup
server.listen(3000,()=>{
    console.log("server connected")
});
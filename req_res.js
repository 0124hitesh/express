const express=require('express');
const path=require('path');

const app=express();

const port=process.nextTick.PORT || 3500;
app.listen(port,()=>console.log("server connected "+port));

app.get('/',(req,res)=>{
    // res.send("<h1>Hellooo</h1>");

    //res.write("<h1>Hellooo</h1>");
    //res.write('<input type="text" placeholder="input">');
    //res.end();

    //res.sendFile(path.resolve(__dirname)+'/req_res_file.html');

    res.json([
        {name:"Hitehs",lastName:"Sharma"},
        {abc:"ljkl",xyz:454}
    ]);
})

app.get('/request',()=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.header);
    console.log(req.query);
    console.log(req.body);
});

app.get('/filee',(req,res)=>{
    res.sendFile(path.resolve(__dirname)+"/req_res_file.html");
})
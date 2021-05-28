const express=require('express');
const app=express();
//var request = require('request');

const port=process.env.PORT || 4000;
app.listen(port, ()=>{console.log("Server Connected " + port)});
const name="Express"
app.get('/',(req,res)=>{
    res.send('Home');
});
app.get('/express',(req,res)=>{
    res.send({name});
});

// app.get('/',(req,res)=>{
//     request('https://www.google.com/', function(error,response,body){
//         if(!error && response.code == 200){
//             res.send("hello 2");
//         }
//     });
// })
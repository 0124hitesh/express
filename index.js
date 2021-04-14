const express=require('express');
const app=express();
// app.listen(3000) 3000-port number randomly

// Provide suitable port if available otherwise 4000
const Port=process.env.PORT || 4000;
app.listen(Port,()=>{console.log("server connected "+Port)})

// app.method(<route>, callback)  methods- get, post, delete, push
//app.get('/',(req,res));
app.get('/',(req,res)=>{res.send('hello')});
app.get('/about',(req,res)=>{res.send('<h1>Aboutt</h1>')});


//node index.js
//nodemon index.js -- not required to refresh
//package.json ->  script ->  start:"nodemon index.js"

// npm init
// npm i express
// npm i nodemon -d


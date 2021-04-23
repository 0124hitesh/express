const express=require('express');
const path=require('path');

const app=express();

const port=process.env.PORT || 3000;

app.listen(port, ()=>{console.log("Server connected "+port)});

//Application Level Middleware
app.use((req,res,next)=>{
    console.log(`Middleware-1 ${req.url} ${req.method} ${req.ip} ${new Date()}`);
    next();
})

// Sequence matter
app.use((req,res,next)=>{
    console.log("Middleware-2");
    // next();
    next();
});

// Route level Middleware
//only run for /dash
app.use('/dash',(req,res,next)=>{
    console.log("Middleware_Dashboard");
    next();
});

// middleware using function
app.get('/dash',auth,(req,res)=>{
    console.log("Home Page - Middleware");
    res.send("hello");
});

app.get('/',(req,res)=>{
    console.log("Home Page");
    res.send('Home Page');
})

app.get('/dash',(req,res)=>{
    console.log("Dashboard");
    res.send('dashboard');
});

// require rest file for POST
app.post('/user',(req,res)=>{
    console.log("user Page");
    res.send('User');
});

function auth(req, res, next){
    console.log("Middleware-Function");
    //url ?pwd=1234
    if(req.query.username==="1234"){
        next();
    }
    else{
        res.send("Not Valid");
    }
}

const express=require('express');
const path=require('path');

const app=express();

const port=process.env.PORT || 4000;
app.listen(port,()=>{console.log("Server connected "+ port)});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/b.html');
});

app.get('/a',(req,res)=>{
    res.send(data);
});

// const data=[
//     {
//         user:"abc",
//         password:"123"
//     },
//     {
//         user:"xyz",
//         password:"456"
//     }
// ];

const data=require('./data.json');
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.post('/b.html',(req,res)=>{
    const t= data.find((c) => c.user === req.body.user);
    // res.write(t.user + " "+req.body.user);
    // res.write(t.password+" "+req.body.pwd);
    // res.end();
    if(!t)res.send("No data");
    else{
        if(t.password === req.body.pwd){
            res.send("Valid");
        }
        else
            res.send('Invalid')
    }
});
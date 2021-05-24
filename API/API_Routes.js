const express=require('express');
const data_1=require('./data_1');
const data_2=require('./data_2');

const app=express();

const port = process.env.PORT || 4000;
app.listen(port, ()=>{console.log("Server Connected "+port)});

app.get('/',(req,res)=>{
    res.send("Hello World");
})

// app.use(data_1);
// Import code only when specific URL hit
app.use('/data_1',data_1);
app.use('/data_2',data_2);
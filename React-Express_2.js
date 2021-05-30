const express=require('express');
const app=express();

app.listen(4000,()=>{console.log('Server Connected 4000')})

const data=[
    {
        name:"Hitesh",
        pass:1234
    },
    {
        name:"Sharma",
        pass:4554
    }
];


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Home");
});


app.post('/express',(req,res)=>{
    var re="Invalid";
    const t= data.find((c) => c.name === req.body.name);
    //console.log(!t);
    if(!t)return res.send({re});
    console.log(req.body.name);
    console.log(t.pass+" "+req.body.pass);
    if(t.pass === parseInt(req.body.pass)){
        re="Valid";
    }
    return res.status(200).send({re});
})
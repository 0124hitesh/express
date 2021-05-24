const express=require('express');
const path=require('path');
const joi=require('@hapi/joi');
const router=express.Router();

const app=express();
// const port = process.env.PORT || 5000;
// app.listen(port, ()=>{console.log("Server Connected "+port)});

const data_1=[
    {
        id:1,
        name:"FullStack"
    },
    {
        id:2,
        name:"MERNStack"
    }
];

router.get('/',(req,res)=>{
    res.send(data_1);
});

router.get('/:id',(req,res)=>{
    const d=data_1.find((c)=> c.id === parseInt(req.params.id));
    if(!d){res.send("No data")}
    res.send(d);
});

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.post('/',(req,res)=>{
    const d={
        id:data_1.length + 1,
        name:req.body.name
    };
    data_1.push(d);
    res.send('Data Inserted')
});

router.put('/:id',(req,res)=>{
    const d=data_1.find((c)=> c.id === parseInt(req.params.id));
    if(!d)
        return res.send("Not Available");

    const schema=joi.object({
        name: joi.string.min(3).required()
    });

    const result=schema.validate(req.body);
    if(!result)
        return res.send('Invalid Input');
    d.name=req.body.name;
    res.send("Data Updated");
});

router.delete('/:id',(req,res)=>{
    const d=data_1.find((c=>c.id === parseInt(req.params.id)));
    if(!d)
        return res.send("No Data");

        const index=data_1.indexOf(d);
        data_1.splice(index,1);
        res.send("Record Deleted");
});

module.exports = router
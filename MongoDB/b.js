var express = require('express'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/db1',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});
const c = mongoose.model('c', new mongoose.Schema({url:String, text:String, id:Number}), 'cn');

// const con=c.find({name:"Hitesh Sharma"}).then((doc)=>console.log(doc));
// console.log(con);

const app = express();

app.get("/", async (req, res, next) => {
  
    try {
        let { page, size, sort } = req.query;
  
        if (!page) {
  
            page = 1;
        }
  
        if (!size) {
            size = 10;
        }
  
        const limit = parseInt(size);
  
        const cc = await c.find().sort(
            { votes: 1, name: 1 }).limit(limit);

        res.send({
            page,
            size,
            Info: cc,
        });

        // res.send(sJSON.stringify(cc));
    }
    catch (error) {
        res.sendStatus(error);
    }
});

app.listen(5001, ()=>{console.log("Port 5001")});
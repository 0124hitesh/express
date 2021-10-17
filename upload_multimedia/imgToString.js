const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const fs=require('fs');


const port = process.env.PORT || 4000;

app.listen(port, ()=>{console.log("Server Connected " + port)});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const imgstorage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  
  
  const upload = multer({ storage : imgstorage});  
  
  app.get('/up', (req,res)=>{ 
    var image1 = './z.jpg';

  var base64Img = require('base64-img');
  var imageData1 = base64Img.base64Sync(image1);
  // var base64Data = imageData1.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  var base64Data = imageData1.replace("data:", "").replace(/^.+,/, "")
  // console.log(base64Data)
  var img = Buffer.from(base64Data, 'base64');

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': img.length
  });
  // console.log(img)
  res.end(img);
  });  

const fs=require('fs');
const request=require('request');

let formData={
    image: fs.createReadStream(__dirname + '/1.jpg')
}
// img=fs.createReadStream('./1.jpg')

request.post({url:'https://skin-cancer-detection-api351.herokuapp.com/upload',formData},(err,res,body)=>{
    console.log(res);
});

// const axios = require('axios')

// axios.post('https://skin-cancer-detection-api351.herokuapp.com/upload', img).then(res => {
//     console.log(`statusCode: ${res.statusCode}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })
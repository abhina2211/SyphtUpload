const express = require('express');
const router = express.Router();
const multer= require('multer');
const path= require('path');
//let request = require('request-promise');
const fs = require('fs');
const http=require('http');
 //let shared = require ('./shared');
let request = require('request');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads/docs')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage }).single('files');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'SyphtUpload' });
});


//Uploading the file to Sypht
router.post('/upload', function (req, res) {
  //console.log(req);
  // Persist the file
  //const filePath = req.file.path;
 // console.log("File request path is " + req.file)


  // NOw Stream the file.
  let access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FVTBOalpGTmpNM1FqTXpOek00TURWR1JFTTJNREk1TXpFeFJUazVNVGxEUkRZMk1rRkJPUSJ9.eyJodHRwczovL2FwaS5zeXBodC5jb20vY29tcGFueUlkIjoiZTc4M2I4NDctYzk1YS00YzQ5LWFjYWQtYjQ5ODk1ODg5ODhhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zeXBodC5jb20vIiwic3ViIjoiWEtPWm1DRFJGWU1kOHdwanI1MGhBZ1M0akttTGZITnRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN5cGh0LmNvbSIsImlhdCI6MTU2NTc1NTkzMywiZXhwIjoxNTY1ODQyMzMzLCJhenAiOiJYS09abUNEUkZZTWQ4d3BqcjUwaEFnUzRqS21MZkhOdCIsInNjb3BlIjoicmVzdWx0OmFsbCBmaWxldXBsb2FkOmFsbCBhZG1pbmlzdHJhdGlvbjpjb21wYW55IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.mJYy1N92FS3cmWhsMF2JYKYCh6ZAMnPQ03-WkTAVGI-5Pn6sJW5LZcJengF5-_xdBf2Kg0vGhotuOlDeu1pCk2BjKrfl3M944ImRpdB6xv82oPrvB6CTYleV9Wg2D_swcFcVj7oagU5Mvaw0BzYXIUwdiTQ7_Q4s1yRWZrZ_l5ms5aEmkopKeK6sUi9zFDnIr-ndidJMUEhUzpHc5EoZbjPjKpERO4hRHyf3hBLwfNnjqO0W-4CsQWc1TLp7xvDWtJZwn14MIEWHjPdQj_2XYAFXHRMcwh7b7ZhlhEI2Df8YGPTZFe3bdvplWNHSRb1qlKZECS4PoVYyj0g7iBAohg';
  console.log(access_token);
  let options = {
    url: 'https://api.sypht.com/fileupload',
    formData: {
      fileToUpload: fs.createReadStream(__dirname + '/uploads/invoice-template-us-neat-750px.png'),
      //fileToUpload: fs.createReadStream(filePath),
      fieldSets: JSON.stringify(['sypht.invoice', 'sypht.document'])
    },
    headers: {
      'Authorization': 'Bearer ' + access_token

    },
    json: true
  }
  //console.log(access_token)
  request.post(options, (error, response, body) => {
    console.log(error)
    console.log(body);
  })
  //})
  // })
})


/*  console.log(req);
  if(!req.file){
    console.log("No file uploaded");
    return res.send({
      success: false
    });
  } else {
    console.log("File received");
    //res.json(req.file);
    return res.send({
      success:true
    })
  }
});*/

//POST to retrieve the file results
router.post('/result', function (req, res) {
  // NOw Stream the file.
  let access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FVTBOalpGTmpNM1FqTXpOek00TURWR1JFTTJNREk1TXpFeFJUazVNVGxEUkRZMk1rRkJPUSJ9.eyJodHRwczovL2FwaS5zeXBodC5jb20vY29tcGFueUlkIjoiZTc4M2I4NDctYzk1YS00YzQ5LWFjYWQtYjQ5ODk1ODg5ODhhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zeXBodC5jb20vIiwic3ViIjoiWEtPWm1DRFJGWU1kOHdwanI1MGhBZ1M0akttTGZITnRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN5cGh0LmNvbSIsImlhdCI6MTU2NTc1NTkzMywiZXhwIjoxNTY1ODQyMzMzLCJhenAiOiJYS09abUNEUkZZTWQ4d3BqcjUwaEFnUzRqS21MZkhOdCIsInNjb3BlIjoicmVzdWx0OmFsbCBmaWxldXBsb2FkOmFsbCBhZG1pbmlzdHJhdGlvbjpjb21wYW55IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.mJYy1N92FS3cmWhsMF2JYKYCh6ZAMnPQ03-WkTAVGI-5Pn6sJW5LZcJengF5-_xdBf2Kg0vGhotuOlDeu1pCk2BjKrfl3M944ImRpdB6xv82oPrvB6CTYleV9Wg2D_swcFcVj7oagU5Mvaw0BzYXIUwdiTQ7_Q4s1yRWZrZ_l5ms5aEmkopKeK6sUi9zFDnIr-ndidJMUEhUzpHc5EoZbjPjKpERO4hRHyf3hBLwfNnjqO0W-4CsQWc1TLp7xvDWtJZwn14MIEWHjPdQj_2XYAFXHRMcwh7b7ZhlhEI2Df8YGPTZFe3bdvplWNHSRb1qlKZECS4PoVYyj0g7iBAohg';
  console.log(access_token);
  let request = require('request');
    let fileid='77fdbe46-c4f5-4bfc-9fac-80dc1a9606dc';
  let options = {
    url:'https://api.sypht.com/result/final/{{fileid}}',
    headers:{
      'Authorization': 'Bearer ' + access_token
    },
    json:true
  }
  request.get(options, (error, response, body) => {
    console.log(body)
  })
  //console.log(access_token)
  request.post(options, (error, response, body) => {
    console.log(error)
    console.log(body);
  })
  //})
  // })
})


module.exports = router;

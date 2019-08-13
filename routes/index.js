const express = require('express');
const router = express.Router();
const multer= require('multer');
const path= require('path');
//let request = require('request-promise');
const fs = require('fs');
const http=require('http');
 //let shared = require ('./shared');
let request = require('request');

//commenting because the code was moved to upload.js
/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads/docs')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})*/
//commenting because the code was moved to upload.js
//const upload = multer({ storage: storage }).single('files');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'SyphtUpload' });
});


//commenting because the code was moved to upload.js
/*router.post('/upload', function (req, res) {
  console.log(req);
  // Persist the file
  //const filePath = req.file.path;
 // console.log("File request path is " + req.file)


  // NOw Stream the file.
  let access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FVTBOalpGTmpNM1FqTXpOek00TURWR1JFTTJNREk1TXpFeFJUazVNVGxEUkRZMk1rRkJPUSJ9.eyJodHRwczovL2FwaS5zeXBodC5jb20vY29tcGFueUlkIjoiZTc4M2I4NDctYzk1YS00YzQ5LWFjYWQtYjQ5ODk1ODg5ODhhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zeXBodC5jb20vIiwic3ViIjoiWEtPWm1DRFJGWU1kOHdwanI1MGhBZ1M0akttTGZITnRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN5cGh0LmNvbSIsImlhdCI6MTU2NTcyODU1NywiZXhwIjoxNTY1ODE0OTU3LCJhenAiOiJYS09abUNEUkZZTWQ4d3BqcjUwaEFnUzRqS21MZkhOdCIsInNjb3BlIjoicmVzdWx0OmFsbCBmaWxldXBsb2FkOmFsbCBhZG1pbmlzdHJhdGlvbjpjb21wYW55IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.YH2nd0LAcsnO7zWikrYKshd3dYlhxODEeoPdNcRvKs9z61u3YYcmReqM4KnmdNKxKCB01lIfFKAx14-MsIKkQ8ty66RchvsrQqrI42cA-_hADI_OaUTSLsVCPQtTWBJwYDLI59R2M2CvAnKrupHDP6RV2Jo9-WFXzWJsmGR9isKD59xgq2Hk8q8lWnWUqbEFcl7j1y49N1fu1kcF-Qxz1_E2bV1NtEnJwnwXqVs2EcTgwXbt_WC3-95Q7QPGa3W9I9MIgqIrZYCWp04QbToDlxUJNpvdOEZWVpohBALL312gl3Ens2v5VA4Bh6V-ATo1af9JJ17yUa6RbAtWNFDuhA';
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
  console.log(access_token)
  request.post(options, (error, response, body) => {
    console.log(error)
    console.log(body);
  })
  //})
  // })
})*/


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

module.exports = router;

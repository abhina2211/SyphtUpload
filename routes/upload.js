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

/* POST function. */

router.post('/upload', function (req, res) {
    console.log(req);
    /*upload(req, res, function (err) {
      if(err) {
        return res.end("Error uploading file.");
        console.log(req);
      }*/

    // Persist the file
    //const filePath = req.file.path;
    console.log("File request path is " + req.file)


    // NOw Stream the file.
    let access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FVTBOalpGTmpNM1FqTXpOek00TURWR1JFTTJNREk1TXpFeFJUazVNVGxEUkRZMk1rRkJPUSJ9.eyJodHRwczovL2FwaS5zeXBodC5jb20vY29tcGFueUlkIjoiZTc4M2I4NDctYzk1YS00YzQ5LWFjYWQtYjQ5ODk1ODg5ODhhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zeXBodC5jb20vIiwic3ViIjoiWEtPWm1DRFJGWU1kOHdwanI1MGhBZ1M0akttTGZITnRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN5cGh0LmNvbSIsImlhdCI6MTU2NTczMDI0OCwiZXhwIjoxNTY1ODE2NjQ4LCJhenAiOiJYS09abUNEUkZZTWQ4d3BqcjUwaEFnUzRqS21MZkhOdCIsInNjb3BlIjoicmVzdWx0OmFsbCBmaWxldXBsb2FkOmFsbCBhZG1pbmlzdHJhdGlvbjpjb21wYW55IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MIAm6Kc2B9oXXGYojR-yRDt0-ad4rqQZb6Bm3r8F5ralibQeGNjAE4696hRirxqrDxOhsqnVUJmRaW-X-l4FQoittrnLVQ8FqW-Kvz0GjGYepfPt9SDtnyf--ZaJwSQ6jr6seGS0QjekDbPfOa7MAo7QNEvLaIWzP4kklTjUq2LbDAl3ugyugmjtjchK05-1HhgNcBQ5GRT-Y5Mp3SmLvf-uO6nW9JcjqDoPdfyNi8LXo1-q8BCBq5aWoiRJQUWytMjllgW8e7frg_zEbWMWgeWaKx4EtxwIcvpPjGKFGm2WM_oOoKsAxSpMNoBPhGeGOz656rRUzrcv__xxclCRjQ';
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

module.exports = router;

const express = require("express");
const router = express.Router();
const env=require('dotenv');
let request = require('request-promise');
//let shared = require ('./shared');
env.config();


router.get("/", function(req, res, next) {

    const client_id = process.env.CLIENT_ID
    const client_secret = process.env.CLIENT_SECRET
    console.log(client_id);
    console.log(client_secret);
    let options = {
        method: 'POST',
        uri: 'https://login.sypht.com/oauth/token',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:{
            client_id: client_id,
            client_secret: client_secret,
            audience: "https://api.sypht.com",
            grant_type: "client_credentials"
        },
        json: true,

    }


    request.post(options, (error, response, body) => {
       // shared.access_token = response.accessToken;

       // console.log('value of shared token is: ' + shared.access_token)
        //console.log('value of response token is: ' + body)
        res.status(200).json(response.accessToken);
        console.log(body);
    })
    request(options).then(function (response){
        res.status(200).json(response.accessToken);
    })
        .catch(function (err) {
            console.log(err);
        })
});

module.exports = router;

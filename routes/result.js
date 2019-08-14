// const express = require('express');
// const router = express.Router();
// const path= require('path');
// //let request = require('request-promise');
// const fs = require('fs');
// const http=require('http');
// //let shared = require ('./shared');
// let request = require('request');
//
// router.post('/result', function (req, res) {
//     // NOw Stream the file.
//     let access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FVTBOalpGTmpNM1FqTXpOek00TURWR1JFTTJNREk1TXpFeFJUazVNVGxEUkRZMk1rRkJPUSJ9.eyJodHRwczovL2FwaS5zeXBodC5jb20vY29tcGFueUlkIjoiZTc4M2I4NDctYzk1YS00YzQ5LWFjYWQtYjQ5ODk1ODg5ODhhIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zeXBodC5jb20vIiwic3ViIjoiWEtPWm1DRFJGWU1kOHdwanI1MGhBZ1M0akttTGZITnRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN5cGh0LmNvbSIsImlhdCI6MTU2NTc0NTM0MCwiZXhwIjoxNTY1ODMxNzQwLCJhenAiOiJYS09abUNEUkZZTWQ4d3BqcjUwaEFnUzRqS21MZkhOdCIsInNjb3BlIjoicmVzdWx0OmFsbCBmaWxldXBsb2FkOmFsbCBhZG1pbmlzdHJhdGlvbjpjb21wYW55IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.fAQdJn1FLjx9MJuGbQXeYwcU2yODEoFsODuN8z2pHeMuERlOP-i0Lixr_XghP8cCmM0hoY3nespvSMWJvDYOJVcBtuha2JgeDSNIAvhBD_cr3RPbmm88OK5B6Tdm9cM6mz2gdJOAZKWRFw96YArngXpecgnToiiaJA9UOoN_Kv6daDS4hLgb2ZhugfUWj7xb-8I9hv_Xb9T7U6XtbzJ5lABGEJ_tNUP4Pj9eK0CoiRb8Wmrzo-L1syQ9ctxaNihKNAWRLPSFzXOffosxubmPl4sGCvm0u1rWm8ZzsMxgZ6sXl6dklauYDX9xmWAIoiNJmBr0erBs0Ou4EyCE-sD2GQ';
//     console.log(access_token);
//     let request = require('request');
//
//     let options = {
//         url:'https://api.sypht.com/result/final/{{dda8b7ff-72ec-4d2a-be8b-71974a7498f3}}',
//         headers:{
//             'Authorization': 'Bearer ' + access_token
//         },
//         json:true
//     }
//     request.get(options, (error, response, body) => {
//         console.log(body)
//     })
//     //console.log(access_token)
//     request.post(options, (error, response, body) => {
//         console.log(error)
//         console.log(body);
//     })
//     //})
//     // })
// })
//
// module.exports=router;
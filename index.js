const express = require('express');
const path = require('path');
const res = require('express/lib/response');


const app = express();

// runs express server app on port 3000
app.listen(3000, () => console.log('listening at 3000'));

// app can understand static files
app.use(express.static('public'));

//app can understand json // limit of 1mb // other options in express website
app.use(express.json({limit: '1mb'}));

// opens the index.html file on first page
app.get("/",(req, res) => {
    //res.send("hello world")
    res.sendFile(path.join(__dirname, '/index.html'));
});

// adding the plan.json file
app.get("/plan.json",(req, res) => {
    //res.send("hello world")
    res.sendFile(path.join(__dirname, '/plan.json'));
});

// capture the post from client -  HTML / JS
app.post('/api', (request, response)=>{
    //console.log(request.body[0].TotalScore);
    console.log(request.body[0]);
});
// // const users = require("./plan");
  
// // console.log(plan);
// const fs = require("fs");

// // Storing the JSON format data in myObject
// var data = fs.readFileSync("plan.json");
// var myObject = JSON.parse(data);

// //console.log(myObject);

// // data to be added
// let user = {"GFGUserName": "User-script-added1111", "NoOfProblems": "10", "TotalScore": "31", "Articles": "12"}

// // Adding the new data to our object
// myObject.push(user);


// console.log(myObject);

// fs.writeFile("plan.json", JSON.stringify(myObject), err => {
     
//     // Checking for errors
//     if (err) throw err; 
   
//     console.log("Done writing"); // Success
// });




////////////////////////////
//webserver js
// ///////////////////////////
// //1.
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, resp) {
//     //3.
//     if (req.url === "/create") {
//         fs.readFile("test.html", function (error, pgResp) {
//             if (error) {
//                 resp.writeHead(404);
//                 resp.write('Contents you are looking are Not Found');
//             } else {
//                 resp.writeHead(200, { 'Content-Type': 'text/html' });
//                 resp.write(pgResp);
//             }
             
//             resp.end();
//         });
//     } else {
//         //4.
//         resp.writeHead(200, { 'Content-Type': 'text/html' });
//         resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
//         resp.end();
//     }
// });
// //5.
// server.listen(5050);
 
// console.log('Server Started listening on 5050');

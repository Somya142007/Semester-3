// import http from 'http'; //ES6 module import
// import fs from 'fs';
// import { fromSync } from 'stream/iter';
// const server= http.createServer((req, res)=>{
//     console.log("Hello World")
//     // res.statusCode= 404;
//     // res.setHeader('Content-Type', 'text/plain');
// res.writeHead(200, {
//     "Content-Type": "text/html",
//     "custom-header": "Hello World   "
// })
// // const order= {
// //     "orderId": 123,
// //     "ordername": "Iphone"
// // };
// // res.end(JSON.stringify(order));

// fs.readFile("Page_not_found.html", "utf8",(err, data) => {
//    console.log("File data read completed");
//    res.end(data);
// });
// })


// const PORT= 3000;
// const ADDRESS= "127.0.0.1"
// server.listen(PORT, ADDRESS, ()=>{
// console.log('Server is running...');


// })













import http from "http";   // ES6 import
import fs from "fs";       // File system module

const server = http.createServer((req, res) => {
  console.log("Hello World");

  res.writeHead(200, {
    "Content-Type": "text/html",
    "custom-header": "Hello World"
  });

  // Read an HTML file and send it as response
  fs.readFile("Page_not_found.html", "utf8", (err, data) => {
    if (err) {
      res.end("<h1>File not found</h1>");
      return;
    }
    console.log("File data read completed");
    res.end(data);
  });
});

const PORT = 3000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
  console.log(`Server is running......`);
});

 import fs from 'fs';
 import process from 'process';
// setTimeout(()=>{
//     console.log("Set Timeout");
// }, 1000);
fs.readFile("intro.txt", "utf8",(err, data) => {
   console.log("File data read completed");
   setTimeout(()=>{
       console.log("set timeout inside fs.readFile");
   }, 0);
    setImmediate(()=>{
     console.log("set immediate inside fs.readFile");
 }, 0);
 console.log("File data read completed");
});
process.nextTick(()=>{
console.log("Next Tick");
})

// setInterval(()=>{
//     console.log("Set Interval");
// }, 1000);
// setImmediate(()=>{
//     console.log("Set Immediate");
// }, 1000);


import fs from "fs"

//Create the directory
fs.mkdir("./myFolder1/myFolder2/myFolder3",{recursive: true},(err)=>{
    if (err){
        console.log(err);
    return    }
    console.log("Directory created successfully");
fs.writeFile("./myFolder/script.txt", "Hello", (err)=>{
    if (err){
        console.log(err);
        return
    }
    console.log("File created successfully.")
})
})
fs.readdir("./", (err, files)=>{
    if (err){
console.log(err);
return
    }
    console.log("Files:", files);
})
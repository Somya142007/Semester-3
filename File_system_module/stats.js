import fs from 'fs';

fs.stat("notes.txt", (err, stats)=>{
    if (err){
        console.log(err);
        return;
    }
   // console.log("Information of [notes.txt]", stats);
    console.log("Size of the file:" , stats.size);
    console.log("Creation time of the file:", stats.birthtime.toISOString().split("T")[0]);
    console.log("Modification timeof the file:", stats.mtime.toISOString());
    console.log("Access time of the file:", stats.atime.toISOString());
    console.log("Change time of the file:", stats.ctime.toISOString());

    console.log("Is it a file?", stats.isFile());
    console.log("Is it a directory?", stats.isDirectory());


});

















import fs from "fs";

// Create a file
fs.writeFileSync("checker.txt", "Transformer Architecture");
console.log("File created successfully.");

fs.stat("checker.txt", (err, stats) => {
    if (err) {
        console.error("Error retrieving file stats:", err);
        return;
    }
    console.log("Size of the file:", stats.size);
});
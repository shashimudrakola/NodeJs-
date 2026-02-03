// console.log("running")

import path from "path";

// join two or more files 

const fullPath = path.join('/path','index.py','file.java')
// console.log("files join = ",fullPath)

// absolute path 
const absolutePath = path.resolve();
// console.log("we are currently working in = ",absolutePath)

// Extension name 

const extname = path.extname('resume.pdf')

// console.log(extname)

if(extname === ".docx") console.log("approved")
else console.log("nope")
const fs = require('fs')
// read file 
const readFile = fs.readFileSync('test.txt', 'utf8')

console.log(readFile)


// write file


const writeFile = fs.writeFileSync('testwrite.txt', readFile)








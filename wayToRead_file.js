var fs = require('fs')
var data = fs.readFileSync("docment.txt")
console.log(data.toString());
console.log("programm ended");

// readFile
var fs = require('fs')
fs.readFile("docment.txt", function (err, data) {
    if (err)
        return console.error(err)
    console.log(data.toString())

})
console.log("ertyuioknbvcde");

// var fs=require('fs')
// fs.readFile("docment.txt","utf-8",function(err,data) {
//     if(err) 
//         console.log(data)

// })
// console.log("ertyuioknbvcde");
var fs=require("fs")
var data=fs.writeFileSync("user.txt","today in this campus cleaning will happen")
console.log("cleaning will start 2'o clock");
// WRITEFILE
fs.writeFile("user.txt","today in this campus cleaning will happen",function (err) {
    if(err)
    console.log(err);
    
})
console.log("cleaning will start 2'o clock");
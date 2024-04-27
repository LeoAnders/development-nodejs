//fs = File system 
let fs = require("fs")


fs.readFile("teste.txt", "Hallo world",function(error, data){

  if (error) {
    console.error(error);
    return;
  }
  console.log(data)
} )




/*
fs.writeFile()
fs.appendFile()
fs.unlink()
fs.rename()
*/
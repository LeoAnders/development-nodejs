//fs = File system 
let fs = require("fs")

let args = process.argv.slice(2);

let fileName = args[0]

fs.readFile(fileName, "UTF8", (error, data) =>{

  if(error) throw error ;  // Se houver um erro, a exceção será lançada e a execução será interrompida
  
  fs.writeFile(fileName + "_upperCase", data.toUpperCase(), (error)=>{
    if(error) throw error;

    console.log("Arquivo criado com sucesso");

  })

})
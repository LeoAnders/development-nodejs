
let calc = require("./calc")

let args = process.argv.slice(2)//Slice()função de todos os arrays que ele vai fazer um corte dos elementos

console.log(args);

let a = Number(args[1])
let b = Number(args[2])
let c = ""

if(args[0] =="s"){
  c = calc.soma(a, b) //<----- Observe que atribuímos o argumento calc 

}else if(args[0] == "m"){
  c = calc.mult(a, b) //<------ Observe que atribuímos o argumento calc 

}else{
  c = "Invalido"
}

console.log(c);

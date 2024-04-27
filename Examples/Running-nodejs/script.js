
let args = process.argv.slice(2)//Slice()função de todos os arrays que ele vai fazer um corte dos elementos

console.log(args);

let a = Number(args[1])
let b = Number(args[2])
let c = ""

if(args[0] =="s"){
  c = soma (a, b)

}else if(args[0] == "m"){
  c = mult(a,b)

}else{
  c = "Invalido"
}

function soma(x, y){
 return x + y;
}

function mult(x, y){
  return x * y;
}

console.log(c);


const http = require("http")

http.createServer((request, response) =>{

   response.writeHead(200,{"content-type": "application/json"} )
   response.end(JSON.stringify({texto: "<h1>hello World</h1>"})) 

}).listen(3000, (error)=>{
  if(error){
     console.log(error);
  }else{
    console.log("servidor rodando na porta 3000");
  }
 
})
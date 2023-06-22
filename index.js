 import express from 'express' 

 const app = express()
 //get metodo de busca
 // post metodo de criar/inserir
 // put - alterar
 // patch - alterar um campo  especifico
 // delete - excluir

 // primeiro parameto o  endereço raiz
 app.get('/', function(request, response ){
    response.json({message: 'salve!!!'})
 })

 app.listen(3000,() => console.log('rodando na porta 3000') )
 import express, { json } from 'express' 


 const app = express()
 app.use(express.json()) //aceitar body na requisião


 
 const pets = [{nome:'Tico', especie:'Arara'}]
 // metodos e requisições HTTPn
 //get metodo de busca
 // post metodo de criar/inserir
 // put - alterar
 // patch - alterar um campo  especifico
 // delete - excluir

 // primeiro parameto o  endereço raiz
 app.get('/', function(request, response ){
    response.json({pets:pets})
 })

 app.post('/',function(request, response){
   pets.push(request.body)

   response.json({pets})
 })

 app.listen(3000,() => console.log('rodando na porta 3000') )

 
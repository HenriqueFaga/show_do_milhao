// Aqui pegamos o modulo Express dentro do diretorio
// node_modules (Ele ja reconhece que esta dentro dessa pasta)
const express = require('express')

// instanciar o express em uma const para nao pode alterar
const app = express()

// Pagina que eu quero Abrir
// "/" para pagina Raiz
// funcionara no caminho localhost:8080/
app.get("/", function(req, res){
    res.send("Gerenciador de Servidor")
})

// localhost:8080/contato
// Funciona como um apache
app.get("/contato", function(req, res){
    res.send("Contaaatos")
})

app.get("/teste", function(req, res){
    res.send("Contaaatos")
})
// Escutando a porta 8080
app.listen(8080);


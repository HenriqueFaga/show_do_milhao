// Aqui pegamos o modulo Express dentro do diretorio
// node_modules (Ele ja reconhece que esta dentro dessa pasta)
const express = require('express')

// Conexao com o banco
const mysql = require('mysql')

// instanciar o express em uma const para nao pode alterar
const app = express()

// instanciando o Sequelize (interacao com o MYSQL)
const Sequelize = require('sequelize')

// crio o objeto Squelize
const sequelize = new Sequelize('show_do_milhao', 'henrique', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

// Se a conecxao foi bem sucedida (then), se nao (catch)
sequelize.authenticate().then(function(){
    console.log('Conectado no Banco com Sucesso!')
}).catch(function(err){
    console.log('Erro ao conectar com o Banco: ', err)
})

// Criando uma Tabela:
const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
});
// User.sync({force:true});

// Inserir dados
User.create({
    firstName: 'Teste',
    lastName: '222'
})

// Pagina que eu quero Abrir
// "/" para pagina Raiz
// funcionara no caminho localhost:8080/
app.get("/show.html", function(req, res){
    res.sendFile(__dirname + "/src/show.html")
})
app.get("/menu.html", function(req, res){
    res.sendFile(__dirname + "/src/menu.html")
})
app.get("/login.html", function(req, res){
    res.sendFile(__dirname + "/src/login.html")
})
app.get("/cadastrar.html", function(req, res){
    res.sendFile(__dirname + "/src/cadastrar.html")
})
app.get("/comprar.html", function(req, res){
    res.sendFile(__dirname + "/src/comprar.html")
})
app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/login.html")
})
// Usando o CSS
app.use('/css/show.css', express.static(__dirname + "/css/show.css"));

// Usando o JS
app.use('/js/show.js', express.static(__dirname + "/js/show.js"));

// Usando as Imagens 
app.use('/imagens/2.png', express.static(__dirname + "/imagens/2.png"));
app.use('/imagens/3.png', express.static(__dirname + "/imagens/3.png"));
app.use('/imagens/as.png', express.static(__dirname + "/imagens/as.png"));
app.use('/imagens/audience.png', express.static(__dirname + "/imagens/audience.png"));
app.use('/imagens/bone.png', express.static(__dirname + "/imagens/bone.png"));
app.use('/imagens/cards.png', express.static(__dirname + "/imagens/cards.png"));
app.use('/imagens/college.png', express.static(__dirname + "/imagens/college.png"));
app.use('/imagens/jump.png', express.static(__dirname + "/imagens/jump.png"));
app.use('/imagens/mestre.png', express.static(__dirname + "/imagens/mestre.png"));
app.use('/imagens/moeda.png', express.static(__dirname + "/imagens/moeda.png"));
app.use('/imagens/money.png', express.static(__dirname + "/imagens/money.png"));
app.use('/imagens/rei.png', express.static(__dirname + "/imagens/rei.png"));
app.use('/imagens/senhorbarba.png', express.static(__dirname + "/imagens/senhorbarba.png"));
app.use('/imagens/traz.png', express.static(__dirname + "/imagens/traz.png"));

// Escutando a porta 8080
app.listen(8080);


// Aqui pegamos o modulo Express dentro do diretorio
// node_modules (Ele ja reconhece que esta dentro dessa pasta)
const express = require('express')

// Conexao com o banco
const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'henrique',
  password : '123456',
  database : 'show_do_milhao'
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Executando uma Query quando iniciamos o app.js
connection.query('SELECT * FROM usuarios;', function(err, rows, fields){
    if(!err){
        console.log('Resultado:', rows)
    }
    else{
        console.log('Erro ao pegar os resultados!')
    }
})

// Inserir dados na tabela
// connection.query('INSERT INTO usuarios(nome, email, senha) VALUES ("amanda", "amanda@amanda.com", 123123123);', function(err, result){
//     if(!err){
//         console.log('Cadastrado com sucesso!')
//         console.log('Resultado:', result)
//     }
//     else{
//         console.log('Erro ao pegar os resultados!')
//     }
// })
// Update de dados
connection.query("UPDATE usuarios SET nome='Rosangela', email='rosangela@rosangela.com' WHERE id_usuario = 4;", function(err, result){
    if(!err){
        console.log('Atualizado com sucesso!')
        console.log('Resultado:', result)
    }
    else{
        console.log('Erro ao Atualizar!', result)
    }
})
// instanciar o express em uma const para nao pode alterar
const app = express()

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


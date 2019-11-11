// Aqui pegamos o modulo Express dentro do diretorio
// node_modules (Ele ja reconhece que esta dentro dessa pasta)
const express = require('express')

// SESSION
const session = require('express-session')

// instancia do handlebars
const handlebars = require('express-handlebars')

// instanciar o express em uma const para nao pode alterar
const app = express()
app.use(session({
  'secret': '343ji43j4n3jn4jk3n'
}))

const db = require('./models/db')

const usuarios = require("./models/cadastro_usuario")
const perguntas = require("./models/cadastro_perguntas")
// instancia do boder-parcer
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded

// Conf. para o Socket.io
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Array para armazenar mensagens do Chat
let messages = []
var usuario_resposta = {}
var usuario_espera = [false, false]
var usuarios_nomes = []
var usuarios_ids = []
pronto_para_jogo = false
io.on('connection', socket => {
    console.log(`Socket conectado! ${socket.id}`)

    socket.on('Estou_aqui', data => {
        if (usuario_espera[0] == false){
            console.log('Conectou 1')
            console.log(usuario_espera)
            usuario_espera[0] = true
            console.log(usuario_espera)
            // a = app.use(function(req, res, next) {
            //   if (!req.session) {
            //     return next(new Error('oh no')) // handle error
            //   }
            //   console.log("sadasdasd")
            //   next() // otherwise continue
            // })
        }
        else if(usuario_espera[0] == true && usuario_espera[1] == false){
            console.log('Conectou 2')
            console.log(usuario_espera)
            usuario_espera[1] = true
            if(usuario_espera[1] == true && usuario_espera[0] == true){
                usuario_espera[0] = false
                usuario_espera[1] = false
                socket.broadcast.emit('todos_conectados', 0)
            }
        }
    })

    socket.on('vem_vc_tambem', data => {
        socket.broadcast.emit('eba_eu_vou', data)
    })
    // if (quant_usuarios[0] == 0){
    //     quant_usuarios[0] = socket.id

    // }
    // else if (quant_usuarios[1] == 0){
    //     quant_usuarios[0] = socket.id
    //     pronto_para_jogo = true
    //     res.redirect('/show_multi');
    // }

    socket.emit('previousMessages', messages)

    socket.on('crono_seg', data => {
        console.log(data)
        a = 0
        b = setInterval(function(){
            socket.broadcast.emit('recebeCrono', a / 1)
            a += 1
            if(a == 30){
                clearInterval(b)
                a = "Acabou o Tempo!"
                socket.broadcast.emit('acabouTempo', a)
                a = 0
            }
        }, 1000)
    })

    socket.on('Clicou_resposta', data => {
        id_usuarios.push(data)
        socket.broadcast.emit('Nome_do_usuario', data)
    })

    socket.on('respostaUsuario', resposta => {
        usuario_resposta[resposta['id_usuario']] = resposta['resposta']
        var resp = {conteudo: resposta['conteudo'], id_usuario: resposta['id_usuario']}
        console.log('Entra aqui')
        socket.broadcast.emit('quemRespodeu', resp)
    })

    socket.on('sendMessage', data => {
        console.log(data)
        messages.push(data)
        socket.broadcast.emit('receivedMessage', data)
    })
})

app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())
 
// Incluir a Pagina handlebars, carregando o default layout
app.engine('handlebars', handlebars({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

// LOGIN
// Criando a Rota para renderizar login.handlebars
app.get('/login', function (req, res) {
    res.render('login')
})

app.get('/cronometro', function (req, res) {
    res.render('cronometro')
})
app.get('/chat', function (req, res) {
    res.render('chat')
})
// Action Login
// Aqui verificamos o Usuario e senha
app.post('/sel-login', function (req, res) {
    usuarios.findAll({
      where: {
        nome: req.body.nome,
        senha: req.body.senha
      },
      limit: 1
    }).then(function(resp_login){
        if(resp_login == ''){
            res.send('<script>alert("Login Invalido");window.history.back();</script>')
        }
        else{
            // res.send('Login Valido')
            req.session.id_usuario = resp_login[0]['dataValues']['id']
            req.session.nome = resp_login[0]['dataValues']['nome']
            req.session.dinheiro = resp_login[0]['dataValues']['dinheiro']
            req.session.pergunta_individual_momento = 0
            req.session.lista_perguntas_individual = []
            usuario_resposta[req.session.id_usuario] = 0
            usuarios_nomes.push(req.session.nome)
            usuarios_ids.push(req.session.id_usuario)
            // console.log(req.session)
            console.log(usuario_resposta)
            console.log(usuarios_nomes)
            // console.log(session.Session)
            res.render('menu');
        }
    })
})

// TELA DE CADASTRO
// Criando a Rota para renderizar cadastro.handlebars
app.get('/cadastrar', function (req, res) {
    res.render('cadastrar')
})
// Action Cadastro
// Aqui cadastramos o Usuario no Banco
app.post('/add-cadastro', function (req, res) {
    usuarios.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        dinheiro: 100
    })
    res.redirect('/login');
})

// var lista_perguntas_individual = []
// var pergunta_individual_momento = 0

// MENU
app.get('/menu', function (req, res) {
    // zeramos a pergunta do momento quando voltamos pro menu
    req.session.pergunta_individual_momento = 0
    res.render('menu')
})

// Inicio Show
app.get('/inicio_show', function (req, res) {
    // zeramos a pergunta do momento quando voltamos pro menu
    req.session.pergunta_individual_momento = 0
    perguntas.findAll({
        // attributes: [[sequelize.fn('COUNT', sequelize.col('dificuldade')), 'dificuldade']],
        where:{
            dificuldade: 1
        },
        order: db.sequelize.random(),
        limit : 3
    }).then(function(dificuldade){
        console.log(dificuldade)
        req.session.lista_perguntas_individual[0] = dificuldade[0]['dataValues']['id']
        req.session.lista_perguntas_individual[1] = dificuldade[1]['dataValues']['id']
        req.session.lista_perguntas_individual[2] = dificuldade[2]['dataValues']['id']
    })
    perguntas.findAll({
    // attributes: [[sequelize.fn('COUNT', sequelize.col('dificuldade')), 'dificuldade']],
        where:{
            dificuldade: 2
        },
        order: db.sequelize.random(),
        limit : 3
    }).then(function(dificuldade){
        console.log(dificuldade)
        req.session.lista_perguntas_individual[3] = dificuldade[0]['dataValues']['id']
        req.session.lista_perguntas_individual[4] = dificuldade[1]['dataValues']['id']
        req.session.lista_perguntas_individual[5] = dificuldade[2]['dataValues']['id']
    })
    perguntas.findAll({
    // attributes: [[sequelize.fn('COUNT', sequelize.col('dificuldade')), 'dificuldade']],
        where:{
            dificuldade: 3
        },
        order: db.sequelize.random(),
        limit : 4
    }).then(function(dificuldade){
        console.log(dificuldade)
        req.session.lista_perguntas_individual[6] = dificuldade[0]['dataValues']['id']
        req.session.lista_perguntas_individual[7] = dificuldade[1]['dataValues']['id']
        req.session.lista_perguntas_individual[8] = dificuldade[2]['dataValues']['id']
        req.session.lista_perguntas_individual[9] = dificuldade[3]['dataValues']['id']
    })    
  res.render('inicio_show')
})

// Proxima Show
app.get('/prox_show', function (req, res) {
    // Verificamos para a proxima pergunta
    req.session.pergunta_individual_momento = req.session.pergunta_individual_momento + 1
    if (req.session.pergunta_individual_momento == 10){
        res.send('Parabens! Voce ganhou!')
    }
    else{
        res.render('prox_show')
    }
})
// TELA SHOW DO VITAO
app.get('/show', function (req, res) {
    console.log(req.session.lista_perguntas_individual)
    perguntas.findAll({
        where: {
            id: req.session.lista_perguntas_individual[req.session.pergunta_individual_momento]
        } 
    }).then(function(pergunta_resposta){
        // resp_correta = pergunta_resposta['perguntas']['dataValues']['pergunta']
        // console.log(pergunta_resposta)
        pergunta = pergunta_resposta[0]['dataValues']['pergunta']
        aleatorio_1 = Math.floor(Math.random() * 5)
        if (aleatorio_1 == 1){
            resp_1 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_1_bol = true
            resp_2_bol = false
            resp_3_bol = false
            resp_4_bol = false
        }
        else if(aleatorio_1 == 2){
            resp_1 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_1_bol = false
            resp_2_bol = true
            resp_3_bol = false
            resp_4_bol = false
        }
        else if(aleatorio_1 == 3){
            resp_1 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_1_bol = false
            resp_2_bol = false
            resp_3_bol = true
            resp_4_bol = false
        }
        else{
            resp_1 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_1_bol = false
            resp_2_bol = false
            resp_3_bol = false
            resp_4_bol = true
        }
        dificuldade = pergunta_resposta[0]['dataValues']['dificuldade']
        numero_pergunta = req.session.pergunta_individual_momento + 1
        // Aqui definimos a numeracao de pergunta:
        // req.session.lista_perguntas_individual[0] = resp_1
        // console.log(req.session.lista_perguntas_individual)
        // pergunta_resposta = lista
        // lista[0] = a
        // a['resp_correta'] = resp_correta
        // pergunta_resposta['dataValues']['id'] = '11'
        // console.log(pergunta_resposta[0]['dataValues']['pergunta'])
        // console.log(pergunta_resposta)
        // res.render('show', {pergunta_resposta: pergunta_resposta})
        // Funciona:
        // res.render('teste', {pergunta: ["pergunta", "qweqweqweqwe"]})
        // res.render('teste', {pergunta: {ola:123, qwe:123}})
        res.render('show', {dados: {
                                pergunta: pergunta,
                                resp_1: resp_1,
                                resp_2: resp_2,
                                resp_3: resp_3,
                                resp_4: resp_4,
                                resp_1_bol: resp_1_bol,
                                resp_2_bol: resp_2_bol,
                                resp_3_bol: resp_3_bol,
                                resp_4_bol: resp_4_bol,
                                dificuldade: dificuldade,
                                numero_pergunta: numero_pergunta
                            }})
    })
})

// Action Show
app.post('/prox-pergunta', function (req, res) {
    usuarios.findAll({
      where: {
        id: 1
      }
    }).then(function(pergunta_resposta){
        res.render('teste', {pergunta_resposta: pergunta_resposta})
    })
    // SELECT * FROM usuarios WHERE id = 2
    // res.redirect('/show');
})

app.get('/sala_de_espera', function (req, res) {
    // console.log(req.body.id_usuario)
    res.render('sala_de_espera')
})

// Inicio Show Multijogador
var lista_perguntas_multi = []
var pergunta_multi_momento = 0

app.get('/inicio_show_multi', function (req, res) {
    // zeramos a pergunta do momento quando voltamos pro menu
    pergunta_multi_momento = 0
    perguntas.findAll({
        // attributes: [[sequelize.fn('COUNT', sequelize.col('dificuldade')), 'dificuldade']],
        where:{
            dificuldade: 1
        },
        order: db.sequelize.random(),
        limit : 3
    }).then(function(dificuldade){
        console.log(dificuldade)
        lista_perguntas_multi[0] = dificuldade[0]['dataValues']['id']
        lista_perguntas_multi[1] = dificuldade[1]['dataValues']['id']
        lista_perguntas_multi[2] = dificuldade[2]['dataValues']['id']
    })
    perguntas.findAll({
    // attributes: [[sequelize.fn('COUNT', sequelize.col('dificuldade')), 'dificuldade']],
        where:{
            dificuldade: 2
        },
        order: db.sequelize.random(),
        limit : 3
    }).then(function(dificuldade){
        console.log(dificuldade)
        lista_perguntas_multi[3] = dificuldade[0]['dataValues']['id']
        lista_perguntas_multi[4] = dificuldade[1]['dataValues']['id']
        lista_perguntas_multi[5] = dificuldade[2]['dataValues']['id']
    })
    perguntas.findAll({
    // attributes: [[sequelize.fn('COUNT', sequelize.col('dificuldade')), 'dificuldade']],
        where:{
            dificuldade: 3
        },
        order: db.sequelize.random(),
        limit : 4
    }).then(function(dificuldade){
        console.log(dificuldade)
        lista_perguntas_multi[6] = dificuldade[0]['dataValues']['id']
        lista_perguntas_multi[7] = dificuldade[1]['dataValues']['id']
        lista_perguntas_multi[8] = dificuldade[2]['dataValues']['id']
        lista_perguntas_multi[9] = dificuldade[3]['dataValues']['id']
    })    
  res.render('inicio_show_multi')
})

// TELA SHOW DO VITAO MULTIJOGADOR
app.get('/show_multi', function (req, res) {
    perguntas.findAll({
        where: {
            id: lista_perguntas_multi[pergunta_multi_momento]
        } 
    }).then(function(pergunta_resposta){
        // resp_correta = pergunta_resposta['perguntas']['dataValues']['pergunta']
        // console.log(pergunta_resposta)
        pergunta = pergunta_resposta[0]['dataValues']['pergunta']
        aleatorio_1 = Math.floor(Math.random() * 5)
        if (aleatorio_1 == 1){
            resp_1 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_1_bol = true
            resp_2_bol = false
            resp_3_bol = false
            resp_4_bol = false
        }
        else if(aleatorio_1 == 2){
            resp_1 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_1_bol = false
            resp_2_bol = true
            resp_3_bol = false
            resp_4_bol = false
        }
        else if(aleatorio_1 == 3){
            resp_1 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_1_bol = false
            resp_2_bol = false
            resp_3_bol = true
            resp_4_bol = false
        }
        else{
            resp_1 = pergunta_resposta[0]['dataValues']['resp_incorreta_1']
            resp_2 = pergunta_resposta[0]['dataValues']['resp_incorreta_2']
            resp_3 = pergunta_resposta[0]['dataValues']['resp_incorreta_3']
            resp_4 = pergunta_resposta[0]['dataValues']['resp_correta']
            resp_1_bol = false
            resp_2_bol = false
            resp_3_bol = false
            resp_4_bol = true
        }
        dificuldade = pergunta_resposta[0]['dataValues']['dificuldade']
        numero_pergunta = req.session.pergunta_individual_momento + 1
        usuario_nome_1 = usuarios_nomes[0]
        usuario_nome_2 = usuarios_nomes[1]
        id_usuario_1 = usuarios_ids[0]
        id_usuario_2 = usuarios_ids[1]
        meu_id = req.session.id_usuario
        console.log(usuario_nome_2, id_usuario_2)
        // Aqui definimos a numeracao de pergunta:
        // req.session.lista_perguntas_individual[0] = resp_1
        // console.log(req.session.lista_perguntas_individual)
        // pergunta_resposta = lista
        // lista[0] = a
        // a['resp_correta'] = resp_correta
        // pergunta_resposta['dataValues']['id'] = '11'
        // console.log(pergunta_resposta[0]['dataValues']['pergunta'])
        // console.log(pergunta_resposta)
        // res.render('show', {pergunta_resposta: pergunta_resposta})
        // Funciona:
        // res.render('teste', {pergunta: ["pergunta", "qweqweqweqwe"]})
        // res.render('teste', {pergunta: {ola:123, qwe:123}})
        res.render('show_multi', {dados: {
                                pergunta: pergunta,
                                resp_1: resp_1,
                                resp_2: resp_2,
                                resp_3: resp_3,
                                resp_4: resp_4,
                                resp_1_bol: resp_1_bol,
                                resp_2_bol: resp_2_bol,
                                resp_3_bol: resp_3_bol,
                                resp_4_bol: resp_4_bol,
                                dificuldade: dificuldade,
                                numero_pergunta: numero_pergunta,
                                id_usuario_1: id_usuario_1,
                                id_usuario_2: id_usuario_2,
                                meu_id: meu_id,
                                usuario_nome_1: usuario_nome_1,
                                usuario_nome_2: usuario_nome_2
                            }})
    })
})

// funcionara no caminho localhost:8080/
// app.get("/show.html", function(req, res){
//     res.sendFile(__dirname + "/src/show.html")
// })
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
    res.render("login")
})
// Usando o CSS
app.use('/css/show.css', express.static(__dirname + "/css/show.css"));
app.use('/css/show_multi.css', express.static(__dirname + "/css/show_multi.css"));

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
var porta = process.env.PORT || 8080;
server.listen(porta);


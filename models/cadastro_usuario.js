const db = require('./db')

// Define a Database do Banco
// const show_do_milhao = db.squelize.define('show_do_milhao')

// Criando uma Tabela:
const usuarios = db.sequelize.define('usuarios', {
  // attributes
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  dinheiro: {
    type: db.Sequelize.INTEGER
  }
});

module.exports = usuarios
// usuarios.sync({force:true});

// Inserir dados
usuarios.create({
    nome: 'henrique',
    email: 'henrique@henrique.com',
    senha: '123123123',
    dinheiro: 500
})
usuarios.create({
    nome: 'giovanna',
    email: 'giovanna@giovanna.com',
    senha: '123123123',
    dinheiro: 500
})
usuarios.create({
    nome: 'amanda',
    email: 'amanda@amanda.com',
    senha: '123123123',
    dinheiro: 500
})

usuarios.create({
    nome: 'sergio',
    email: 'sergio@sergio.com',
    senha: '123123123',
    dinheiro: 500
})

usuarios.create({
    nome: 'rosangela',
    email: 'rosangela@rosangela.com',
    senha: '123123123',
    dinheiro: 500
})

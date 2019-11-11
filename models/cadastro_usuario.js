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
usuarios.sync({force:true});

// Inserir dados
// usuarios.create({
//     nome: 'Henrique',
//     email: 'henrique@henrique.com',
//     senha: '123123123',
//     dinheiro: 100
// })

// usuarios.create({
//     nome: 'Amanda',
//     email: 'amanda@amanda.com',
//     senha: '123123123',
//     dinheiro: 100
// })

// usuarios.create({
//     nome: 'Sergio',
//     email: 'sergio@sergio.com',
//     senha: '123123123',
//     dinheiro: 100
// })

// usuarios.create({
//     nome: 'Rosangela',
//     email: 'rosangela@rosangela.com',
//     senha: '123123123',
//     dinheiro: 100
// })

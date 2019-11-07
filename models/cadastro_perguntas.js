const db = require('./db')

// Define a Database do Banco
// const show_do_milhao = db.squelize.define('show_do_milhao')

// Criando uma Tabela:
const perguntas = db.sequelize.define('perguntas', {
  // attributes
  pergunta: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  resp_correta: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  resp_incorreta_1: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  resp_incorreta_2: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  resp_incorreta_3: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  dificuldade: {
    type: db.Sequelize.INTEGER
  }
});

// Para criar a tabela
// perguntas.sync({force:true});
module.exports = perguntas

// Inserir dados
// perguntas.create({
//     pergunta: 'QUAL É A CAPITAL DOS ESTADOS UNIDOS?',
//     resp_correta: 'NOVA YORK',
//     resp_incorreta_1: 'MIAMI',
//     resp_incorreta_2: 'CHICAGO',
//     resp_incorreta_3: 'WASHINGTON',
//     dificuldade: 1
// })
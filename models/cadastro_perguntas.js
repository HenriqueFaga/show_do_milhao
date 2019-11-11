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
perguntas.create({
    pergunta: 'QUAL É A CAPITAL DOS ESTADOS UNIDOS?',
    resp_correta: 'NOVA YORK',
    resp_incorreta_1: 'MIAMI',
    resp_incorreta_2: 'CHICAGO',
    resp_incorreta_3: 'WASHINGTON',
    dificuldade: 1
})
perguntas.create({
    pergunta: 'Qual é o nome dado ao estado da água em forma de gelo?',
    resp_correta: 'LÍQUIDO',
    resp_incorreta_1: 'SÓLIDO',
    resp_incorreta_2: 'GASOSO',
    resp_incorreta_3: 'VAPOROSO',
    dificuldade: 1
})
perguntas.create({
    pergunta: 'Quem é a namorada do Mickey?',
    resp_correta: 'MINNIE',
    resp_incorreta_1: 'MARGARIDA',
    resp_incorreta_2: 'A PEQUENA SEREIA',
    resp_incorreta_3: 'OLÍVIA PALITO',
    dificuldade: 1
})
perguntas.create({
    pergunta: 'Quem proclamou a república no Brasil em 1889?',
    resp_correta: 'MARECHAL DEODORO',
    resp_incorreta_1: 'MARECHAL RONDON',
    resp_incorreta_2: 'DOM PEDRO II',
    resp_incorreta_3: 'DUQUE DE CAXIAS',
    dificuldade: 1
})
perguntas.create({
    pergunta: 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?',
    resp_correta: 'CAPRICÓRNIO',
    resp_incorreta_1: 'AQUÁRIO',
    resp_incorreta_2: 'VIRGEM',
    resp_incorreta_3: 'ÁRIES',
    dificuldade: 1
})

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
// perguntas.create({
//     pergunta: 'Qual é o nome dado ao estado da água em forma de gelo?',
//     resp_correta: 'LÍQUIDO',
//     resp_incorreta_1: 'SÓLIDO',
//     resp_incorreta_2: 'GASOSO',
//     resp_incorreta_3: 'VAPOROSO',
//     dificuldade: 1
// })
// perguntas.create({
//     pergunta: 'Quem é a namorada do Mickey?',
//     resp_correta: 'MINNIE',
//     resp_incorreta_1: 'MARGARIDA',
//     resp_incorreta_2: 'A PEQUENA SEREIA',
//     resp_incorreta_3: 'OLÍVIA PALITO',
//     dificuldade: 1
// })
// perguntas.create({
//     pergunta: 'Quem proclamou a república no Brasil em 1889?',
//     resp_correta: 'MARECHAL DEODORO',
//     resp_incorreta_1: 'MARECHAL RONDON',
//     resp_incorreta_2: 'DOM PEDRO II',
//     resp_incorreta_3: 'DUQUE DE CAXIAS',
//     dificuldade: 1
// })
// perguntas.create({
//     pergunta: 'Qual é o signo do zodíaco de quem nasce no dia do ano-novo?',
//     resp_correta: 'CAPRICÓRNIO',
//     resp_incorreta_1: 'AQUÁRIO',
//     resp_incorreta_2: 'VIRGEM',
//     resp_incorreta_3: 'ÁRIES',
//     dificuldade: 1
// })
perguntas.create({
    pergunta: 'Quantos jogadores um jogo de vôlei reúne na quadra?',
    resp_correta: 'DOZE',
    resp_incorreta_1: 'DEZ',
    resp_incorreta_2: 'OITO',
    resp_incorreta_3: 'SEIS',
    dificuldade: 2
})
perguntas.create({
    pergunta: 'Que imperador pôs fogo em Roma?',
    resp_correta: 'NERO',
    resp_incorreta_1: 'TRAJANO',
    resp_incorreta_2: 'BRUTUS',
    resp_incorreta_3: 'CALÍGULA',
    dificuldade: 2
})
perguntas.create({
    pergunta: 'Como é chamado quem nasce em Milão, na Itália?',
    resp_correta: 'MILANÊS',
    resp_incorreta_1: 'MILISTA',
    resp_incorreta_2: 'MILANOSO',
    resp_incorreta_3: 'MILANENSE',
    dificuldade: 2
})
perguntas.create({
    pergunta: 'Que profissional usa uma ferramenta chamada formão?',
    resp_correta: 'CARPINTEIRO',
    resp_incorreta_1: 'RELOJOEIRO',
    resp_incorreta_2: 'CONFEITEIRO',
    resp_incorreta_3: 'BOMBEIRO',
    dificuldade: 2
})

perguntas.create({
    pergunta: 'Em qual espécie o macho choca os ovos e a fêmea procura alimento?',
    resp_correta: 'PINGÜIM',
    resp_incorreta_1: 'ANDORINHA',
    resp_incorreta_2: 'PATO SELVAGEM',
    resp_incorreta_3: 'MARRECO',
    dificuldade: 3
})
perguntas.create({
    pergunta: 'Em qual país está localizado o Muro das lamentações?',
    resp_correta: 'ISRAEL',
    resp_incorreta_1: 'ALEMANHA',
    resp_incorreta_2: 'BRASIL',
    resp_incorreta_3: 'VENEZUELA',
    dificuldade: 3
})
perguntas.create({
    pergunta: 'Qual desses países não fica na Ásia?',
    resp_correta: 'EGITO',
    resp_incorreta_1: 'PAQUISTÃO',
    resp_incorreta_2: 'JAPÃO',
    resp_incorreta_3: 'TAILÂNDIA',
    dificuldade: 3
})
perguntas.create({
    pergunta: 'Qual desses astros de filmes de ação é belga?',
    resp_correta: 'JEAN CLAUDE VAN DAMME',
    resp_incorreta_1: 'ARNOLD SCHWARZENEGGER',
    resp_incorreta_2: 'SYLVESTER STALLONE',
    resp_incorreta_3: 'STEVEN SEAGAL',
    dificuldade: 3
})

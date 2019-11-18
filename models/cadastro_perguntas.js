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
//     resp_correta: 'WASHINGTON',
//     resp_incorreta_1: 'MIAMI',
//     resp_incorreta_2: 'CHICAGO',
//     resp_incorreta_3: 'NOVA YORK',
//     dificuldade: 1
// })
// perguntas.create({
//     pergunta: 'Qual é o nome dado ao estado da água em forma de gelo?',
//     resp_correta: 'SÓLIDO',
//     resp_incorreta_1: 'LÍQUIDO',
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
// perguntas.create({
//     pergunta: 'Em que estado brasileiro nasceu a apresentadora Xuxa?',
//     resp_correta: 'RIO GRANDE DO SUL',
//     resp_incorreta_1: 'SÃO PAULO',
//     resp_incorreta_2: 'SANTA CATARINA',
//     resp_incorreta_3: 'GOIÁS',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'QUAL É A CAPITAL DO BRASIL?',
//     resp_correta: 'BRASILIA',
//     resp_incorreta_1: 'RIO DE JANEIRO',
//     resp_incorreta_2: 'SOROCABA',
//     resp_incorreta_3: 'SALVADOR',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'QUANTAS COPAS DO MUNDO O BRASIL TEM?',
//     resp_correta: '5',
//     resp_incorreta_1: '1',
//     resp_incorreta_2: '3',
//     resp_incorreta_3: '4',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'ONDE SURGIU O FUTEBOL?',
//     resp_correta: 'INGLATERRA',
//     resp_incorreta_1: 'BRASIL',
//     resp_incorreta_2: 'ESTADOS UNIDOS',
//     resp_incorreta_3: 'FRANÇA',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta:'QUAL A CIDADE DE NASCIMENTO DO PILOTO DE F1 AYRTON SENNA?',
//     resp_correta: 'SÃO PAULO',
//     resp_incorreta_1: 'RIO GRANDE DO SUL',
//     resp_incorreta_2: 'PARANÁ',
//     resp_incorreta_3: 'BAHIA',
//     dificuldade: 1
// })

// perguntas.create({
//    pergunta: 'Qual é o personagem do folclore brasileiro que tem uma perna só?',
//     resp_correta: 'SACI-PERERÊ',
//     resp_incorreta_1: 'NEGRINHO DO PASTOREIO',
//     resp_incorreta_2: 'BOITATÁ',
//     resp_incorreta_3: 'CUCA',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'O que era Frankenstein, de Mary Shelley?',
//     resp_correta: 'MONSTRO',
//     resp_incorreta_1: 'GORILA',
//     resp_incorreta_2: 'PRÍNCIPE',
//     resp_incorreta_3: 'SAPO',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'A água ferve a quantos graus centígrados?',
//     resp_correta: '100',
//     resp_incorreta_1: '200',
//     resp_incorreta_2: '300',
//     resp_incorreta_3: '150',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'Quem foi o grande amor de Julieta?',
//     resp_correta: 'ROMEU',
//     resp_incorreta_1: 'ORFEU',
//     resp_incorreta_2: 'HAMLET',
//     resp_incorreta_3: 'VITÃO',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'Quando é comemorado o dia da independência do Brasil?',
//     resp_correta: '7 DE SETEMBRO',
//     resp_incorreta_1: '12 DE OUTUBRO',
//     resp_incorreta_2: '8 DE SETEMBRO',
//     resp_incorreta_3: '25 DE DEZEMBRO',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'Quem fundou a Microsoft?',
//     resp_correta: 'BILL GATES',
//     resp_incorreta_1: 'DAGOBERTO',
//     resp_incorreta_2: 'AKIO MORITA',
//     resp_incorreta_3: 'IRINEU',
//     dificuldade: 1
// })

// perguntas.create({
//    pergunta: 'Qual é o nome dado ao pneu reserva do carro?',
//     resp_correta: 'ESTEPE',
//     resp_incorreta_1: 'CALOTA',
//     resp_incorreta_2: 'MACACO',
//     resp_incorreta_3: 'PNEU RESERVA',
//     dificuldade: 1
// })

// perguntas.create({
//     pergunta: 'Qual cantor ficou conhecido como “o rei do rock”?',
//     resp_correta: 'ELVIS PRESLEY',
//     resp_incorreta_1: 'FRANK SINATRA',
//     resp_incorreta_2: 'PAULA SOUZA',
//     resp_incorreta_3: 'CHIMBINHA',
//     dificuldade: 1
// })
// perguntas.create({
//     pergunta: 'Que imperador pôs fogo em Roma?',
//     resp_correta: 'NERO',
//     resp_incorreta_1: 'TRAJANO',
//     resp_incorreta_2: 'BRUTUS',
//     resp_incorreta_3: 'CALÍGULA',
//     dificuldade: 2
// })
// perguntas.create({
//     pergunta: 'Como é chamado quem nasce em Milão, na Itália?',
//     resp_correta: 'MILANÊS',
//     resp_incorreta_1: 'MILISTA',
//     resp_incorreta_2: 'MILANOSO',
//     resp_incorreta_3: 'MILANENSE',
//     dificuldade: 2
// })
// perguntas.create({
//     pergunta: 'Que profissional usa uma ferramenta chamada formão?',
//     resp_correta: 'CARPINTEIRO',
//     resp_incorreta_1: 'RELOJOEIRO',
//     resp_incorreta_2: 'CONFEITEIRO',
//     resp_incorreta_3: 'BOMBEIRO',
//     dificuldade: 2
// })
// perguntas.create({
//     pergunta: 'Quantos jogadores um jogo de vôlei reúne na quadra?',
//     resp_correta: '6',
//     resp_incorreta_1: '11',
//     resp_incorreta_2: '5',
//     resp_incorreta_3: '4',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Sashimi é um prato originário de qual país?',
//     resp_correta: 'JAPÃO',
//     resp_incorreta_1: 'CHINA',
//     resp_incorreta_2: 'ÍNDIA',
//     resp_incorreta_3: 'INDONÉSIA',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Peroba é uma espécie de?',
//     resp_correta: 'ÁRVORE',
//     resp_incorreta_1: 'POLÍTICO',
//     resp_incorreta_2: 'INSETO',
//     resp_incorreta_3: 'VERME',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'O alpinismo é praticado em que lugar?',
//     resp_correta: 'MONTANHA',
//     resp_incorreta_1: 'MAR',
//     resp_incorreta_2: 'RIO',
//     resp_incorreta_3: 'PRAIA',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta:'O Coliseu é um monumento histórico de que cidade européia?',
//     resp_correta: 'ROMA',
//     resp_incorreta_1: 'PARIS',
//     resp_incorreta_2: 'COPENHAGUE',
//     resp_incorreta_3: 'LONDRES',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Como é chamado o objeto falsificado vendido como original?',
//     resp_correta: 'PIRATA',
//     resp_incorreta_1: 'PERNETA',
//     resp_incorreta_2: 'PERNETA',
//     resp_incorreta_3: 'PIRARUCU',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Qual é a sigla da Organização das Nações Unidas?',
//     resp_correta: 'ONU',
//     resp_incorreta_1: 'FMI',
//     resp_incorreta_2: 'FATEC',
//     resp_incorreta_3: 'GTI',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'No filme, quem era parceiro de crimes da Bonnie?',
//     resp_correta: 'CLYDE',
//     resp_incorreta_1: 'PERICLES',
//     resp_incorreta_2: 'JAMES',
//     resp_incorreta_3: 'BILL',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Quem é o parceiro de aventuras de Dom Quixote?',
//     resp_correta: 'SANCHO PANÇA',
//     resp_incorreta_1: 'GUILHERME TELL',
//     resp_incorreta_2: 'SIGMUND FREUD',
//     resp_incorreta_3: 'LANCELOT',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Que planta era usada para fabricação de papel no antigo Egito?',
//     resp_correta: 'PAPIRO',
//     resp_incorreta_1: 'EUCALIPTO',
//     resp_incorreta_2: 'OLIVEIRA',
//     resp_incorreta_3: 'PAU-BRASIL',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Que país europeu tem como atração a tourada?',
//     resp_correta: 'ESPANHA',
//     resp_incorreta_1: 'ITÁLIA',
//     resp_incorreta_2: 'FRANÇA',
//     resp_incorreta_3: 'TURQUIA',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Quem pintou o quadro “La Gioconda”, conhecido como “Mona Lisa”?',
//     resp_correta: 'LEONARDO DA VINCI',
//     resp_incorreta_1: 'TICIANO',
//     resp_incorreta_2: 'RAFAEL',
//     resp_incorreta_3: 'MICHELÂNGELO',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Quando começou e terminou a Primeira Guerra Mundial?',
//     resp_correta: '1914-1919',
//     resp_incorreta_1: '1939-1945',
//     resp_incorreta_2: '1921-1932',
//     resp_incorreta_3: '1912-1915',
//     dificuldade: 2
// })

// perguntas.create({
//     pergunta: 'Qual é a letra do alfabeto que simboliza o número dez em algarismo romano?',
//     resp_correta: 'X',
//     resp_incorreta_1: 'F',
//     resp_incorreta_2: 'D',
//     resp_incorreta_3: 'V',
//     dificuldade: 2
// })
// perguntas.create({
//     pergunta: 'Em qual espécie o macho choca os ovos e a fêmea procura alimento?',
//     resp_correta: 'PINGÜIM',
//     resp_incorreta_1: 'ANDORINHA',
//     resp_incorreta_2: 'PATO SELVAGEM',
//     resp_incorreta_3: 'MARRECO',
//     dificuldade: 3
// })
// perguntas.create({
//     pergunta: 'Em qual país está localizado o Muro das lamentações?',
//     resp_correta: 'ISRAEL',
//     resp_incorreta_1: 'ALEMANHA',
//     resp_incorreta_2: 'BRASIL',
//     resp_incorreta_3: 'VENEZUELA',
//     dificuldade: 3
// })
// perguntas.create({
//     pergunta: 'Qual desses países não fica na Ásia?',
//     resp_correta: 'EGITO',
//     resp_incorreta_1: 'PAQUISTÃO',
//     resp_incorreta_2: 'JAPÃO',
//     resp_incorreta_3: 'TAILÂNDIA',
//     dificuldade: 3
// })
// perguntas.create({
//     pergunta: 'Qual desses astros de filmes de ação é belga?',
//     resp_correta: 'JEAN CLAUDE VAN DAMME',
//     resp_incorreta_1: 'ARNOLD SCHWARZENEGGER',
//     resp_incorreta_2: 'SYLVESTER STALLONE',
//     resp_incorreta_3: 'STEVEN SEAGAL',
//     dificuldade: 3
// })

// perguntas.create({
//   pergunta: 'Qual é a primeira letra do alfabeto grego?',
//     resp_correta: 'ALFA',
//     resp_incorreta_1: 'BETA',
//     resp_incorreta_2: 'DELTA',
//     resp_incorreta_3: 'GAMA',
//     dificuldade: 3
// })

// perguntas.create({
//    pergunta: 'Qual desses quatro pesos é o mais leve?',
//     resp_correta: '10 GRAMAS',
//     resp_incorreta_1: '10 ONÇAS',
//     resp_incorreta_2: '10 QUILOS',
//     resp_incorreta_3: '10 LIBRAS',
//     dificuldade: 3
// })

// perguntas.create({
//    pergunta: 'Brahma é o deus de que religião?',
//     resp_correta: 'HINDUÍSMO',
//     resp_incorreta_1: 'XINTOÍSMO',
//     resp_incorreta_2: 'BUDISMO',
//     resp_incorreta_3: 'ISLAMISMO',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta:'Que conflito ideológico envolveu os EUA e a União Soviética?',
//     resp_correta: 'GUERRA FRIA',
//     resp_incorreta_1: 'GUERRA DO VIETNÃ',
//     resp_incorreta_2: 'GUERRA NAS ESTRELAS',
//     resp_incorreta_3: 'GUERRA DA CORÉIA',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'A Bélgica é:',
//     resp_correta: 'UMA MONARQUIA CONSTITUCIONAL',
//     resp_incorreta_1: 'UMA REPÚBLICA',
//     resp_incorreta_2: 'UM EMIRADO',
//     resp_incorreta_3: 'UM PRINCIPADO',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'Que figura mitológica é conhecida por sua força extraordinária?',
//     resp_correta: 'HÉRCULES',
//     resp_incorreta_1: 'MINOTAURO',
//     resp_incorreta_2: 'PERSEU',
//     resp_incorreta_3: 'ÁTILA',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'Em que ano Ayrton Senna venceu o primeiro campeonato de Fórmula 1?',
//     resp_correta: '1988',
//     resp_incorreta_1: '1990',
//     resp_incorreta_2: '1985',
//     resp_incorreta_3: '1987',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'Qual o nome verdadeiro do jogador de futebol conhecido com Zico?',
//     resp_correta: 'ARTHUR ANTUNES COIMBRA',
//     resp_incorreta_1: 'ARTHUR ALVES PINTO',
//     resp_incorreta_2: 'ARTHUR DA TÁVOLA',
//     resp_incorreta_3: 'ARTHUR DOS SANTOS',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'Que trópico atravessa o Saara?',
//     resp_correta: 'CÂNCER',
//     resp_incorreta_1: 'VIRGEM',
//     resp_incorreta_2: 'CAPRICÓRNIO',
//     resp_incorreta_3: 'LEÃO',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'Em que ano foi inaugurada a estátua do Cristo Redentor no Rio de Janeiro?',
//     resp_correta: '1931',
//     resp_incorreta_1: '1921',
//     resp_incorreta_2: '1941',
//     resp_incorreta_3: '1951',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'Qual é o exame que emite ondas sonoras para visualizar os órgãos?',
//     resp_correta: 'ULTRA-SONOGRAFIA',
//     resp_incorreta_1: 'XEROGRAFIA',
//     resp_incorreta_2: 'FOTOGRAFIA',
//     resp_incorreta_3: 'RADIOGRAFIA',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'Qual é o quarto planeta do sistema solar?',
//     resp_correta: 'MARTE',
//     resp_incorreta_1: 'VÊNUS',
//     resp_incorreta_2: 'TERRA',
//     resp_incorreta_3: 'JÚPITER',
//     dificuldade: 3
// })

// perguntas.create({
//     pergunta: 'O que procurava Juan Ponce de Leon quando descobriu a Flórida?',
//     resp_correta: 'A FONTE DA JUVENTUDE',
//     resp_incorreta_1: 'A CIDADE PERDIDA DE OURO',
//     resp_incorreta_2: 'UNICÓRNIOS',
//     resp_incorreta_3: 'A FATEC DE PIRAPORINHA',
//     dificuldade: 3
// })

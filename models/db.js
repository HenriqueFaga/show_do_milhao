// instanciando o Sequelize (interacao com o Postgresql)
const Sequelize = require('sequelize')

// crio o objeto Squelize
const sequelize = new Sequelize('d14khc46rmqurq', 'uiylmptkvlyqmb', 'f173c8ae8dfe5ffea1abc1b1a97ce2fa3b8fac501343b6249871b9f706a5feb4', {
    host: 'ec2-174-129-253-144.compute-1.amazonaws.com',
    dialect: 'postgres'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

// // Se a conecxao foi bem sucedida (then), se nao (catch)
// sequelize.authenticate().then(function(){
//     console.log('Conectado no Banco com Sucesso!')
// }).catch(function(err){
//     console.log('Erro ao conectar com o Banco: ', err)
// })

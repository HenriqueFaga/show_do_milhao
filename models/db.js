// instanciando o Sequelize (interacao com o MYSQL)
const Sequelize = require('sequelize')

// crio o objeto Squelize
const sequelize = new Sequelize('show_do_milhao', 'henrique', '123456', {
    host: 'localhost',
    dialect: 'mysql'
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

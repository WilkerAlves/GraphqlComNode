const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('users').insert({
//     name : 'Teste',
//     email : 'teste@teste.com.br',
//     password : '123'
// }).then(data => console.log(data))

// knex('users').insert({
//     name : 'TesteOutro',
//     email : 'testeoutro@teste.com.br',
//     password : '123'
// }).then(data => console.log(data))



// knex('users').select('*').then(resultado => console.log(resultado))
// knex('users').then(resultado => console.log(resultado))
// knex('users').first().then(resultado => console.log(resultado))
// knex('users').where({id:1}).first().then(resultado => console.log(resultado))
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const schema = require('./api/schema')

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000,() => console.log('Executando...'))


// const app = express()
// app.use('/api',graphqlHTTP({
//     schema,
//     //forma verbosa
//     //schema : schema
//     graphiql : true
// }))


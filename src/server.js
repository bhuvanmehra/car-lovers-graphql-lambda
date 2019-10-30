const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.json({message: 'Hello Express!!'})
})

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = app;
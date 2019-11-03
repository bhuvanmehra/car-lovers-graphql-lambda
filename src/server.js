const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.json({message: 'Hello Express!!'})
})

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

module.exports = app;
const { Client } = require('pg');
 
const client = new Client({
  host: 'localhost',
  port: 4000,
  database: 'pos_db',
  user: 'banky',
  password: '123456',
})

module.exports = client;
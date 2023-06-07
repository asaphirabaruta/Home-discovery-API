const Pool = require("pg").Pool;

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'Asaph@2020',    
    port: 5432,
    database:'discovery'
});

module.exports = pool;
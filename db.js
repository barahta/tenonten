const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '1234qwer',
    host: "localhost",
    port: 5432,
    database: ""
})


module.exports = pool
const pg = require('pg');

const cs = 'postgres://postgres:root@localhost:5432/node_post';

const client = new pg.Client(cs);

client.connect();

const sql = 'select * from cars where price > $1';
const values = [50000];

client.query(sql,values).then(res =>{
    const data = res.rows;
    data.forEach(row => console.log(row)
    );
}).finally(() =>{
    client.end()
});
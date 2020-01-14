const pg = require('pg');
const cs = 'postgres://postgres:root@localhost:5432/node_post';

const client = new pg.Client(cs);
client.connect();

client.query('select * from cars').then(res =>{
    const fields = res.fields.map(field => field.name);
    console.log(fields);
}).catch(err => {
    console.log(err.stack);
}).finally(() =>{
    client.end()
});
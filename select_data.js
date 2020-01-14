const pg = require('pg');
const R = require('ramda');

const cs = 'postgres://postgres:root@localhost:5432/node_post';

const client = new pg.Client(cs);
client.connect();

client.query('select 1 + 4').then(res => {
    const result = R.head(R.values(R.head(res.rows)));
    console.log(result);
}).finally(() => client.end());
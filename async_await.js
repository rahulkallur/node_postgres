const pg = require('pg');
const R = require('ramda');

const cs = 'postgres://postgres:root@localhost:5432/node_post';

async function fetchnow() {
    const client = new pg.Client(cs);

    try{
        await client.connect();
        let result = await client.query('SELECT now()');
        return R.prop('now',R.head(result.rows));
    } finally{
        client.end()
    }
}

fetchnow().then(now => console.log(now));
const pg = require('pg');

const  R = require('ramda');

const cs = 'postgres://postgres:root@localhost:5432/node_post';

const client = new pg.Client(cs);

client.connect();

client.query('select * from cars').then(res =>{
    const data = res.rows;
    console.log('All Data');
    data.forEach(row =>{
        console.log(`ID:${row.id} Name:${row.name} Price:${row.price}`);
    })
    console.log('Sorted prices');
    const prices = R.pluck('price', R.sortBy(R.prop('price'), data));
    console.log(prices);
}).finally(() => {
    client.end()
});
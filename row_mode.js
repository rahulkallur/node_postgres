const pg = require('pg');
const R = require('ramda');

const cs = 'postgres://postgres:root@localhost:5432/node_post';

const client = new pg.Client(cs);

client.connect();

const query = {
    text: 'SELECT * FROM cars',
    rowMode: 'array'
};

client.query(query).then(res => {

    const data = res.rows;

    console.log('all data');
    data.forEach(row => {
        console.log(`Id: ${row[0]} Name: ${row[1]} Price: ${row[2]}`);
    })

    console.log('Sorted prices:');

    const prices = data.map(x => x[2]);

    const sorted = R.sort(R.comparator(R.lt), prices);
    console.log(sorted);

}).finally(() => {
    client.end()
});
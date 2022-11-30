const { options } = require('../options/mariaDB')
const knex = require('knex')(options);

knex.from('products').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    });
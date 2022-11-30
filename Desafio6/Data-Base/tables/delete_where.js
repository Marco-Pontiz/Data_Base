const { options } = require('../options/mariaDB')
const knex = require('knex')(options);

knex.from('products').where('price', '>', '50000')
    .them(() => console.log('Todos los productos han sido eliminados'))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    });
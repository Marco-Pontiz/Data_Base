const { options } = require('../options/mariaDB')
const knex = require('knex')(options);

knex.from('products').where('price', '9000').update({price: 95000})
    .then(() => console.log('productos actualizados'))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    });
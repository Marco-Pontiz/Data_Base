const { options } = require('../options/mariaDB')
const knex = require('knex')(options);

knex.schema.createTable('cars', table => {
    table.increments('id')
    table.string('name')
    table.integer('price')
})
    .then(() => console.log("Table is created successfully!"))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    });
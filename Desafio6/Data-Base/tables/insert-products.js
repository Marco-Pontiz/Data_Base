const { options } = require('../options/mariaDB')
const knex = require('knex')(options);

const products = [
    {name: 'Xbox Series X', price: 309781},
    {name: 'Nintendo Switch', price: 206000},
    {name: 'Sony PlayStation 5', price: 354250},
    {name: 'Xbox 360 black box', price: 58999},
    {name: 'Nintendo Wii', price: 389000},
    {name: 'Sony PlayStation 2', price: 55900}
]

knex('products').insert(products)
    .then(() => console.log("data insert"))
    .catch((err) => { console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    })
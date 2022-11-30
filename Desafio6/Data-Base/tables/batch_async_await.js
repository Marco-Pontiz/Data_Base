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

(async () => {
    try {
        console.log('--> Borramos todos los productos')
        await knex('products').del()

        console.log('--> Insertamos productos')
        await knex('products').insert(products)

        console.log('--> Leemos los productos')
        let rows = await knex.from('products').select('*')
        for (row of rows) console.log(`${row['id']} ${row['name']} ${row['price']}`);

        console.log('--> Insertamos un producto más')
        await knex('products').insert({name: 'Sony PlayStation 5', price: 354250})

        console.log('--> Leemos los productos actualizados')
        rows = await knex.from('products').select("*")
        for (row of rows) console.log(`${row['id']} ${row['name']} ${row['price']}`);
    }
    catch(err) {
        console.log(err)
    }
    finally {
        knex.destroy();
    }
})()
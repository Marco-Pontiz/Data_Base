import knexLib from 'knex'

class ClientSql{
    constructor(config){
        this.knex = knexLib(config);
    }
    createTable() {
        return this.knex.schema.dropYableIfExists('products')
        .finally(() => {
            return this.knex.schema.createTable('products', table => {
                table.increments('id').primary();
                table.string('name', 50).notNullable();
                table.float('price');
            })
        })
    }
    insertProducts(products) {
        return this.knex('products').insert(products)
    }
    getProducts() {
        return this.knex('products').select('*')
    }

    getProductsById(id) {
        return this.knex('products').select('*').where('id', id);
    }

    updateProducts(id, products) {
        return this.knex('products').where('id', id).update(products)
    }

    deleteProducts(id){
        return this.knex('products').where('id', id).del();
    }
    
    close() {
        return this.knex.destroy();
    }
}

export default ClientSql;
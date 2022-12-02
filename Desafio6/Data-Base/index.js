import ClientSql from './options/sql';
import {options} from './options/mariaDB';

const sql = new ClientSql(options)

sql.createTable() 
    .then(() => {
        console.log('1. Tabla creada');

        const products = [
            {name: 'Sony PlayStation 5 825GB Standard color blanco y negro', price: 359.999},
            {name: 'Microsoft Xbox Series X 1TB Standard color negro', price: 329.999},
            {name: 'Nintendo Switch 32GB Standard color rojo neón, azul neón y negro', price: 167.499},
            {name: 'Placa de video Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3090 ZT-A30900J-10P 24GB', price: 320000},
            {name: 'Consola Apevtech 16 Bit color negro', price: 13998},
            {name: 'Sony PlayStation Classic 16GB color gris', price: 94999}
        ]
        return sql.insertProducts(products)
    })
    .then(() => {
        console.log.getProducts()
    })
    .catch((err) => {
        console.log(err); 
        throw err; 
    })
    .finally(() => {
        sql.close();
    })
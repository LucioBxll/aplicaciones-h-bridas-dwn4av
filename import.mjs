import esPrimo from './index.js';

console.log(esPrimo(2));
console.log(esPrimo(3));
console.log(esPrimo(4));
console.log(esPrimo(17));

require('dotenv').config();

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
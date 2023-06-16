import { createConnection } from 'mysql';
require("dotenv").config();

const db = createConnection({
host: process.env.HOST,
user: process.env.USER,
password: process.env.PW,
database: process.env.DB
})

export default db;
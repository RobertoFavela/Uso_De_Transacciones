import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '18931Mor',
    database: 'TIENDA',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
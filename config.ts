const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demodb',
    password: 'kani@2004',
    port: 5432,
});

pool.connect((err:any) => {
    if (!err) {
        console.log("Database connection succeeded");
    } else {
        console.error("Database connection failed:", err);
    }
});

export default pool;


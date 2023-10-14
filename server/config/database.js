import pg from 'pg'

const config = {
    user: "postgres",
    password: "GpZyKU0ShSf4e7CIOXwa",
    host: "containers-us-west-99.railway.app",
    port: 7448,
    database: "railway",
};

export const pool = new pg.Pool(config);
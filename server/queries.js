// This file will contain the database connection credentials.

const Pool = require('pg').Pool;
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const pool = new Pool({
    connectionString: isProduction
    ? process.env.DATABASE_URL // Heroku will supply us with a string called DATABASE_URL for the connectionString,
    : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM vendors', (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

const getImages = (request, response) => {
    pool.query('SELECT * from images', (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

const getSingleVendor = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM vendors WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const getVendorImages = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT link FROM images WHERE vendor_id = $1', [id], (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

module.exports = {
    getUsers,
    getImages,
    getSingleVendor,
    getVendorImages
}
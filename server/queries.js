// This file will contain the database connection credentials.
// DO NOT PUSH THE CREDENTIALS TO THE PUBLIC GIT REPOSITORY
// MANUALLY ADD CREDENTIALS TO THIS FILE ON LOCAL SETUP

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432
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
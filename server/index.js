require('dotenv').config();

const app = require('express')();
const cors = require('cors')
const PORT = process.env.PORT || 8080;

const db = require('./queries');

const bodyParser = require('body-parser');

/* Database Schema for Vendor JSON Object
    FirstName: String
    LastName: String
    Pronouns: String
    Email: String
    GoodsType: Foreign Key
    Description: String
    Images: URL / String
    PriceRange: String
*/

app.use(bodyParser.json())
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.listen(
    PORT,
    () => console.log(`App Running on ${PORT}`)
)

app.get('/vendor', db.getUsers);
app.get('/images', db.getImages);
app.get('/vendorid/:id', db.getSingleVendor);
app.get('/vendorimages/:id', db.getVendorImages);


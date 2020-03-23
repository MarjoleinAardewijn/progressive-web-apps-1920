const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
    apiUrlEndpoint: process.env.URL_ENDPOINT,
    artistDefaultUrl: process.env.ARTIST_DEFAULT_URL,
    artistDefault: process.env.ARTIST_DEFAULT
};
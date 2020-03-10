// Require third-party modules
const express = require('express');
// const request = require('request');
const fetch = require('node-fetch');

// Create new express app in 'app'
const app = express();

// Config object
const config = {
    port: 3000
};

// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('static'));

const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection',
    apiKey = 'n0Iu86hl',
    artistDefaultUrl = 'Rembrandt+van+Rijn',
    artistDefault = 'Rembrandt van Rijn',
    urlOverview = `${endpoint}?key=${apiKey}&involvedMaker=${artistDefaultUrl}`;

app.get('/', function(req, res) {
   res.render('home', {
       styles: './css/styles.css',
       title: 'Rijksmusuem Schilders'
   })
});

// Create a home route
app.get('/schilderijen', async function(req, res) {
    const response = await fetch(urlOverview);
    const jsonData = await response.json();
    const overviewData = jsonData.artObjects;

    res.render('overview', {
        styles: './css/styles.css',
        title: 'Schilderijen',
        overviewData
    });

});

app.get('/schilderij/:id', async function(req, res) {
    const id = req.params.id;
    const urlDetails = `${endpoint}/${id}?key=${apiKey}`;

    const response = await fetch(urlDetails);
    const jsonData = await response.json();
    const detailsData = jsonData.artObject;

    res.render('details', {
        styles: './../css/styles.css',
        title: detailsData.title, // We use this for the page title, see views/partials/head.ejs
        detailsData
    });
});

app.get('/search', async function(req, res) {
    const artist = req.query.artist;

    if(artist.length !== 0) {
        const urlSearch =  `${endpoint}?key=${apiKey}&involvedMaker=${artist}`;

        const response = await fetch(urlSearch);
        const jsonData = await response.json();
        const searchData = jsonData.artObjects;

        res.render('results', {
            styles: './../css/styles.css',
            title: `Resultaten voor ${artist}`,
            query: artist, // We use this for the page title, see views/partials/head.ejs
            searchData
        });

    } else {
        const response = await fetch(urlOverview);
        const jsonData = await response.json();
        const searchData = jsonData.artObjects;

        res.render('results', {
            styles: './../css/styles.css',
            title: `Resultaten voor ${artist}`,
            query: artistDefault, // We use this for the page title, see views/partials/head.ejs
            searchData
        });
    }
});

// Actually set up the server
app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});
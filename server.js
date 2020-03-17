const globalConfig = require('./config');

// Require (third-party) modules
const express = require('express'),
    api = require('./scripts/js/modules/api.js'),
    render = require('./scripts/js/modules/render.js'),
    // Create new express app in 'app'
    app = express(),
    // Config object
    config = {
        port: globalConfig.port,
        apiKey: globalConfig.masterKey,
        apiUrlEndpoint: 'https://www.rijksmuseum.nl/api/nl/collection',
        artistDefaultUrl: 'Rembrandt+van+Rijn',
        artistDefault: 'Rembrandt van Rijn'
    },
    // Global variables
    url = `${config.apiUrlEndpoint}?key=${config.apiKey}&ps=9`,
    urlOverview = `${url}&involvedMaker=${config.artistDefaultUrl}`;

// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (SettingName, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('static'));

// Create a home route
app.get('/', function(req, res) {
   res.render('home', {
       styles: './css/index.css',
       title: 'Rijksmusuem Schilders'
   })
});

app.get('/offline', (req, res) => {
    res.render('offline', {
        styles: './css/index.css',
        title: 'Oeps! Je bent offline.'
    })
});

// Create an overview route
app.get('/rembrandt-van-rijn', async function(req, res) {
    const title = 'Schilderijen van Rembrandt van Rijn';

    try {
        const overviewData = await api.overview(urlOverview);
        render.overview(res, title, overviewData);

    } catch (err) {
        console.log('Error: ', err);
    }
});

// Create a details route
app.get('/schilderij/:id', async function(req, res) {
    const id = req.params.id,
        urlDetails = `${config.apiUrlEndpoint}/${id}?key=${config.apiKey}`;

    try {
        const detailsData = await api.details(urlDetails);
        render.details(res, detailsData.title, detailsData);

    } catch (err) {
        console.log('Error: ', err);
    }
});

// Create a search route
app.get('/search', async function(req, res) {
    const artist = req.query.artist,
        title = `Resultaten voor ${artist}`;

    if(artist.length !== 0) {
        const urlSearch =  `${url}&involvedMaker=${artist}`;

        try {
            const searchData = await api.overview(urlSearch);
            render.search(res, title, artist, searchData);

        } catch (err) {
            console.log('Error: ', err);
        }

    } else {
        try {
            const searchData = await api.overview(urlOverview);
            render.search(res, title, config.artistDefault, searchData);

        } catch (err) {
            console.log('Error: ', err);
        }
    }
});

// Actually set up the server
app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});
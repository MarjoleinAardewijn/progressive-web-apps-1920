// Require third-party modules
const express = require('express');
const request = require('request');

// Config object
const config = {
    port: 3000
};

const endpoint = 'https://www.rijksmuseum.nl/api/nl/collection',
    apiKey = 'n0Iu86hl';

// Create new express app in 'app'
const app = express();
// Link the templating engine to the express app
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
// If the url matches a file it will send that file
// Sending something (responding) ends the response cycle
app.use(express.static('public'));

// Create a home route
app.get('/', function(req, res) {
    request(`${endpoint}?key=${apiKey}&involvedMaker=Rembrandt+van+Rijn`, {json: true}, function (err, requestRes, body){
        if (err) {
            console.log('err');
            // We got an error
            res.send(err);
        } else {
            // Render the page using the 'overview' view and our body data
            res.render('overview', {
                styles: './css/styles.css',
                title: 'Overview', // We use this for the page title, see views/partials/head.ejs
                overviewData: body.artObjects
            });
        }
    });

});

app.get('/schilderij/:id', async function(req, res) {
    const id = await req.params.id;

    // console.log("test ID: ", id);

    await request(`${endpoint}/${id}?key=${apiKey}`, {json: true}, function (err, requestRes, body){
        if (err) {
            console.log('err');
            // We got an error
            res.send(err);
        } else {
            // Render the page using the 'details' view and our body data
            // console.log(body.artObject);

            res.render('details', {
                styles: './../css/styles.css',
                title: 'Details', // We use this for the page title, see views/partials/head.ejs
                detailsData: body.artObject
            });
        }
    })
});

// Actually set up the server
app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});
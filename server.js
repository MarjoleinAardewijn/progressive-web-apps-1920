const config = require('./config');

// Require (third-party) modules
const express = require('express'),
    compression = require('compression'),
    revManifest = require('./static/rev-manifest'),
    render = require('./scripts/modules/render'),
    router = require('./scripts/modules/router'),
    // Create new express app in 'app'
    app = express(),
    // function for setting cache-control headers
    cacheMiddleWare = (req, res, next) => {
        res.setHeader('Cache-Control', 'max-age=365000000, immutable');
        next();
    };

    // gzip files
app.use(compression())
    // cache css and js files
    .use(/.*-[0-9a-f]{10}\..*/, cacheMiddleWare)
    // cache images / icons
    .use(/.*.(jpg|jpeg|png|gif|ico|svg)$/, cacheMiddleWare)

    // Link the templating engine to the express app
    .set('view engine', 'ejs')
    // Tell the views engine/ejs where the template files are stored (SettingName, value)
    .set('views', 'views')

    // Tell express to use a 'static' folder
    // If the url matches a file it will send that file
    // Sending something (responding) ends the response cycle
    .use(express.static('static'))

    .get('/', (req, res) => {
        render.basicPage(res, 'home', 'Rijksmuseum Schilders', revManifest);
    })

    .get('/offline', (req, res) => {
        render.basicPage(res, 'offline', 'Oeps! Je bent offline.', revManifest);
    })

    .get('/rembrandt-van-rijn', (req, res) => {
        router.overview(res, revManifest);
    })

    .get('/schilderij/:id', (req, res) => {
        router.details(res, req.params.id, revManifest);
    })

    .get('/search', (req, res) => {
        router.search(res, req.query.artist, revManifest);
    })
    // Actually set up the server
    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });
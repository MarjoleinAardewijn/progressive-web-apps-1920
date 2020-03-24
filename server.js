const config = require('./config');

// Require (third-party) modules
const compression = require('compression'),
    express = require('express'),
    render = require('./scripts/modules/render'),
    router = require('./scripts/modules/router'),
    // Create new express app in 'app'
    app = express();

// Link the templating engine to the express app
app.set('view engine', 'ejs')
    // Tell the views engine/ejs where the template files are stored (SettingName, value)
    .set('views', 'views')

    // Tell express to use a 'static' folder
    // If the url matches a file it will send that file
    // Sending something (responding) ends the response cycle
    .use(express.static('static'))

    // Gzip files
    .use(compression())

    .get('/', function(req, res) {
        render.basicPage(res, 'home', 'Rijksmuseum Schilders');
    })

    .get('/offline', (req, res) => {
        render.basicPage(res, 'offline', 'Oeps! Je bent offline.');
    })

    .get('/rembrandt-van-rijn', function(req, res) {
        router.overview(res);
    })

    .get('/schilderij/:id', function(req, res) {
        router.details(res, req.params.id);
    })

    .get('/search', function(req, res) {
        router.search(res, req.query.artist);
    })
    // Actually set up the server
    .listen(config.port, function() {
        console.log(`Application started on port: ${config.port}`);
    });
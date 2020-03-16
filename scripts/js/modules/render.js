function overview(res, title, data) {
    return res.render('overview', {
        styles: './css/index.css',
        title: title,
        data
    });
}

function details(res, title, data) {
    return res.render('details', {
        styles: './../css/index.css',
        title: title, // We use this for the page title, see views/partials/head.ejs
        data
    });
}

function search(res, title, query, data) {
    return res.render('results', {
        styles: './css/index.css',
        title: title,
        query: query, // We use this for the page title, see views/partials/head.ejs
        data
    });
}

module.exports = { overview, details, search };
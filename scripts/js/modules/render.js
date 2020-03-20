function basicPage(res, view, title) {
    res.render(view, {
        title: title
    })
}

function overview(res, title, data) {
    return res.render('overview', {
        title: title,
        data
    });
}

function details(res, title, data) {
    return res.render('details', {
        title: title, // We use this for the page title, see views/partials/head.ejs
        data
    });
}

function search(res, title, query, data) {
    return res.render('results', {
        title: title,
        query: query, // We use this for the page title, see views/partials/head.ejs
        data
    });
}

module.exports = { basicPage, overview, details, search };
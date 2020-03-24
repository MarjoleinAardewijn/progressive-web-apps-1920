function basicPage(res, view, title, revManifest) {
    res.render(view, {
        title,
        revManifest
    })
}

function pageWithData(res, view, title, data, revManifest) {
    return res.render(view, {
        title,
        data,
        revManifest
    });
}

function search(res, title, query, data, revManifest) {
    return res.render('results', {
        title,
        query,
        data,
        revManifest
    });
}

module.exports = { basicPage, pageWithData, search };
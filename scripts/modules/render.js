function basicPage(res, view, title) {
    res.render(view, {
        title
    })
}

function pageWithData(res, view, title, data) {
    return res.render(view, {
        title,
        data
    });
}

function search(res, title, query, data) {
    return res.render('results', {
        title,
        query,
        data
    });
}

module.exports = { basicPage, pageWithData, search };
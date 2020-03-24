const config = require('../../config'),
    api = require('../../scripts/modules/api'),
    render = require('../../scripts/modules/render'),
    url = `${config.apiUrlEndpoint}?key=${config.apiKey}&ps=9`,
    urlOverview = `${url}&involvedMaker=${config.artistDefaultUrl}`;

async function overview(res, revManifest) {
    const title = 'Schilderijen van Rembrandt van Rijn';

    try {
        const overviewData = await api.overview(urlOverview);
        render.pageWithData(res, 'overview', title, overviewData, revManifest);
    } catch (err) {
        console.log('Error: ', err);
        render.basicPage(res, '404', 'Oeps! Er is iets misgegaan, probeer het later nog eens.', revManifest);
    }
}

async function details(res, query, revManifest) {
    const id = query;
    const url = `${config.apiUrlEndpoint}/${id}?key=${config.apiKey}`;

    try {
        const detailsData = await api.details(url);
        render.pageWithData(res, 'details', detailsData.title, detailsData, revManifest);
    } catch (err) {
        console.log('Error: ', err);
        render.basicPage(res, '404', 'Oeps! Er is iets misgegaan, probeer het later nog eens.', revManifest);
    }
}

async function search(res, query, revManifest) {
    const artist = query;
    const title = `Resultaten voor ${artist}`;

    if(artist.length !== 0) {
        const urlSearch =  `${url}&involvedMaker=${artist}`;
        try {
            const searchData = await api.overview(urlSearch);
            render.search(res, title, artist, searchData, revManifest);
        } catch (err) {
            console.log('Error: ', err);
            render.basicPage(res, '404', 'Oeps! Er is iets misgegaan, probeer het later nog eens.', revManifest);
        }
    } else {
        try {
            const searchData = await api.overview(urlOverview);
            render.search(res, title, config.artistDefault, searchData, revManifest);
        } catch (err) {
            console.log('Error: ', err);
            render.basicPage(res, '404', 'Oeps! Er is iets misgegaan, probeer het later nog eens.', revManifest);
        }
    }
}

module.exports = { overview, details, search };
const fetch = require('node-fetch');

async function overview(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData.artObjects;
}

async function details(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData.artObject;
}

module.exports = { overview, details };
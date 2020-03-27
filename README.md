# Rijksmuseum paintings PWA

I've worked with servers before, but never this way and always with PHP, not JavaScript. So I learned a lot from this. I've heard of PWAs but had never worked with them, let alone made one myself! That is why I am very proud that I managed to make one myself. I really liked making a PWA and will certainly try to do this more often in the future.

![App Home](https://user-images.githubusercontent.com/23479038/77656804-b31af800-6f74-11ea-9f78-0487e1a7a0a3.png "Rijksmuseum Schilders App")

<details>
    <summary>Overview Page</summary>
    
![App Overview](https://user-images.githubusercontent.com/23479038/77656814-b57d5200-6f74-11ea-8889-4236383e26c7.png "Rijksmuseum Schilders App - Overview")
</details>

<details>
    <summary>Details Page</summary>
    
![App Details](https://user-images.githubusercontent.com/23479038/77656819-b6ae7f00-6f74-11ea-8535-a661746d839a.png "Rijksmuseum Schilders App - Details")
</details>

## Description

For this project I used my project from WAFS and refactored it so that it renders server-side instead of client-side.
For more information about my WAFS project see the [README](https://github.com/MarjoleinAardewijn/web-app-from-scratch-1920) of that repository.

## Table of Contents

* [To Do](#To-do)
* [Live Demo](#Live-demo)
* [Usage](#Usage)
  * [Development](#Development)
  * [Production](#Production)
* [API](#Api)
* [Performance Enhancements](#Performance-Enhancements)
* [Feature Wishlist](#Feature-Wishlist)
* [Sources](#Sources)
* [Credits](#Credits)
* [Licence](#Licence)

## To do

- [x] Install Node.js packages.
- [x] Server-side rendering.
- [x] Use modules from WAFS project and change them if necessary.
- [x] Convert app into PWA.
- [x] Implement Manifest.
- [x] Implement Service Worker.
- [x] Add icons to manifest.json.
- [x] Deploy site (Heroku).
- [x] Cache images.
- [x] Optimize the Critical Rendering Path.

## Live Demo

The live demo of the app can be found here:
[Live Demo Link](https://ancient-hamlet-10241.herokuapp.com/)

## Usage
See the installation guide to learn how to install and use the app.

<details>
    <summary>Installation Guide</summary>

Go via the terminal to the folder you want the project to be placed:

```
    cd Path/To/Folder
```

Clone the repository and go to the project folder:

```
    git clone https://github.com/MarjoleinAardewijn/progressive-web-apps-1920.git && cd progressive-web-apps-1920
```

After cloning the project go to the docs folder:

```
    cd docs
```

Install npm:

```
    npm init
```

Install all the dependencies:

```
    npm install
```

### Development

When in development, run the following command to watch the changes:

```
    npm run dev:watch
```

In you browser. go to:

```
   localhost:3000 
```

### Production

When the app the finished use Heroku to deploy it.

First, login to Heroku:
```
    heroku login
```

Deploy the app by creating a new domain on Heroku. Heroku generates a random name for your app.
```
    heroku create
```

Clone the repository:
```
    heroku git:remote -a name-of-the-app
```

Push master branch to Heroku:
```
    git add .
    git commit -m "Heroku"
    git push heroku master
```

Open the app in your browser to check if everything went well:
```
    heroku open
```

To see the logs when something went wrong, run the following command:
```
    heroku logs --tail
```
</details>

## API

The API that is used for this app is the [Rijksmuseum API](https://data.rijksmuseum.nl/object-metadata/api/).

For getting the paintings from an artist I used the following API endpoint:

> https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&involvedMaker=[artist]

This will be returning the following data:

<details>
 <summary>All data from a specific artist</summary>

```json
{
  "elapsedMilliseconds": 0,
  "count": 3491,
  "artObjects": [
    {
      "links": {
        "self": "http://www.rijksmuseum.nl/api/nl/collection/SK-C-5",
        "web": "http://www.rijksmuseum.nl/nl/collectie/SK-C-5"
      },
      "id": "nl-SK-C-5",
      "objectNumber": "SK-C-5",
      "title": "De Nachtwacht",
      "hasImage": true,
      "principalOrFirstMaker": "Rembrandt van Rijn",
      "longTitle": "De Nachtwacht, Rembrandt van Rijn, 1642",
      "showImage": true,
      "permitDownload": true,
      "webImage": {
          "guid": "aa08df9c-0af9-4195-b31b-f578fbe0a4c9",
          "offsetPercentageX": 0,
          "offsetPercentageY": 1,
          "width": 2500,
          "height": 2034,
          "url":"https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0"
      },
      "headerImage": {
        "guid": "29a2a516-f1d2-4713-9cbd-7a4458026057",
        "offsetPercentageX": 0,
        "offsetPercentageY": 0,
        "width": 1920,
        "height": 460,
        "url": "https://lh3.googleusercontent.com/O7ES8hCeygPDvHSob5Yl4bPIRGA58EoCM-ouQYN6CYBw5jlELVqk2tLkHF5C45JJj-5QBqF6cA6zUfS66PUhQamHAw=s0"
      },
      "productionPlaces": ["Amsterdam"]
    },
    // more results...
  ]
}
```
</details>

For getting the details from a painting I used the following API endpoint:

> https://www.rijksmuseum.nl/api/nl/collection/[objectNumber]?key=[api-key]

This will be returning the following data:

<details>
 <summary>Painting specific data</summary>

```json
{
  "elapsedMilliseconds": 219,
  "artObject": {  
    "links": {  
      "search":"http://www.rijksmuseum.nl/api/nl/collection"
    },
    "id": "nl-SK-C-5",
    "priref": "5216",
    "objectNumber": "SK-C-5",
    "language": "nl",
    "title": "De Nachtwacht",
    "copyrightHolder": null,
    "webImage":{  
      "guid": "aa08df9c-0af9-4195-b31b-f578fbe0a4c9",
      "offsetPercentageX": 50,
      "offsetPercentageY": 100,
      "width": 2500,
      "height": 2034,
     "url": "https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0"
    },
    "colors": [  
      {  
        "percentage": 81,
        "hex": "#261808"
      },
      // more results...
    ],
    "colorsWithNormalization": [  
      {  
        "originalHex": "#261808",
        "normalizedHex": "#000000"
      },
      // more results...
    ],
    "normalizedColors": [  
      {  
        "percentage": 81,
        "hex": "#000000"
      },
      // more results...
    ],
    "normalized32Colors": [  
      {  
        "percentage": 81,
        "hex": "#000000"
      },
      // more results...
    ],
    "titles": [  
       "Officieren en andere schutters van wijk II in Amsterdam, onder leiding van kapitein Frans Banninck Cocq en luitenant Willem van Ruytenburch, bekend als ‘De Nachtwacht’",
         "Het korporaalschap van kapitein Frans Banninck Cocq en luitenant Willem van Ruytenburch, bekend als de 'Nachtwacht'"
    ],
    "description": "Officieren en andere schutters van wijk II in Amsterdam onder leiding van kapitein Frans Banninck Cocq en luitenant Willem van Ruytenburch, sinds het einde van de 18de eeuw bekend als ‘De Nachtwacht’. Schutters van de Kloveniersdoelen uit een poort naar buiten tredend. Op een schild aangebracht naast de poort staan de namen van de afgebeelde personen: Frans Banning Cocq, heer van purmerlant en Ilpendam, Capiteijn Willem van Ruijtenburch van Vlaerdingen, heer van Vlaerdingen, Lu[ij]tenant, Jan Visscher Cornelisen Vaendrich, Rombout Kemp Sergeant, Reijnier Engelen Sergeant, Barent Harmansen, Jan Adriaensen Keyser, Elbert Willemsen, Jan Clasen Leydeckers, Jan Ockersen, Jan Pietersen bronchorst, Harman Iacobsen wormskerck, Jacob Dircksen de Roy, Jan vander heede, Walich Schellingwou, Jan brugman, Claes van Cruysbergen, Paulus Schoonhoven. De schutters zijn gewapend met onder anderen pieken, musketten en hellebaarden. Rechts de tamboer met een grote trommel. Tussen de soldaten links staat een meisje met een dode kip om haar middel, rechts een blaffende hond. Linksboven de vaandrig met de uitgestoken vaandel.",
    "labelText": null,
    "objectTypes": [  
      "schilderij"
    ],
    "objectCollection": [  
      "schilderijen"
    ],
    "makers": [ ],
    "principalMakers": [  
      {  
        "name": "Rembrandt van Rijn",
        "unFixedName": "Rijn, Rembrandt van",
        "placeOfBirth": "Leiden",
        "dateOfBirth": "1606-07-15",
        "dateOfBirthPrecision": null,
        "dateOfDeath": "1669-10-08",
        "dateOfDeathPrecision": null,
        "placeOfDeath": "Amsterdam",
        "occupation": [  
          "prentmaker",
          "tekenaar",
          "schilder"
        ],
        "roles":[  
          "schilder"
        ],
        "nationality": "Noord-Nederlands",
        "biography": null,
        "productionPlaces": [  
          "Amsterdam"
        ],
        "qualification": null
      }
    ],
    "plaqueDescriptionDutch": "Rembrandts beroemdste en grootste doek werd gemaakt voor de Kloveniersdoelen. Dit was een van de verenigingsgebouwen van de Amsterdamse schutterij, de burgerwacht van de stad. \r\nRembrandt was de eerste die op een groepsportret de figuren in actie weergaf. De kapitein, in het zwart, geeft zijn luitenant opdracht dat de compagnie moet gaan marcheren. De schutters stellen zich op. Met behulp van licht vestigde Rembrandt de aandacht op belangrijke details, zoals het handgebaar van de kapitein en het kleine meisje op de achtergrond. Zij is de mascotte van de schutters.",
    "plaqueDescriptionEnglish": "Rembrandt’s largest, most famous canvas was made for the Arquebusiers guild hall. This was one of several halls of Amsterdam’s civic guard, the city’s militia and police. \r\nRembrandt was the first to paint figures in a group portrait actually doing something. The captain, dressed in black, is telling his lieutenant to start the company marching. The guardsmen are getting into formation. Rembrandt used the light to focus on particular details, like the captain’s gesturing hand and the young girl in the foreground. She was the company mascot.\r\n",
    "principalMaker": "Rembrandt van Rijn",
    "artistRole": null,
    "associations": [ ],
    "acquisition": {  
      "method": "bruikleen",
      "date": "1808-01-01T00:00:00",
      "creditLine": "Bruikleen van de gemeente Amsterdam"
    },
    "exhibitions": [ ],
    "materials": [
      "doek",
      "olieverf"
    ],
    "techniques":[ ],
    "productionPlaces": [  
      "Amsterdam"
    ],
    "dating":{  
      "presentingDate": "1642",
      "sortingDate": 1642,
      "period": 17,
      "yearEarly": 1642,
      "yearLate": 1642
    },
    "classification": {  
      "iconClassIdentifier": [  
        "45(+26)",
        // more results...
      ],
      // more results...
    },
    "hasImage": true,
    "historicalPersons": [  
      "Banninck Cocq, Frans",
      // more results...
    ],
    "inscriptions": [ ],
    "documentation": [  
      "The Rembrandt Database,  Object information, Rembrandt,  Civic guardsmen of Amsterdam under command of Banninck Cocq,  dated 1642, Rijksmuseum, Amsterdam, inv. no. SK-C-5, http://www.rembrandtdatabase.org/Rembrandt/painting/3063/civic-guardsmen-of-amsterdam-under-command-of-banninck-cocq, accessed 2016 February 01",
        // more results...
    ],
    "catRefRPK": [ ],
    "principalOrFirstMaker": "Rembrandt van Rijn",
    "dimensions": [  
      {  
        "unit": "cm",
        "type": "hoogte",
        "part": null,
        "value": "379,5"
      },
      // more results...
    ],
    "physicalProperties": [ ],
    "physicalMedium": "olieverf op doek",
    "longTitle": "De Nachtwacht, Rembrandt van Rijn, 1642",
    "subTitle": "h 379,5cm × b 453,5cm × g 337kg",
    "scLabelLine": "Rembrandt van Rijn (1606–1669), olieverf op doek, 1642",
    "label": {  
      "title": "De Nachtwacht",
      "makerLine": "Rembrandt van Rijn (1606–1669), olieverf op doek, 1642",
      "description": "Rembrandts beroemdste en grootste schilderij werd gemaakt voor de Kloveniersdoelen. Dit was een van de drie hoofdkwartieren van de Amsterdamse schutterij, de burgerwacht van de stad. Rembrandt was de eerste die op een schuttersstuk alle figuren in actie weergaf. De kapitein, in het zwart, geeft zijn luitenant opdracht dat de compagnie moet gaan marcheren. De schutters stellen zich op. Met behulp van licht vestigde Rembrandt de aandacht op belangrijke details, zoals het handgebaar van de kapitein en het kleine meisje op de voorgrond. Zij is de mascotte van de schutters. De naam Nachtwacht is pas veel later ontstaan, toen men dacht dat het om een nachtelijk tafereel ging.",
      "notes": "Multimediatour, 500. Tekst aangeleverd door Jonathan Bikker.",
      "date": "2019-07-05"
    },
    "showImage": true,
    "location": "HG-2.31"
  },
  // more results...
}
```
</details>

## Performance Enhancements

### 1. Server Side Rendering

Firstly, I rewrote the DOM from WAFS to ejs templates. This way, the rendering takes place on the server and not the client and is the content shown immediately when the HTML is parsed from the server instead of waiting for all the JavaScript to download and execute.

<details>
    <summary>Tests</summary>
    
**Audit**
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77756635-df477f00-702f-11ea-82f4-a16df6f4f4ab.png "Audit")

**Network**
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77766777-66045800-7040-11ea-9ef1-ff0453fa9ae2.png "Network")
</details>

### 2. Minifying

I minified the CSS using `gulp-clean-css` and the JavaScript using `gulp-minify`.

I minified the CSS and JavaScript files to make sure the CSS and JavaScript that is send over the network is smaller, this way it downloads faster.

<details>
    <summary>Code</summary>

`build-css.js`:
    
```js
const gulp = require('gulp'),
    concat = require('gulp-concat'), // concat all files
    autoprefixer = require('gulp-autoprefixer'), // prefix CSS
    cleanCSS = require('gulp-clean-css'); // minify

return gulp.src([
    './src/css/variables.css',
    './src/css/reset.css',
    './src/css/typography.css',
    './src/css/index.css',
    './src/css/components/*.css',
])
    .pipe(concat('index.css'))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./static/'));
```

`build-js.js`:

```js
const gulp = require('gulp'),
    concat = require('gulp-concat'), // concat all files
    minify = require('gulp-minify'); // minify

return gulp.src([
    './src/js/*.js',
])
    .pipe(concat('index.js'))
    .pipe(minify())
    .pipe(gulp.dest('./static/'));
```
</details>

<details>
    <summary>Tests</summary>

**Audit**    
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77757871-45cd9c80-7032-11ea-96eb-a678c9730e68.png "Audit")

**Network**
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77757706-00a96a80-7032-11ea-972c-557be2468f00.png "Network")
</details>

### 3. Gzip

I used gzip to compress the files, so that all the files send over the network are smaller and therefor will download faster. And besides that it doesn't cost the user more data than absolutely necessary.

For gzipping all the files I used `compression` as compression middleware.

<details>
    <summary>Code</summary>

`server.js`:

```js
const express = require('express');
// require compression middleware for gzip.
const compression = require('compression');
// Create new express app in 'app'
const app = express();

// gzip files
app.use(compression());
```
</details>

<details>
    <summary>Tests</summary>

**Audit**    
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77758401-326f0100-7033-11ea-8c49-9a508b37d6d4.png "Audit")

**Network** 
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77767201-fe024180-7040-11ea-988b-3ad014ccf73d.png "Network")
</details>

### 4. Lazy Load Images

To make sure that images are only downloaded when needed I added lazy loading using the Intersection Observer API. Lazy loading images prevents unnecessary downloads and therefor the website will load faster.

<details>
    <summary>Code</summary>
    
`lazyload.js`:

```js
document.addEventListener("DOMContentLoaded", function() {
    let lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        let imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazy");
                    image.classList.add("loaded");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        let lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload () {
            if(lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function() {
                let scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                    }
                });
                if(lazyloadImages.length === 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});
```

For this JavaScript code to work I gave all the images, except the first 4 images, on the overview page the class `lazy`.

I didn't give the first 4 images the `lazy` class, because any image that is present in the viewport, or at the beginning 
of the webpage, should probably not be lazy loaded. I chose to use 4 because this is the amount of images that is present 
in the viewport on desktops and I didn't have the time to make this responsive. 
The perfect scenario would be that only the images that are in the viewport, regardless of which device, are shown.

`paintings.ejs`:

```html
<% data.map((item, i) => { %>
    ...
        <img <% if (i >= 4 ) {%> class="lazy" data-src="<%= item.webImage ? item.webImage.url : '/placeholder.png' %>"<%} else {%> src="<%= item.webImage ? item.webImage.url : '/placeholder.png' %>"<%}%> alt="<%= item.title%>">
    ...
```

For more information about lazy loading see this [article from CSS-Tricks](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/).

When the user disabled JavaScript, lazy loading won't work and the images won't show. Because the images don't have a `src` 
attribute, they won't be downloaded and can't be shown on the page. To fix this problem I added an (error) message 
which will show when there is no JavaScript.

`paintings.ejs`:

```html
<main>
    <p id="noJS">Zet JavaScript aan om alle afbeeldingen te kunnen zien!</p>
...
```

To hide the message when JavaScript is enabled, I add the class `hide` to the element with which I hide it using JavaScript and CSS.

`lazyload.js`:

```js
let noJS = document.getElementById('noJS');
noJS.classList.add('hide');

...
```

`index.css`:

```css
.hide {
  display: none;
}
```
</details>

<details>
    <summary>Tests</summary>

**Audit**   
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77759329-d60ce100-7034-11ea-9714-f48886383ace.png "Audit")

**Network**
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77759094-6ac30f00-7034-11ea-89e6-f831bd3f7e07.png "Network")
</details>

### 5. Image Size

The web images (`webImage`) from the Rijksmuseam API are very big which makes the website load very slowly! But this can be reduced 
by using another image. The Rijksmuseum API also gives the option to use a header image (`headerImage`) which is A LOT smaller! By using 
`headerImage` instead of the `webImage` the website will load faster.

<details>
    <summary>Code</summary>

`paintings.ejs`:

```html
<img <% if (i >= 4 ) {%> class="lazy" data-src="<%= item.headerImage ? item.headerImage.url : '/placeholder.png' %>"<%} else {%> src="<%= item.headerImage ? item.headerImage.url : '/placeholder.png' %>"<%}%> alt="<%= item.title%>">
```
</details>

<details>
    <summary>Tests</summary>

**Audit**
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77777536-02822680-7050-11ea-8eee-e692ace46cff.png "Audit")

**Network**
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77777431-d8c8ff80-704f-11ea-8177-8cc6cc9a2287.png "Network")
</details>

### 6. Caching

I added browser caching and cached files with the Service Worker to load already downloaded files instantly.

#### Service Worker

In the Service Worker (SW) I cache all the core assets (`offline` page, `index.css` and `index.js`) and the home page (`/`) when the SW is installed.

<details>
    <summary>Code</summary>

`service-worker.js`:

```js
const CORE_CACHE_VERSION = 5,
    CORE_CACHE_NAME = `core-v${CORE_CACHE_VERSION}`,
    HTML_CACHE_NAME = `core-html-v${CORE_CACHE_VERSION}`,
    CORE_ASSETS = [
        '/offline',
        '/index.css',
        '/index.js'
    ];

self.addEventListener('install', event => {
    console.log('Installing Service Worker');
    event.waitUntil(
        Promise.all([
            caches.open(CORE_CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)),
            fetchAndCache('/', HTML_CACHE_NAME)
        ])
            .then( () => self.skipWaiting())
    );
});
```

Helper function for caching files when fetched:

```js
/**
 * Fetch url and add it to the cache
 *
 * @param request
 * @param cacheName
 * @returns {Promise<Response | never>}
 */
const fetchAndCache = (request, cacheName) => {
    return fetch(request)
        .then(response => {
            if (!response.ok) {
                throw new TypeError('Bad response status');
            }

            const clone = response.clone();
            caches.open(cacheName).then((cache) => cache.put(request, clone));
            return response;
        })
}
```
</details>

And to get the cached files I used the **cache only strategy** and a **generic fallback** where I cache the files if they aren't cached previously.

<details>
    <summary>Code</summary>
    
First I check if the request is GET request and a file from the core assets. If that it true than I use the `cache only strategy` 
where I open the cache for the core assets and get the requested file from the cache.

If the file isn't a core asset I check if it's a HTML file. If so, I use the generic fallback where I open the cache where I 
store all the HTML files and check if the file exists. If not, I fetch the file and store it in the cache for the next time 
the user visits the page. And finally, when there is no internet **and** the file isn't cached, I open the core assets cache 
and get the offline page.

`service-worker.js`:

```js
self.addEventListener('fetch', event => {
    console.log('Fetch Event: ', event.request.url);
    if (isCoreGetRequest(event.request)) {
        console.log('Core Get Request: ', event.request.url);
        // cache only strategy
        event.respondWith(
            caches.open(CORE_CACHE_NAME)
                .then(cache => cache.match(event.request.url))
        )
    } else if (isHtmlGetRequest(event.request)) {
        console.log('HTML Get Request: ', event.request.url);
        // generic fallback
        event.respondWith(
            caches.open(HTML_CACHE_NAME)
                .then(cache => cache.match(event.request.url))
                .then(response => response ? response : fetchAndCache(event.request, HTML_CACHE_NAME))
                .catch(err => {
                    return caches.open(CORE_CACHE_NAME)
                        .then(cache => cache.match('/offline'))
                })
        )
    }
});
```

Helper functions:

```js
/**
 * Checks if a request is a core GET request
 *
 * @param {Object} request        The request object
 * @returns {Boolean}            Boolean value indicating whether the request is in the core mapping
 */
const isCoreGetRequest = (request) => {
    return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
};

/**
 * Checks if a request is a GET and HTML request
 *
 * @param {Object} request        The request object
 * @returns {Boolean}            Boolean value indicating whether the request is a GET and HTML request
 */
const isHtmlGetRequest = (request) => {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
};

/**
 * Get a pathname from a full URL by stripping off domain
 *
 * @param {Object} requestUrl        The request object, e.g. https://www.mydomain.com/index.css
 * @returns {String}                Relative url to the domain, e.g. index.css
 */
const getPathName = (requestUrl) => {
    const url = new URL(requestUrl);
    return url.pathname;
};
```
</details>

<details>
    <summary>Tests</summary>
   
**Audit**
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77777536-02822680-7050-11ea-8eee-e692ace46cff.png "Audit")

**Network**
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77777767-4ecd6680-7050-11ea-8a5f-643dfee7c712.png "Network")
</details>

#### Browser
 
For browser caching I wrote a function for setting the cache-control headers on files so that the cache **expires in a year**. 
I also gave it the `immutable` extension cache-control directive. This indicates that the response body **will not change** 
over time and therefore the client will not send a conditional revalidation for the file to check for updates, even when 
the user explicitly refreshes the page.

<details>
    <summary>Code</summary>
    
```js
// function for setting cache-control headers
const cacheMiddleWare = (req, res, next) => {
    res.setHeader('Cache-Control', 'max-age=365000000, immutable');
    next();
};
```
</details>

With the function I cache the files `index.css` and `index.js` by getting all the files with a revision hash (which are 
only these two files) with a regexp and setting the cache-control header on those files. And for images I do the same, 
but now I'm getting all the files with the following extensions: jpg, jpeg, png, gif, ico and svg.

<details>
    <summary>Code</summary>
    
```js
const express = require('express'),
    // Create new express app in 'app'
    app = express();

app.use(/.*-[0-9a-f]{10}\..*/, cacheMiddleWare)
    // cache images / icons
    .use(/.*.(jpg|jpeg|png|gif|ico|svg)$/, cacheMiddleWare)
```
</details>

<details>
    <summary>Tests</summary>
    
**Audit**
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77778179-e9c64080-7050-11ea-8b41-70f45d2f2682.png "Audit")

**Network**
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77778066-bedbec80-7050-11ea-8552-cf5f1a60576b.png "Network")
</details>

#### Service Worker and Browser Cache

After adding both caching techniques a lot of files are loaded instantly, which makes the app feel very fast.

<details>
    <summary>Tests</summary>

**Audit**
![DevTools Lightroom Audit](https://user-images.githubusercontent.com/23479038/77777536-02822680-7050-11ea-8eee-e692ace46cff.png "Audit")

**Network**
![DevTools Network Tab](https://user-images.githubusercontent.com/23479038/77778345-298d2800-7051-11ea-9791-b3a6e7d773ba.png "Network")
</details>

## Conclusion

Because the codebase of this PWA is so small, you don't see any changes between the `First Contentful Paint` and `First Meaningful Paint`. 
The `Time To Interactive` decreases a bit from 1.0s to 0.8s.

Where you see the differences is in the time the PWA needs to load. It went from 4.6s to 450ms for all the users who visit the 
website for the first time and 61ms for users who visited the website once before. All steps play a big role in optimizing the 
Critical Rendering Path, but changing the images and caching are giving the biggest boost in performance. This because the `webImage`'s from the Rijksmuseum API are **very** big  
compared to the `headerImage`. And caching everything makes that a lot of files, including the images, the next time the 
user visits the page are almost instantly loaded. Which saves a lot of time! Especially for users who have slower networks.

On a `slow 3G` network for instance, it takes without all the enhancements a shocking 11.8min to finish loading and with all the enhancements including caching 2.38s!

<details>
    <summary>Slow 3G Network: Tests</summary>

**Before Enhancements**
![Slow 3G Network Before](https://user-images.githubusercontent.com/23479038/77770212-3277fc80-7045-11ea-993d-3f5e42dfa172.png "Slow 3G Network Before")

**After Enhancements**
![Slow 3G Network After](https://user-images.githubusercontent.com/23479038/77774838-f98f5600-704b-11ea-8043-901787393aaa.png "Slow 3G Network After")

**After Enhancements with Caching**
![Slow 3G Network After with Caching](https://user-images.githubusercontent.com/23479038/77775082-5985fc80-704c-11ea-9593-da65b63c7ede.png "Slow 3G Network After with Caching")
</details>

## Feature Wishlist

- [ ] Live Search on the paintings.
- [ ] Check which images are present in the viewport and don't lazy load them **depending on the device that is used**.

## Sources

The sources I used the most during the development of the app are:
- [ExpressJS](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Nodemon](https://nodemon.io/)
- [Node-Fetch](https://www.npmjs.com/package/node-fetch)
- [GulpJS](https://gulpjs.com/docs/en/getting-started/quick-start)
- [Gulp Concat](https://www.npmjs.com/package/gulp-concat)
- [Gulp Clean CSS](https://www.npmjs.com/package/gulp-clean-css)
- [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [Rimraf](https://www.npmjs.com/package/rimraf)
- [Chokidar](https://www.npmjs.com/package/chokidar-cli)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)
- [Heroku](https://devcenter.heroku.com/articles/heroku-cli)
- [Gzip](https://expressjs.com/en/advanced/best-practice-performance.html)
- [Compression](https://www.npmjs.com/package/compression)
- [Lazy Loading Images](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

## Credits

- [Example from Declan Rek](https://github.com/decrek/progressive-web-apps-1920/tree/master/examples/movies-example)
- [Regexp for caching images](https://serverfault.com/questions/881567/nginx-regex-rule-for-caching-images-override-the-root-location-block)
- [README from Folkert-Jan van der Pol](https://github.com/follywolly/performance-matters-1819)

## Licence

[MIT License](https://github.com/MarjoleinAardewijn/progressive-web-apps-1920/blob/master/LICENSE.txt).

Copyright (c) 2020 Marjolein Aardewijn

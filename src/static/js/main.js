/**
 * Require.js config paths
 */https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&signed_in=true&callback=initMap
require.config({
    paths : {
        async: 'vendor/requirejs/async',
        goog: 'vendor/requirejs/goog'
    },
    map: {
        '*': {
            conditioner: 'vendor/conditionerjs/conditioner',
            googlemap: 'async!https://maps.googleapis.com/maps/api/js?v=3.exp&language=NL'
        }
    }
});

/**
 * Determine which polyfills to load
 */
let polyfills = [];

// if (!('classList' in document.documentElement)) {
//     polyfills.push('polyfill/classList');
// }

/**
 * Load polyfills & start Conditioner.js
 *
 */
require(['conditioner'].concat(polyfills), function(conditioner) {

    conditioner.init();
});

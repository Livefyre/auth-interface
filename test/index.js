var tap = require('tap');
var authInterface = require('../index');

var tap = require('tap');
var test = tap.test;
var requirejs = require('requirejs');
requirejs.config({
    baseUrl: '../',
    nodeRequire: require,
    paths: {
        'event-emitter': 'amd/event-emitter/src/event-emitter',
        inherits: 'amd/inherits/inherits',
        debug: 'amd/debug/debug',
    },
    packages: [{
        name: 'auth',
        location: 'amd/auth/src'
    }]
});

var auth = requirejs('auth');


test('\n lists all of the public properties on the auth module', function(t) {
    for (var key in auth) {
        if ( ! key.indexOf('_')) {
            t.ok(authInterface.indexOf(key), 'Missing ' + key + ' in interface');
        }
    }
    t.end();
});

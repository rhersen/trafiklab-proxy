var express = require('express');
var request = require('request');
var key = require('./key');
var parser = require('./parser');

var app = express();

app.get('/departures/:id', function (req, res) {
    request({
            uri: 'https://api.trafiklab.se/sl/realtid/GetDpsDepartures?key=' + key.getKey() + '&timeWindow=60&siteId=' + req.params.id,
            headers: {
                accept: 'application/json'
            }},
        function (error, response, body) {
            res.setHeader('Content-Type', 'application/json');
            res.send(parser.getTrains(body));
        });
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening on port 3000');

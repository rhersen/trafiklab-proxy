var parser = require('./parser');

exports.testSomethingElse = function(test) {
    test.deepEqual(parser.getTrains('{"DPS": {"Trains": {"DpsTrain": [1, 2]}}}'), [1, 2]);
    test.done();
};
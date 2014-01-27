exports.getTrains = function(body) {
    return JSON.parse(body).DPS.Trains.DpsTrain;
};

var app = require('./app');
var port = process.env.PORT || 30015;

var server = app.listen(port, function() {
    console.log('Express server for Users listening on port ' + port);
});
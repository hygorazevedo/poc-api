const express = require('express');
const bodyParser = require('body-parser');

module.exports = function() {
    var start = {}

    start = express();
    start.use(bodyParser.json());
    start.set('port', process.env.PORT || 5000);
    start.listen(start.get('port'), console.log('Server running on http://localhost:'+ start.get('port')));

    return start;
}
const service = require('../startup')();
const userdata = require('../data/user')();

service.get('/', function(req, res){
    res.send('Hello World');
});

service.post('/user', function(req, res){
    var response = userdata.create();
    res.send(response);
});

service.put('/user', function(req, res){
    var response = userdata.update();
    res.send(response);
});

service.delete('/user', function(req, res){
    var response = userdata.remove();
    res.send(response);
});

service.get('/user/:username', function(req, res){
    var response = userdata.get(req.params.username);
    res.send(response);
});

service.get('/user', function(req, res){
    var response = userdata.list();
    res.send(response);
});
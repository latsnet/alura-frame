var http = require('http')
    ,app = require('./config/express');

http.createServer(app).listen(3300, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});


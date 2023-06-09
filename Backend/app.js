var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var port = process.env.port || 4201;

var app = express();

var cliente_router = require('./routes/cliente');
var usuario_router = require('./routes/usuario');
var producto_router = require('./routes/producto');
var public_router = require('./routes/public');

app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyparser.json({ limit: '50mb', extended: true }));

mongoose.connect('mongodb+srv://Ahab27:r1nX3x1sfit4Vgzv@clustertienda.bfjs9vr.mongodb.net/tienda', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, function () {
            console.log('Servidor Corriendo en ' + port);
        });
    }
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', cliente_router);
app.use('/api', usuario_router);
app.use('/api', producto_router);
app.use('/api', public_router);

module.exports = app;
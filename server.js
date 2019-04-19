var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile('/index.html', { root : __dirname});
});

app.get('/login', function (req, res) {
    res.sendFile('/views/login.html', { root : __dirname});
});

app.get('/cart', function (req, res) {
    res.sendFile('/views/cart.html', { root : __dirname});
});

app.get('/category', function (req, res) {
    res.sendFile('/views/category.html', { root : __dirname});
});

app.get('/category/:tagId', function (req, res) {
    res.sendFile('/views/category.html', { root : __dirname});
});

app.get('/product', function (req, res) {
    res.sendFile('/views/product.html', { root : __dirname});
});

app.get('/product/:tagId', function (req, res) {
    res.sendFile('/views/product.html', { root : __dirname});
});

app.get('/admin-orders', function (req, res) {
    res.sendFile('/views/admin-orders.html', { root : __dirname});
});

app.get('/admin-products-group', function (req, res) {
    res.sendFile('/views/admin-products-group.html', { root : __dirname});
});

app.get('/admin-products', function (req, res) {
    res.sendFile('/views/admin-products.html', { root : __dirname});
});

app.get('/admin-users', function (req, res) {
    res.sendFile('/views/admin-users.html', { root : __dirname});
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});
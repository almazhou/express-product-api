var express = require('express'),
    products = require('./routes/products');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/products', products.findAll);
app.get('/products/:id', products.findById);
app.post('/products', products.addWine);
app.put('/products/:id', products.updateWine);
app.delete('/products/:id', products.deleteWine);
 
app.listen(3000);
console.log('Listening on port 3000...');
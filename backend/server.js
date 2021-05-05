const express = require('express');
const products = require('./data/products');

const app = express();

//#region 
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));


// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
//#endregion

app.listen(5000, console.log("Server is up on 5000"));

app.get('/api/product', (req, res) => {
    res.json(products);
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})
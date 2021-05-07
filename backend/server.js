import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import products from './data/products.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
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



dotenv.config();

connectDB();

const app = express();

app.get('/', (req,res) => {
    res.send('Api is working....')
})

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is up in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));
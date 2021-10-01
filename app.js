const express = require('express');
const ENV = require('dotenv');

const app = express();
ENV.config({path:'./config/.env'});

const sequelize = require('./dataBase/database');

const headers = require('./middlewares/headers/headers');
require('./middlewares/errorHandler/error-handler');
app.use(express.json());
app.use(headers);


const routes = require('./routes/app.routes');

app.use(routes);


sequelize.sync({force:true}) 
    .then(() => {
        app.listen(process.env.PORT || 8080);
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
    .catch(err => {
        console.log(err);
    })
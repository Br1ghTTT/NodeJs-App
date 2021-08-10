const express = require('express');
const ENV = require('dotenv');

const app = express();
ENV.config({path:'./config/.env'});


const sequelize = require('./dataBase/database');


const headers = require('./common/headers/headers');
require('./middlewares/error-handler');
app.use(headers);

// const loginRoute = require('./routes/login.routes');
const appRoutes = require('./routes/app.routes');
app.use(appRoutes);
// app.use(loginRoute);

sequelize.sync() 
    .then(() => {
        app.listen(process.env.PORT || 8080);
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
    .catch(err => {
        console.log(err);
    })
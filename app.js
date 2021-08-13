const express = require('express');
const ENV = require('dotenv');

const app = express();
ENV.config({path:'./config/.env'});

const sequelize = require('./dataBase/database');

const headers = require('./middlewares/headers/headers');
require('./middlewares/errorHandler/error-handler');
app.use(express.json());
app.use(headers);

// const loginRoute = require('./routes/login.routes');
const routes = require('./routes/app.routes');
// const appRoute = require('./routes/heroes.routes');
// app.use(appRoute);
app.use(routes);
// app.use(loginRoute);

sequelize.sync({force:true}) 
    .then(() => {
        app.listen(process.env.PORT || 8080);
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
    .catch(err => {
        console.log(err);
    })
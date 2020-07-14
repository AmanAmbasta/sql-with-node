const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');
require('dotenv').config();

const data = require('./Routes/data');

const app = express();

//Adding MIDDLEWare
app.use(express.json());
app.use(cors());
app.use(volleyball); // logger
app.use('/data', data);


app.get('/', (req, res) => res.send('Hello World!'));

//Not Found function
function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
}

//Error handler
function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

//APP Is Listening On PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
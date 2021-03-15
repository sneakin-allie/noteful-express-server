require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const {NODE_ENV} = require('./config');
const foldersRouter = require('./folders/folders-router');
const notesRouter = require('./notes/notes-router');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/folders', foldersRouter);
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => { 
    console.log('/');
    res.send('Welcome to the Noteful API!')
});

app.get('/api/folders', (req, res) => { 
    console.log('/folders-are-working');
    res.send('Welcome to the Noteful API folders!')
});

app.get('/api/notes', (req, res) => { 
    console.log('/notes-are-working');
    res.send('Welcome to the Noteful API notes!')
});

app.use(function errorHandler(error, req, res, next) {
    let response;

    if (NODE_ENV === 'production') {
        response = {message: error.message, error};
    }
    else {
        console.error(error);
        response = {message: error.message, error};
    }
    res.status(500).json(response);
});

module.exports = app;
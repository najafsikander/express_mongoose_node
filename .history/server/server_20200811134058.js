const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

let {Book} = require('./models/book');

const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());

app.post('/api/books',(req,res) => {
    const body = _.pick(req.body, ['title','author','publisher','year'])
});

app.listen(port, () =>{
    console.log(`App running on port ${port}`);
});
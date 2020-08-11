const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

let {Book} = require('./models/book');
const book = require('./models/book');

const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());

app.post('/api/books',(req,res) => {
    const body = _.pick(req.body, ['title','author','publisher','year']);
    let book = new Book(body);
    book.save(body).then((book)=> {
        res.status(200).send(book);
    }); 
});

app.get('/api/books',(req,res)=>{
    Book.find().then((books)=>{
            res.status(200).send(books);
    }).catch((error)=>{
        res.status(500).send();
    });
});

app.get('/api/book/:id',(req,res)=>{
    let id = req.params.id;
    Book.findById(id).then((book) =>{
        res.status(200).send(book);
    }).catch((error) =>{
        res.status(500).send();
    });
});

app.put('/api/book/:id', (req,res) => {
    let id = req.params.id;
    const body = _.pick(req.body, ['title','author','publisher','year']);
    Book.findByIdAndUpdate(id, {$set:body}, {$new: true}).then((book) =>{
        if(!book){
            res.status(404).send();
        }

        res.send(book);
    }).catch((error) => {
        res.status(500).send();
    });
});

app.delete('/api/book/:id',(req,res) => {
    let id = req.params.id;
    Book.findByIdAndDelete(id).then((book)=>{
        if(!book){
            res.status(404).send();
        }
        res.send(book);
    }).catch((error) => {

    });
});
app.listen(port, () =>{
    console.log(`App running on port ${port}`);
});
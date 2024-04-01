const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
const { result } = require('lodash');
const app = express();

const dbURI = "mongodb://maxy:p5bikinpusing345@ac-pdylcsc-shard-00-00.4xkwsru.mongodb.net:27017,ac-pdylcsc-shard-00-01.4xkwsru.mongodb.net:27017,ac-pdylcsc-shard-00-02.4xkwsru.mongodb.net:27017/?ssl=true&replicaSet=atlas-897d2m-shard-0&authSource=admin&retryWrites=true&w=majority&appName=sdr";
mongoose.connect(dbURI)
    .then((result) => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/' , (req, res) => {
    //res.send('<p>home page n</p>');
    res.render('index', {title: 'Home'});
});

app.get('/about' , (req, res) => {
    //res.send('<p>home page n</p>');
    res.render('about',  {title: 'About'});
});

app.get('/about-us' , (req, res) => {
    
    //res.send('<p>home page n</p>');
    res.redirect('/about');
});

app.get('/comments', (req, res) => {
    res.render('comments',  {title: 'Comments'})
});

app.use((req, res) => {
    res.status(404).render('404',  {title: '404'});
})
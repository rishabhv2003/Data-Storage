const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

const saveDataModel = require('./models/dataSchema.js');

// connecting to mongodb
const mongoUrl = process.env.MONGO_URI;
mongoose.set('strictQuery', true).connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.log("Database not connected " + err);
});

// setting up middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    res.render('index');
})

// page when document save request is sent.
app.get('/save', (req, res) => {
    res.render(__dirname + '/public/saved.html');
})


app.get("/health", (req, res) => {
    res.send('Server health is perfect');
})


const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
app.listen(port, () => {
    console.log(`App is listening on Port http://${host}:${port}`);
})
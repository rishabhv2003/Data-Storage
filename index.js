require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.static('public'));

const mongoUrl = process.env.MONGO_URI;
mongoose.set('strictQuery', true).connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.log("Database not connected " + err);
});

const saveDataModel = require('./models/dataSchema.js'); 

// home page
app.get('/', (req,res)=>{
    res.render(__dirname + '/public/index.html');
})

// page when document save request is sent.
app.get('/save',(req,res)=>{
    res.render(__dirname + '/public/saved.html');
})


app.get("/health", (req,res) => {
    res.send('Server health is perfect');
})


const port = process.env.PORT ;
const host = process.env.HOST ;
app.listen(port,()=>{
    console.log(`App is listening on Port https://${host}/${port}`);
})
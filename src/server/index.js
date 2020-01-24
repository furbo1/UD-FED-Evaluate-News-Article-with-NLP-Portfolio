// import data from './mockAPI';

const path = require('path')
const express = require('express')
const AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config();

const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/api/sentiment', function(req, res){

    console.log(req.body);
    textapi.sentiment({
        text: req.body.articleText
      }, function(error, response) {
        if(error){
            return res.status(500).json({ error });
    
        } 
        res.status(200).json({result: response});
        console.log(response)
    });
})
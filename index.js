const express = require("express")
const app = express()
const app = express();
const axios = require("axios")

app.get('/got/json', (req,res) => {
    res.send(got)
})

app.get('got/url', (req,res) => {
    axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
})

module.exports = app;
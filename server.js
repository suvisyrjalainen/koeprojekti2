console.log("Moikka moi!")

const express = require('express')
const app = express()
app.listen(3000, () => console.log("kuuntelen"));
app.use(express.static("public"));

app.use(express.json({limit: '1mb'}));

const pankkikorttitiedot = [
    {
        "nimi": "Suvi Syrjäläinen",
        "pin": "1234"
    },
    {
      "nimi": "Alex Epic",
      "pin": "9812"
    }
]

const paikkatiedot = [
    {
        "latitude": "61.4740",
        "longitude": "23.8419",
        "paikka": "Turtola",
        "arvostelu": "Kotipaikkani",
        "arvostelija": "Suvi"
    },
    {
        "latitude": "61.4509",
        "longitude": "23.8488",
        "paikka": "Hervanta",
        "arvostelu": "Betonia",
        "arvostelija": "Pertsa"
    }

]

app.get('/haevierailut', function (req, res) {
  res.send(paikkatiedot)
})

app.get('/salaisetpankkitiedot', function (req, res) {
  res.send(pankkikorttitiedot)
})

app.post('/pankkitietojen_talletus', function (req, res) {
 pankkikorttitiedot.push(req.body);
 console.log(pankkikorttitiedot);
 res.send(200);
})

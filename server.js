console.log("Moikka moi!")

const express = require('express')
const app = express()
app.listen(3000, () => console.log("kuuntelen"));
app.use(express.static("public"));

const pankkikorttitiedot = [
    {
        "nimi": "Suvi Syrjäläinen",
        "pinkoodi": "1234"
    },
    {
      "nimi": "Alex Epic",
      "pinkoodi": "9812"
    }
]

app.get('/salaisetpankkitiedot', function (req, res) {
  res.send(pankkikorttitiedot)
})

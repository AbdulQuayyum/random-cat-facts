const express = require('express')
const app = express()
const port = 8888

const Facts = require("./Data/cat facts.json")


app.get('/', (req, res) => res.json('Hey There, Welcome to Soft Random Cat Fact!'))

app.get('/Fact', (req, res) => {
    const randomFacts = Facts[Math.floor(Math.random() * Facts.length)]
    res.json({ "Fact": randomFacts })
})

app.get('/AllFacts', (req, res) => {
    res.json({ "AllFacts": Facts })
})
app.listen(port, () => console.log(`Server running on port ${port}!`))
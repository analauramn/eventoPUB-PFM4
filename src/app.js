
const express = require('express')
const port  = 3003
const app = express()
const cors = require('cors')
const evento  = require('../src/controller/evento-controller')
const bdEvento = require('../src/infra/sqlite-db');

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
const body = req.body
next()
})

evento(app, bdEvento)

app.listen(port, () =>{
    console.log(`servidor rodando: http://localhost:${port}`)
  })

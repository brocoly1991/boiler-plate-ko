const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://pignecro4:wjdtjs@brocoly.wtzed.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));



app.get('/', (req, res) => {
    res.send('Hello World!!!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
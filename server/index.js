require('dotenv').config();
const express = require('express');
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on : ${process.env.PORT}`)
})

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})


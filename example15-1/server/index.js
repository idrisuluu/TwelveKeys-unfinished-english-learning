const express = require('express');
const cors = require('cors');
const DB_CONNECT = require('./db');
const {router} = require('./routes/router')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',router);
const PORT = 3000;

DB_CONNECT();

app.listen(PORT,'0.0.0.0',() => {
    console.log(`Server listening on ${PORT}`);
})

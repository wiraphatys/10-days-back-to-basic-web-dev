const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const client = require('./connect');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/testConnect', async (req, res) => {
    await client.connect();
    const rows = await client.query('SELECT NOW()');
    await client.end();

    res.send({rows: rows});
})

app.post('/insert', async (req, res) => {
    await client.connect();
    const rows = await client.query('INSERT INTO tb_book(isbn, name, price) VALUES($1, $2, $3)', [
        req.body.isbn,
        req.body.name,
        req.body.price
    ]);
    await client.end();
    res.send({rows: rows});
})

app.get('/select', async (req, res) => {
    await client.connect();
    const rows = await client.query('SELECT * FROM tb_book');
    await client.end();
    res.send({rows: rows.rows});
})

app.put('/update', async (req, res) => {
    await client.connect();
    const rows = await client.query('UPDATE tb_book SET name = $1 WHERE id = $2', [
        req.body.name,
        req.body.id
    ]);
    await client.end();
    res.send({rows: rows});
})

app.delete('/delete', async (req, res) => {
    await client.connect();
    const rows = await client.query('DELETE FROM tb_book WHERE id = $1', [
        req.body.id
    ])
    await client.end();
    res.send({rows: rows});
})

app.listen(port, () => {
    console.log("this server is running in port",port);
})
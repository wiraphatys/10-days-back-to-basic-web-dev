const express = require("express");
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = require('./connect');

const EmployeeModel = require('./models/employee');

app.get('/test', async (req, res) => {
    try {
        await client.authenticate();
        res.send('Connection has been established successfully.');
    } catch (error) {
        res.status(500).send(`Unable to connect to the database: ${error}`);
    }
})

app.get('/select', async (req, res) => {
    const rows = await EmployeeModel.findAll();
    res.send({rows: rows});
})

app.get('/find/:id', async (req, res) => {
    const rows = await EmployeeModel.findByPk(req.params.id);
    res.send({rows: rows});
})

app.post('/insert', async (req, res) => {
    const rows = await EmployeeModel.create(req.body);
    res.send({rows:rows});
})

app.put('/update', async (req, res) => {
    const rows = await EmployeeModel.update(req.body, {
        where: {
            id: req.body.id
        }
    })
    res.send({ rows: rows });
})

app.delete('/delete/:id', async (req, res) => {
    const rows = await EmployeeModel.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send({rows: rows});
})

app.listen(port, () => {
    console.log("this server is running in port", port);
})
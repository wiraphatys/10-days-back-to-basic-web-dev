const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('dotenv').config();

app.get("/generateToken", (req, res) => {
    const key = process.env.secret;
    const user = {
        id: 10011,
        name: "banky"
    }
    const token = jwt.sign(user, key);
    res.send({token: token});
})

app.post("/verifyToken", (req, res) => {
    const key = process.env.secret;
    const payload = jwt.verify(req.body.token, key);
    res.send({payload: payload});
})

const verifyToken = (req, res, next) => {
    const key = process.env.secret;
    const payload = jwt.verify(req.body.token, key);
    const id = payload.id;

    if (id != null) {
        next();
    }
}

app.get("/route1", verifyToken, (req, res, next) => {
    res.send("route1");
})

app.get("/route2", (req, res, next) => {
    res.send("route2");
})

app.listen(port, () => {
    console.log("this server is running in port", port);
})
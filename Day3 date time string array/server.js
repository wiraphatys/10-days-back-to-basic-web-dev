const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let d = new Date();
    console.log(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear())
    console.log(d.toDateString());
    console.log(d.toLocaleString());
    res.send('success');
})

app.get('/number', (req, res) => {
    let x = 10;;
    let y = "11";
    let z = "10.510375028356";
    let result = x + parseInt(y) + parseFloat(z);
    res.send({
        result: result.toFixed(2)+""
    })
})

app.get('/string', (req, res) => {
    let str = "Hello Node.js Developer in Thailand.";
    str = str.concat(..." My name is Banky.");
    str += " eiei."
    res.send({
        str: str,
        len: str.length
    })
})

app.get('/array', (req, res) => {
    let arr = [];
    for (let i = 0; i < 10; ++i) {
        arr.push({
            id: i,
        })
    }
    res.send({
        result: arr,
        size: arr.length
    });
})

app.get('/array2', (req, res) => {
    let arr = [2, 3, 5, 7, 11];
    arr.map(e => {
        console.log(e);
    })
    res.send();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
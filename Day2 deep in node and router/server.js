const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// get , post , put , delete

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post("/myPost", (req, res) => {
    console.log(req.body);
    res.send("post name = " + req.body['name']);
})

app.put("/myPut", (req,res) => {
    res.send("put method");
})

app.delete("/myDelete/:id", (req, res) => {
    res.send("deleted id " + req.params.id + " successfully");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
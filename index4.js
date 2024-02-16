import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath, urlToHttpOptions } from "url";
var bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band name:</h1><h2>${bandName}</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function bandNameGenerator (req, res, next){
  bandName = req.body["street"] + req.body["pet"];
  return next();
}
import express from "express";
import {dirname} from 'path';
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/uzduotys/index.html')
})

app.get('/pirma_uzduotis', (req, res) => {
    res.sendFile(__dirname + '/uzduotys/1.html')
})

app.get('/antra_uzduotis', (req, res) => {
    res.sendFile(__dirname + '/uzduotys/2.html')
})

app.listen(3000);


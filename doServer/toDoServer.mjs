import express from "express";
const app = express();
const port = 8080;

import path from "path";

import Mustache from "mustach-"

import sqlite3 from "sqlite3";
sqlite3.verbose();
import { open } from "sqlite";

async function openDb() {
    return await open({
        filename: "doDB.db",
        driver: sqlite3.Database
    });
}

let database = null;
openDb()
    .then((result) => {
        database = result;
        console.log("Database has opened");
    })
    .catch((err) => {
        console.error(err);
        return {};
    });
app.get('/', function (req, res) {
    res.sendFile(path.join(process.cwd(), 'toDoApp.html'));
});

app.get('/get')


import express from "express";
import {checkIfDivisble} from "./handler/numbersHandler";
import {searchForWord,submitResults} from "./handler/searchHandler";

const CONFIG = require("./config/config");
const app = express();

app.get("/", (req, res) => {
    checkIfDivisble().then((response) => {
        res.send(response);
    });
});

app.get("/search", (req, res) => {
    searchForWord().then((response) => {
        console.log(response);
        submitResults(response).then((data) => {
            res.send(data);
        })
    });
});


app.listen(CONFIG.PORT, () => console.log(`Listening on port ${CONFIG.PORT}`));



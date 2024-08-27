const {json} = require("express");
const connection = require("../config/database");

const getHomePage = (req, res) => {
    // A simple SELECT query
    let persons = [];
    connection.query("SELECT * FROM Persons p ", function (err, results, fields) {
        persons = results;
        console.log(">>>result: ", results); // results contains rows returned by server

        res.send(JSON.stringify(persons));
    });
};

const getABC = (req, res) => {
    res.send("Check ABC");
};

const getLocalhost = (req, res) => {
    // res.send("<h1>Some HTML code</h1>");
    res.render("sample.ejs");
};

module.exports = {
    getHomePage,
    getABC,
    getLocalhost,
};

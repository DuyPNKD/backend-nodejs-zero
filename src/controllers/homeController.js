const getHomePage = (req, res) => {
    res.send("Hello World! This is a homepage");
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

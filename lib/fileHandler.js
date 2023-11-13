const fs = require("fs");

//write content to file
function writeToFile(filename, content) {
    fs.writeFileSync(filename, content);
}

module.exports = { writeToFile };
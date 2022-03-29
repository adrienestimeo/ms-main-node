/**
 * Created at 09/01/2018
 * By Adrien Fenech
 */
const fs = require('fs');

module.exports = function(app, jsonParser){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file === "_.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app, jsonParser);
    });
};
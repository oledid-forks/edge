var fs = require('fs');

module.exports = function(filename) {
    var pathSep = process.platform === 'win32' ? ';' : ':';

    var directories = process.env.PATH.split(pathSep);

    for (var i = 0; i < directories.length; i++) {
        var path = directories[i] + '/' + filename;

        if (fs.existsSync(path)) {
            return path;
        }
    }

    return null;
}
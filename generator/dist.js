var ncp  = require('ncp');
var path = require('path');

// Copy pattern lib to docs directory for GitHub pages
ncp(path.join(__dirname, '../pattern-library'), path.join(__dirname, '../docs'), function(error) {

    if(error) {
        return console.log(error);
    }

    console.log('Pattern library successfully moved to docs for GitHub pages');
});
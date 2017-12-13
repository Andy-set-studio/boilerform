var findRemoveSync = require('find-remove');
var fs = require('fs');
var ncp  = require('ncp');
var path = require('path');
var rimraf = require('rimraf');

// Delete the markup dist dir
rimraf(path.join(__dirname, '../dist/markup'), function() {

    // Copy the components from the pattern lib
    ncp(path.join(__dirname, '../pattern-library/components'), path.join(__dirname, '../dist/markup'), function(error) {
        
        if(error) return console.log(error);

        // Remove all markdown files
        findRemoveSync(path.join(__dirname, '../dist/markup'), { extensions: '.md' });
    });
});
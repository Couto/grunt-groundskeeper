/*
 * grunt-groundskeeper
 * https://github.com/couto/grunt-groundskeeper
 *
 * Copyright (c) 2012 Couto
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {

    'use strict';

    grunt.registerMultiTask('groundskeeper', 'Remove logging statements, debuggers and pragmas', function () {

        // Depedencies
        var path = require('path'),
            groundskeeper = require('groundskeeper'),
            cleaner = {},
            self = this; // Too lazy to .bind a bunch of functions

        this.filesSrc.forEach(function (file) {
            var dest = (!this.data.keepStructure) ?
                    this.files.dest + path.sep + path.basename(file) :
                    path.resolve(
                        this.files.dest,
                        file.split(path.sep)
                            .splice(1)
                            .join(path.sep)
                        ),
                cleaner = groundskeeper(this.data.options);
                cleaner.write(grunt.file.read(file));
                grunt.file.write(dest, cleaner.toString());

        }, this);
    });
};

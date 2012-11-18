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
            helpers = require('grunt-lib-contrib').init(grunt),
            cleaner = {},
            self = this; // Too lazy to .bind a bunch of functions


        this.options = helpers.options(this);

        // TODO: ditch this when grunt v0.4 is released
        this.files = this.files || helpers.normalizeMultiTaskFiles(this.data, this.target);

        this.files.forEach(function (filePaths) {
            filePaths.src.forEach(function (glob) {
                grunt.file.expand(glob).forEach(function (file) {

                    cleaner = groundskeeper(self.options);
                    cleaner.write(grunt.file.read(file));

                    grunt.file.write(
                        path.normalize(filePaths.dest + path.sep + file),
                        cleaner.toString()
                    );
                });
            });
        });


    });

};

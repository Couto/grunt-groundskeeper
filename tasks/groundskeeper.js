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

        var path = require('path'),
            groundskeeper = require('groundskeeper'),
            options = this.options({ separator: grunt.util.linefeed }),
            clean = function (file) {
                var cleaner = groundskeeper(options),
                    source = grunt.file.read(file);

                cleaner.write(source);
                return cleaner.toString();
            };

        grunt.verbose.writeflags(options, 'Options');

        this.files.forEach(function (files) {

            var output = files.src.filter(function (filepath) {

                // Check if file exists
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                }

                return true;

            // Clean the file and normalize file endings
            }).map(clean).join(grunt.util.normalizelf(options.separator));


            // Write the file
            grunt.file.write(files.dest, output);

            // Warn if file was empty or correctly created
            return (output.length < 1 ) ?
                    grunt.log.warn('File ' + files.dest + ' created empty, because its counterpart was empty.') :
                    grunt.log.ok('File ' + files.dest + ' created.');

        });

    });

};

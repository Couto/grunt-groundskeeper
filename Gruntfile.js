var glob = require('glob');

module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        nodeunit: {
            tests: ['test/*_test.js']
        },

        watch: {
            gruntfile: {
                files: ['<%= jshint.gruntfile %>'],
                tasks: ['jshint:gruntfile']
            }
        },

        clean: {
            tests: ['tmp']
        },

        jshint: {
            all: [
                'GruntFile.js',
                'tasks/**/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                'jshintrc' : '.jshintrc'
            }
        },

        groundskeeper: {
            clean: {
                files: {
                    'tmp/console.js': ['test/fixtures/console.js']
                }
            }
        }
    });

    // Load tasks.
    glob.sync('node_modules/grunt-*').map(function (task) {
        return task.replace('node_modules/', '');
    }).forEach(grunt.loadNpmTasks);

    // Also load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Default task.
    grunt.registerTask('test', ['clean', 'jshint', 'groundskeeper', 'nodeunit']);
    grunt.registerTask('default', ['test', 'build-contrib']);

};

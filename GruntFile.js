var glob = require('glob');

module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        nodeunit: {
            all: ['test/**/*.js']
        },

        watch: {
            gruntfile: {
                files: ['<%= jshint.gruntfile %>'],
                tasks: ['jshint:gruntfile']
            }
        },

        jshint: {
            files: {
                src: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
            },
            options: {
                'jshintrc'  : '.jshintrc'
            }
        }
    });

    // Load tasks.
    glob.sync('node_modules/grunt-*').map(function (task) {
        return task.replace('node_modules/', '');
    }).forEach(grunt.loadNpmTasks);

    // Default task.
    grunt.registerTask('test', ['jshint', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'nodeunit']);

};

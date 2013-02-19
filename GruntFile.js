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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('test', ['jshint', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'nodeunit']);
};

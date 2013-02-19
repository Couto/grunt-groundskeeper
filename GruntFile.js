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
                'bitwise'   : true,
                'camelcase' : true,
                'curly'     : true,
                'eqeqeq'    : true,
                'forin'     : true,
                'immed'     : true,
                'indent'    : 4,
                'latedef'   : true,
                'newcap'    : true,
                'noarg'     : true,
                'noempty'   : true,
                'nonew'     : true,
                'plusplus'  : true,
                'quotmark'  : 'single',
                'regexp'    : true,
                'undef'     : true,
                'unused'    : true,
                'strict'    : false,
                'trailing'  : true,

                'asi'           : false,
                'boss'          : false,
                'debug'         : false,
                'eqnull'        : false,
                'esnext'        : false,
                'evil'          : false,
                'expr'          : false,
                'funcscope'     : false,
                'globalstrict'  : false,
                'iterator'      : false,
                'lastsemic'     : false,
                'laxbreak'      : false,
                'laxcomma'      : false,
                'loopfunc'      : false,
                'multistr'      : false,
                'onecase'       : false,
                'proto'         : false,
                'regexdash'     : false,
                'scripturl'     : false,
                'smarttabs'     : false,
                'shadow'        : false,
                'sub'           : false,
                'supernew'      : false,
                'validthis'     : false,

                'browser'       : false,
                'couch'         : false,
                'devel'         : true,
                'dojo'          : false,
                'jquery'        : false,
                'mootools'      : false,
                'node'          : true,
                'nonstandard'   : false,
                'prototypejs'   : false,
                'rhino'         : false,
                'worker'        : false,
                'wsh'           : false,

                'nomen'     : true,
                'onevar'    : true,
                'passfail'  : false,
                'white'     : true
            },
            globals: ['grunt']
        }
    });

    // Load tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit']);
};

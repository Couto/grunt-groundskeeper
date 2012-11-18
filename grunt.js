module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        test: {
            files: ['test/**/*.js']
        },

        lint: {
            files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
        },

        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
        },

        jshint: {
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

    // Load local tasks.
    grunt.loadTasks('tasks');

    // Default task.
    grunt.registerTask('default', 'lint test');

};

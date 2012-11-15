/*
 * grunt-groundskeeper
 * https://github.com/couto/grunt-groundskeeper
 *
 * Copyright (c) 2012 Couto
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('groundskeeper', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('groundskeeper'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('groundskeeper', function() {
    return 'groundskeeper!!!';
  });

};

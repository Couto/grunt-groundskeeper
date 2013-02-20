(function () {
    'use strict';

    var grunt = require('grunt'),
        load = function (file) {
            var contents = grunt.file.read(file);

            if (process.platform === 'win32') {
                contents = contents.replace(/\r\n/g, '\n');
            }

            return contents;
        };

    /*
      ======== A Handy Little Nodeunit Reference ========
      https://github.com/caolan/nodeunit

      Test methods:
        test.expect(numAssertions)
        test.done()
      Test assertions:
        test.ok(value, [message])
        test.equal(actual, expected, [message])
        test.notEqual(actual, expected, [message])
        test.deepEqual(actual, expected, [message])
        test.notDeepEqual(actual, expected, [message])
        test.strictEqual(actual, expected, [message])
        test.notStrictEqual(actual, expected, [message])
        test.throws(block, [error], [message])
        test.doesNotThrow(block, [error], [message])
        test.ifError(value)
    */

    return exports.groundskeeper = {

        clean: function (test) {
            var actual = load('tmp/console.js'),
                expected = load('test/expected/console.js');

            test.expect(1);

            test.equal(expected, actual, 'should clean up all existing console statements');

            test.done();

        }

    };

}());

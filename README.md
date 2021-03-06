# grunt-groundskeeper [![Build Status](https://secure.travis-ci.org/Couto/grunt-groundskeeper.png?branch=master)](http://travis-ci.org/Couto/grunt-groundskeeper)

> Remove console statements, debugger and specific blocks of code


## Notice
If you're using [UglifyJS2](https://github.com/mishoo/UglifyJS2) then you most likely don't need this package at all.
You can just use the `drop_debugger` and `drop_console` to achieve the same effect.

If you're using the pragmas function, you might achieve the same effect using [conditional compilation](https://github.com/mishoo/UglifyJS2#conditional-compilation).

On the other hand if you don't use UglifyJS2 then go ahead and keep reading :)


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-groundskeeper --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-groundskeeper');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-coffee/tree/grunt-0.3-stable).*



## Groundskeeper task
_Run this task with the `grunt groundskeeper` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

For a more detailed description of the available options please refer to the [groundskeeper's usage](https://github.com/Couto/groundskeeper#usage)

#### console
Type: `boolean`

If true, it will keep `console` statements.

#### debugger
Type: `boolean`

If true, it will keep `debugger;` statements.

#### pragmas
Type: `Array`

It will keep pragmas with the specified identifiers.

#### namespace
Type: `Array`

Remove custom logging utilities that live in the given namespace.

#### replace
Type: `String`

If the simple removal of statements causes errors, use this option to replace them for a given string.

### Usage Examples

```js
groundskeeper: {
  compile: {
    files: {
      'path/to/result.js': 'path/to/source.js', // 1:1 compile
      'path/to/another.js': ['path/to/sources/*.js', 'path/to/more/*.js'] // clean up and concat into single file
    },
    options: {  // this options only affect the compile task
        console: false
    }
  },

  glob_to_multiple: { // if multiple files are given, this will keep the same folder structure and files
    expand: true,
    cwd: 'path/to',
    src: ['*.js'],
    dest: 'path/to/dest/',
    ext: '.js'
  },

  options: {
    console: true,                          // don't remove console statements
    debugger: true,                         // don't remove debugger statements
    pragmas: ['development', 'validation'], // don't remove `development` and `validation` pragmas
    namespace: ['App.logger'],              // Remove functions that live inside the App.logger namespace
    replace: '"0"'                          // Replace removed statements for the given string (note the extra quotes)
  }
}
```

For more examples on how to use the `expand` API shown in the `glob_to_multiple` example, see "Building the files object dynamically" in the grunt wiki entry [Configuring Tasks](http://gruntjs.com/configuring-tasks).

---

Task submitted by [Luis Couto](http://15minuteslate.net)


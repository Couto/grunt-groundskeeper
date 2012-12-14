# grunt-groundskeeper

Basic [gruntjs](https://github.com/gruntjs/grunt) task, wrapping aroung [groundskeeper](https://github.com/Couto/groundskeeper) to allow users to remove `console`, `debugger;`, specified pragmas and their own logging statements.


## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-groundskeeper`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-groundskeeper');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

In your `grunt.js` file, inside the `grunt.initConfig` object,  add a key named `groundskeeper`. This section specifies the files to clean up with [groundskeeper](http://github.com/Couto/groundskeeper.git)

### Parameters

__identifier__ : `Object`
You can provide multiple configuration options, by default `grunt` will run them all, but you can specify which one you want to run alone, by calling `groundskeeper:identifier`

```javascript
grunt.initConfig({
    groundskeeper: {
        cleanall: {},
        keepPragmas: {}
    }
});
```

Each configuration accepts four parameters:

 * __options__ : `Object`. Options given to `groundskeeper`
   * __console__ : `Boolean`. If true, keeps `console` statements,
   * __debugger__ : `Boolean`. if true keeps `debugger;` statements,
   * __pragmas__ : `Array`. Specified pragmas will be keep in the final file
   * __namespace__ : `String`. If you use your own logging utility, specify it's namespace.
   * __replace__ : `String`. Replace `console` and `namespace` with the given string.
 * __src__ : `Array`. Files/globs indicating which files will be cleaned up.
 * __dest__ : `String`. Output folder where cleaned files will end up.
 * __keepStructure__ : `Boolean`. Keep structure when moving files to dest folder.

```javascript
groundskeeper: {
    cleanall: {
        src: ['app/scripts/*.js'],
        dest: 'web/scripts'
    },
    keepPragmas: {
        options: {
          pragmas: ['validation', 'development'],
        },
        src: ['app/**/*.js', 'vendor/\*\*/*.js'],
        dest: 'dev',
        keepStructure: true
    }
}
```

if __keepStructure__ is `true`, `groundskeeper` will mirror your folder structure in the output folder.

e.g.:
```
groundskeeper: {
    src: ['scripts/**/*.js'],
    dest: 'web'
}
```
will result in the following directory structure.

```

 | - scripts
 | | - modules
 | | - libs
 |
 | - web
 | | -modules
 | | -libs

```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
__0.0.2__
 * Provide more output options

__0.0.1__
 * Basic wrapper around [groundskeeper](http://github.com/Couto/groundskeeper.git)

## TODO
 * Make tests
 * Provide examples

## License
Copyright (c) 2012 Couto
Licensed under the MIT license.

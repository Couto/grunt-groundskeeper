# Usage Examples

```js
groundskeeper: {
  compile: {
    files: {
      'path/to/result.js': 'path/to/source.js', // 1:1 compile
      'path/to/another.js': ['path/to/sources/*.js', 'path/to/more/*.js'] // clean up and concat into single file
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

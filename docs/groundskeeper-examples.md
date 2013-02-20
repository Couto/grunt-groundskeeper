# Usage Examples

```js
groundskeeper: {
  compile: {
    files: {
      'path/to/result.js': 'path/to/source.js', // 1:1 compile
      'path/to/another.js': ['path/to/sources/*.js', 'path/to/more/*.js'] // clean up and concat into single file
    }
  },

  glob_to_multiple: {
    expand: true,
    cwd: 'path/to',
    src: ['*.js'],
    dest: 'path/to/dest/',
    ext: '.js'
  }
}
```

For more examples on how to use the `expand` API shown in the `glob_to_multiple` example, see "Building the files object dynamically" in the grunt wiki entry [Configuring Tasks](http://gruntjs.com/configuring-tasks).

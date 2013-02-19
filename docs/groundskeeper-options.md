# Options

For a more detailed description of the available options please refer to the [groundskeeper's usage](https://github.com/Couto/groundskeeper#usage)

## console
Type: `boolean`

If true, it will keep `console` statements.

## debugger
Type: `boolean`

If true, it will keep `debugger;` statements.

## pragmas
Type: `Array`

It will keep pragmas with the specified identifiers.

## namespace
Type: `Array`

Remove custom logging utilities that live in the given namespace.

## replace
Type: `String`

If the simple removal of statements causes errors, use this option to replace them for a given string.

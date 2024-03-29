<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# error2json

> Return a [JSON][json] representation of an [error][mdn-error] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var error2json = require( '@stdlib/error/to-json' );
```

#### error2json( error )

Returns a [JSON][json] representation of an [`error`][mdn-error] object.

```javascript
var err = new Error( 'beep' );

var json = error2json( err );
/* e.g., returns
    {
        'type': 'Error',
        'name': 'Error', // if present
        'message': 'beep',
        'stack': '...' // if present
    }
*/
```

The [JSON][json] `object` is **guaranteed** to have the following properties:

-   **type**: error type.
-   **message**: error message.

The **only** standardized cross-platform property is `message`. Depending on the platform, the following properties **may** be present:

-   **name**: error name.
-   **stack**: stack trace.
-   **code**: error code ([Node.js][node-system-error] system errors).
-   **errno**: error code `string` ([Node.js][node-system-error] system errors).
-   **syscall**: `string` representing the failed system call ([Node.js][node-system-error] system errors).

The function also serializes **all** `enumerable` properties.

<!-- eslint-disable object-curly-newline -->

```javascript
var err = new Error( 'beep' );
err.a = 'b';
err.c = { 'd': 'e' };

var json = error2json( err );
/* e.g., returns
    {
        'type': 'Error',
        'name': 'Error', // if present
        'message': 'beep',
        'stack': '...', // if present
        'a': 'b',
        'c': {
            'd': 'e'
        }
    }
*/
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Supported built-in [`error`][mdn-error] types:

    -   [`Error`][mdn-error] 
    -   [`TypeError`][mdn-type-error]
    -   [`SyntaxError`][mdn-syntax-error]
    -   [`ReferenceError`][mdn-reference-error]
    -   [`RangeError`][mdn-range-error]
    -   [`URIError`][mdn-uri-error]
    -   [`EvalError`][mdn-eval-error]

-   The implementation supports custom error types and sets the `type` field to the closest built-in [`error`][mdn-error] type.

    ```javascript
    function CustomError( msg ) {
        this.name = 'CustomError';
        this.message = msg || '';
        this.stack = ( new TypeError() ).stack;
        return this;
    }
    CustomError.prototype = Object.create( TypeError.prototype );
    CustomError.prototype.constructor = CustomError;

    var err = new CustomError( 'boop' );

    var json = error2json( err );
    /* e.g., returns
        {
            'type': 'TypeError',
            'name': 'CustomError',
            'message': 'boop',
            'stack': '...'
        }
    */
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var error2json = require( '@stdlib/error/to-json' );

var err = new Error( 'beep' );
var out = error2json( err );
/* e.g., returns
    {
        'type': 'Error',
        'name': 'Error',
        'message': 'beep',
        'stack': '...'
    }
*/

err = new TypeError( 'invalid type' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'TypeError',
        'name': 'TypeError',
        'message': 'invalid type',
        'stack': '...'
    }
*/

err = new SyntaxError( 'bad syntax' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'SyntaxError',
        'name': 'SyntaxError',
        'message': 'bad syntax',
        'stack': '...'
    }
*/

err = new ReferenceError( 'unknown variable' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'ReferenceError',
        'name': 'ReferenceError',
        'message': 'unknown variable',
        'stack': '...'
    }
*/

err = new URIError( 'bad URI' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'URIError',
        'name': 'URIError',
        'message': 'bad URI',
        'stack': '...'
    }
*/

err = new RangeError( 'value out-of-range' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'RangeError',
        'name': 'RangeError',
        'message': 'value out-of-range',
        'stack': '...'
    }
*/

err = new EvalError( 'eval error' );
out = error2json( err );
/* e.g., returns
    {
        'type': 'EvalError',
        'name': 'EvalError',
        'message': 'eval error',
        'stack': '...'
    }
*/
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/error/reviver`][@stdlib/error/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized error object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[mdn-type-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[mdn-syntax-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[mdn-range-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

[mdn-reference-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

[mdn-uri-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[mdn-eval-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

[node-system-error]: https://nodejs.org/api/errors.html#errors_class_system_error

<!-- <related-links> -->

[@stdlib/error/reviver]: https://github.com/stdlib-js/error/tree/main/reviver

<!-- </related-links> -->

</section>

<!-- /.links -->

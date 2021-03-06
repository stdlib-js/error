<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Tools

> Error tools.

<section class="usage">

## Usage

```javascript
var tools = require( '@stdlib/error/tools' );
```

#### tools

Namespace containing error tools.

```javascript
var o = tools;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`database()`][@stdlib/error/tools/database]</span><span class="delimiter">: </span><span class="description">standard library error code database.</span>
-   <span class="signature">[`fmtprodmsgFactory( [options] )`][@stdlib/error/tools/fmtprodmsg-factory]</span><span class="delimiter">: </span><span class="description">return a `function` which formats an error message for production.</span>
-   <span class="signature">[`fmtprodmsg( code, ...args )`][@stdlib/error/tools/fmtprodmsg]</span><span class="delimiter">: </span><span class="description">format an error message for production.</span>
-   <span class="signature">[`id2msg( id )`][@stdlib/error/tools/id2msg]</span><span class="delimiter">: </span><span class="description">return an error message corresponding to a provided two-character error identifier.</span>
-   <span class="signature">[`id2pkg( id )`][@stdlib/error/tools/id2pkg]</span><span class="delimiter">: </span><span class="description">return the package name associated with a specified error identifier prefix.</span>
-   <span class="signature">[`msg2id( msg )`][@stdlib/error/tools/msg2id]</span><span class="delimiter">: </span><span class="description">return a two-character error identifier corresponding to a provided error message.</span>
-   <span class="signature">[`pkg2id( pkg )`][@stdlib/error/tools/pkg2id]</span><span class="delimiter">: </span><span class="description">return the error identifier prefix associated with a specified package name.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var tools = require( '@stdlib/error/tools' );

console.log( objectKeys( tools ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/error/tools/database]: https://github.com/stdlib-js/error/tree/main/tools/database

[@stdlib/error/tools/fmtprodmsg-factory]: https://github.com/stdlib-js/error/tree/main/tools/fmtprodmsg-factory

[@stdlib/error/tools/fmtprodmsg]: https://github.com/stdlib-js/error/tree/main/tools/fmtprodmsg

[@stdlib/error/tools/id2msg]: https://github.com/stdlib-js/error/tree/main/tools/id2msg

[@stdlib/error/tools/id2pkg]: https://github.com/stdlib-js/error/tree/main/tools/id2pkg

[@stdlib/error/tools/msg2id]: https://github.com/stdlib-js/error/tree/main/tools/msg2id

[@stdlib/error/tools/pkg2id]: https://github.com/stdlib-js/error/tree/main/tools/pkg2id

<!-- </toc-links> -->

</section>

<!-- /.links -->

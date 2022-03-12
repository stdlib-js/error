/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var formatProdErrorMessage = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof formatProdErrorMessage, 'function', 'export is a function' );
	t.end();
});

tape( 'the function throws an error if provided no arguments', function test( t ) {
	t.throws( foo, Error, 'throws error' );
	t.end();
	function foo() {
		formatProdErrorMessage();
	}
});

tape( 'the function returns a formatted error message', function test( t ) {
	var actual;

	actual = formatProdErrorMessage( 'foo' );

	t.equal( typeof actual, 'string', 'returns a string' );
	t.end();
});
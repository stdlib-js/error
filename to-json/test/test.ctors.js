/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isArray = require( '@stdlib/assert/is-array' );
var CTORS = require( './../lib/ctors.js' );


// TESTS //

tape( 'main export is an array', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( isArray( CTORS ), true, 'main export is an array' );
	t.end();
});

tape( 'error constructors are exposed via an exported array', function test( t ) {
	t.ok( CTORS.length > 0, 'has length > 0' );
	t.end();
});

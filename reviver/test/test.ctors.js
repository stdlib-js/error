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
var objectKeys = require( '@stdlib/utils/keys' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var ctors = require( './../lib/ctors.js' );


// TESTS //

tape( 'main export is a function hash', function test( t ) {
	var keys;
	var i;

	t.ok( true, __filename );
	t.equal( isPlainObject( ctors ), true, 'main export is an object' );

	keys = objectKeys( ctors );
	t.ok( keys.length > 0, 'has keys' );

	for ( i = 0; i < keys.length; i++ ) {
		t.equal( isFunction( ctors[ keys[i] ] ), true, keys[i] + ' value is a function' );
	}
	t.end();
});

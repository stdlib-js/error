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
var id2msg = require( './../../../tools/id2msg' );
var msg2id = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof msg2id, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			msg2id( value );
		};
	}
});

tape( 'the function returns a two-character error identifier', function test( t ) {
	var actual;
	var list;
	var i;

	list = [
		'invalid argument. First argument must be a number. Value: `%s`.',
		'invalid argument. First argument must be a positive integer. Value: `%s`.'
	];
	for ( i = 0; i < list.length; i++ ) {
		actual = msg2id( list[ i ] );
		t.strictEqual( typeof actual, 'string', 'returns a string' );
		t.strictEqual( actual.length, 2, 'returns a two-character string' );
		t.strictEqual( id2msg( actual ), list[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `null` if provided an unrecognized error message', function test( t ) {
	var values;
	var i;

	values = [
		'invalid parameter',
		'beep boop baz'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( msg2id( values[ i ] ), null, 'returns expected value' );
	}
	t.end();
});

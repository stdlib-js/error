/*
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

import id2pkg = require( './index' );


// TESTS //

// The function returns a string or null...
{
	id2pkg( '0H5' ); // $ExpectType string | null
}

// The compiler throws an error if the function is not provided a string...
{
	id2pkg( 5 ); // $ExpectError
	id2pkg( true ); // $ExpectError
	id2pkg( false ); // $ExpectError
	id2pkg( null ); // $ExpectError
	id2pkg( undefined ); // $ExpectError
	id2pkg( [] ); // $ExpectError
	id2pkg( {} ); // $ExpectError
	id2pkg( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	id2pkg( 'base.sin', 'beep' ); // $ExpectError
}
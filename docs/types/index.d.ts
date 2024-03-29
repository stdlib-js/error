/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import reviveError = require( './../../reviver' );
import error2json = require( './../../to-json' );

/**
* Interface describing the `error` namespace.
*/
interface Namespace {
	/**
	* Revives a JSON-serialized error object.
	*
	* @param key - key
	* @param value - value
	* @returns value or error object
	*
	* @example
	* var str = '{"type":"TypeError","message":"beep"}';
	* var err = JSON.parse( str, ns.reviveError );
	* // returns <TypeError>
	*/
	reviveError: typeof reviveError;

	/**
	* Returns a JSON representation of an error object.
	*
	* @param err - error to serialize
	* @returns JSON representation
	*
	* @example
	* var err = new Error( 'beep' );
	* var json = ns.error2json( err );
	* // returns {...}
	*/
	error2json: typeof error2json;
}

/**
* Errors.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

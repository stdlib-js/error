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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import database = require( './../../../tools/database' );
import fmtprodmsg = require( './../../../tools/fmtprodmsg' );
import fmtprodmsgFactory = require( './../../../tools/fmtprodmsg-factory' );
import id2msg = require( './../../../tools/id2msg' );
import id2pkg = require( './../../../tools/id2pkg' );
import msg2id = require( './../../../tools/msg2id' );
import pkg2id = require( './../../../tools/pkg2id' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Returns a mapping of standard library error codes to their corresponding error messages.
	*
	* @returns mapping of error codes to corresponding error messages
	*
	* @example
	* var db = ns.database();
	* // returns {...}
	*/
	database: typeof database;

	/**
	* Formats an error message for production.
	*
	* @param code - error code
	* @param args - error message arguments
	* @returns formatted error message
	*
	* @example
	* var msg = ns.fmtprodmsg( '3', 'wrong_type' );
	* // returns <string>
	*/
	fmtprodmsg: typeof fmtprodmsg;

	/**
	* Returns a function which formats an error message for production.
	*
	* @param options - function options
	* @param options.url - website URL for full error message (default: `'https://stdlib.io/docs/api/latest/error-decoder.html'`)
	* @param options.message - error message template with `{{url}}` and `{{code}}` placeholders that will be replaced (default: `'Minified stdlib error code: {{code}}. Visit {{url}} for the full message.'`)
	* @returns error formatting function
	*
	* @example
	* var opts = {
	*     'url': 'https://stdlib.io/error-decoder.html'
	* };
	*
	* var fcn = factory( opts );
	* // returns <Function>
	*/
	fmtprodmsgFactory: typeof fmtprodmsgFactory;

	/**
	* Returns an error message corresponding to a provided two-character error identifier.
	*
	* @param id - error identifier
	* @returns error message
	*
	* @example
	* var v = ns.id2msg( '8t' );
	* // returns <string>
	*/
	id2msg: typeof id2msg;

	/**
	* Returns a package name associated with a specified error code identifier prefix.
	*
	* @param id - identifier prefix
	* @returns package name
	*
	* @example
	* var v = ns.id2pkg( '0YK' );
	* // returns '@stdlib/math/base/special/sin'
	*/
	id2pkg: typeof id2pkg;

	/**
	* Returns a two-character error identifier corresponding to a provided error message.
	*
	* @param msg - error message
	* @returns two-character error identifier
	*
	* @example
	* var v = ns.msg2id( 'invalid option. `%s` option must be an array. Option: `%s`.' );
	* // returns '8t'
	*/
	msg2id: typeof msg2id;

	/**
	* Returns an error code identifier prefix associated with a specified package name.
	*
	* @param pkg - package name
	* @returns identifier prefix
	*
	* @example
	* var v = ns.pkg2id( '@stdlib/math/base/special/sin' );
	* // returns '0H5'
	*/
	pkg2id: typeof pkg2id;
}

/**
* Error tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import database = require( './../../../tools/database' );
import formatProdErrorMessage = require( './../../../tools/fmtprodmsg' );
import id2pkg = require( './../../../tools/id2pkg' );
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
	* @param ...args - error message arguments
	* @returns formatted error message
	*
	* @example
	* var msg = ns.formatProdErrorMessage( '3', 'wrong_type' );
	* // returns <string>
	*
	* @example
	* var opts = {
	*     'url': 'https://stdlib.io/error-decoder.html'
	* };
	*
	* var fcn = ns.formatProdErrorMessage.factory( opts );
	* // returns <Function>
	*/
	formatProdErrorMessage: typeof formatProdErrorMessage;

	/**
	* Returns a package name associated with a specified error code identifier prefix.
	*
	* @param id - identifier prefix
	* @returns package name
	*
	* @example
	* var v = ns.id2pkg( '0H5' );
	* // returns '@stdlib/math/base/special/sin'
	*/
	id2pkg: typeof id2pkg;

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

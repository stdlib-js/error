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

import formatProdErrorMessage = require( './../../../tools/fmtprodmsg' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Formats an error message for production.
	*
	* @param code - error code
	* @param ...args - error message arguments
	* @returns formatted error message
	*
	* @example
	* var msg = formatProdErrorMessage( '3', 'wrong_type' );
	* // returns <string>
	*
	* @example
	* var opts = {
	*     'url': 'https://stdlib.io/error-decoder.html'
	* };
	*
	* var fcn = formatProdErrorMessage.factory( opts );
	* // returns <Function>
	*/
	formatProdErrorMessage: typeof formatProdErrorMessage;
}

/**
* Error tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

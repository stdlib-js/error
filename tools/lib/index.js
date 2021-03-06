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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name database
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/error/tools/database}
*/
setReadOnly( ns, 'database', require( './../../tools/database' ) );

/**
* @name fmtprodmsg
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/error/tools/fmtprodmsg}
*/
setReadOnly( ns, 'fmtprodmsg', require( './../../tools/fmtprodmsg' ) );

/**
* @name fmtprodmsgFactory
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/error/tools/fmtprodmsg-factory}
*/
setReadOnly( ns, 'fmtprodmsgFactory', require( './../../tools/fmtprodmsg-factory' ) );

/**
* @name id2msg
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/error/tools/id2msg}
*/
setReadOnly( ns, 'id2msg', require( './../../tools/id2msg' ) );

/**
* @name id2pkg
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/error/tools/id2pkg}
*/
setReadOnly( ns, 'id2pkg', require( './../../tools/id2pkg' ) );

/**
* @name msg2id
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/error/tools/msg2id}
*/
setReadOnly( ns, 'msg2id', require( './../../tools/msg2id' ) );

/**
* @name pkg2id
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/error/tools/pkg2id}
*/
setReadOnly( ns, 'pkg2id', require( './../../tools/pkg2id' ) );


// EXPORTS //

module.exports = ns;

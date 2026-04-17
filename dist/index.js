/** @license Apache-2.0 */

'use strict';

/**
* The minimum biased base 2 exponent for a subnormal single-precision floating-point number.
*
* @module @stdlib/constants-float32-min-base2-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT32_MIN_BASE2_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float32-min-base2-exponent-subnormal' );
* // returns -149
*/


// MAIN //

/**
* The minimum biased base 2 exponent for a subnormal single-precision floating-point number.
*
* ```text
* -(BIAS+(23-1)) = -(127+22) = -149
* ```
*
* where `BIAS = 127` and `23` is the number of digits in the significand.
*
* @constant
* @type {integer32}
* @default -149
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT32_MIN_BASE2_EXPONENT_SUBNORMAL = -149|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT32_MIN_BASE2_EXPONENT_SUBNORMAL;

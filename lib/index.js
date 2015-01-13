var re = require('regex-oib');
var map = require('array-map');
var reduce = require('array-reduce');

/**
 * @param  {String} oib
 *
 * @return {Boolean}
 */
module.exports = function ( oib ) {

	if ( !re().test(oib) ) {
		return false;
	}

	var arr = map(re().exec(oib)[1].split(''), function ( val ) {
		return parseInt(val, 10);
	});
	var control = arr.pop();
	var val = reduce(arr, function ( prev, next ) {
		prev = prev + next;
		prev = prev % 10;
		if (prev === 0) {
			prev = 10;
		}
		prev *= 2;
		prev = prev % 11;
		return prev;
	}, 10);

	var checksum = 11 - val;

	if ( checksum === 10 ) {
		checksum = 0;
	}

	return checksum === control;

};

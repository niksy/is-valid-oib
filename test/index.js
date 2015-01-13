/* jshint mocha:true */

var assert = require('assert');
var valid = require('../');

it('should validate input', function () {
	assert.ok(valid('40565203589'));
	assert.ok(valid('75801633608'));
	assert.ok(valid('63962176928'));
	assert.ok(valid('95328459927'));
	assert.ok(valid('03479600537'));
	assert.ok(!valid('29704949120'));
	assert.ok(!valid('54124760534'));
	assert.ok(!valid('48839790048'));
	assert.ok(!valid('81127413969'));
	assert.ok(!valid('81127413961'));
});

var equal = require('assert').equal;

exports.tests = {
	'true should be equal to true': function(finished, prefix) {
		equal(true, true, prefix + " that's weird, true should really be equal to true.");
		setTimeout(function() {
			finished();
		}, 2000);
	}
};
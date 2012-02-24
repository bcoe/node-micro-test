var equal = require('assert').equal;

exports.tests = {
	'true should be equal to true': function(finished, prefix) {
		setTimeout(function() {
			equal(true, true, prefix + " that's weird, true should really be equal to true.");
			finished();
		}, 2000);
	}
};
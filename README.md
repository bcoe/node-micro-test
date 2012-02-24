Node Micro Test
===============

MicroTest is an asynchronous testing framework built for Node.js. It's under 40 lines of code, and has no dependencies.

Usage
-----

Create a folder called __test/__ in the root of your project directory.

Within this folder create .js testing files that look like this:

```javascript
var equal = require('assert').equal;

exports.tests = {
	'true should be equal to true': function(finished, prefix) {
		equal(true, true, prefix + " that's weird, true should really be equal to true.");
		setTimeout(function() {
			finished();
		}, 2000);
	}
};
```

* __finished__ call this within your test, to indicate that all asynchronous actions have completed.
* __prefix__ contextual information about the test that you can print out with your assertions.

CLI
---

Just run the command _micro-test_ from the root directory of your Node.js project.

* npm install micro-test
* micro-test

Copyright
---------

Copyright (c) 2012 Attachments.me. See LICENSE.txt for further details.
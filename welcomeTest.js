var r = require('./welcome.js').w;
var assert = require('assert');
var test = {};
exports.test = test;

test.welcome_responds_with_hello_text_for_text = function(){
	assert.equal('hello text', r.welcome('hmm'));
	assert.equal('hello text', r.welcome('Here I am'));
	assert.equal('hello text', r.welcome('42'));
	assert.equal('hello text', r.welcome(''));
};
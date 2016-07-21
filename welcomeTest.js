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

test.welcome_responds_with_hey_count_for_numbers = function(){
	assert.equal('hey count', r.welcome(2));
	assert.equal('hey count', r.welcome(420));
	assert.equal('hey count', r.welcome(0));
	assert.equal('hey count', r.welcome(-25));
};

test.welcome_responds_with_hey_decimal_for_decimal_numbers = function(){
	assert.equal('hey decimal', r.welcome(2.1));
	assert.equal('hey decimal', r.welcome(420.45));
	assert.equal('hey decimal', r.welcome(0.1));
	assert.equal('hey decimal', r.welcome(-25.01));
};

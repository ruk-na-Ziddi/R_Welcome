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

test.welcome_responds_with_hey_dont_count_for_bad_calculation = function(){
	assert.equal('hey dont count',r.welcome(0/'a'));
	assert.equal('hey dont count',r.welcome('a' * 0));
};

test.welcome_responds_with_get_out_for_infinite_answers = function(){
	var x = 0;
	assert.equal('get out of the world',r.welcome(1/0));
	assert.equal('get out of the world',r.welcome(12*42/x));
};

test.welcome_responds_with_oh_no_for_null = function(){
	assert.equal('oh no',r.welcome(null));
};

test.welcome_responds_with_who_is_it_for_undefined = function(){
	var x;
	assert.equal('who is it',r.welcome(x));
};

test.welcome_responds_with_hi_fields_for_objects = function(){
	assert.equal('hi', r.welcome({}));
	assert.equal('hi one,two', r.welcome({one:1,two:2}));
	assert.equal('hi compute,three', r.welcome({compute:function(){return 5},three:3}));
};

test.welcome_responds_with_call_that_for_functions = function(){
	var x = function(){console.log('hmm');};
	var y = function(z){return function(){z();}};
	assert.equal('call that', r.welcome(function(){}));
	assert.equal('call that', r.welcome(x));
	assert.equal('call that', r.welcome(Math.max));
	assert.equal('call that', r.welcome(y));
};

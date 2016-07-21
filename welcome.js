var w = {}
exports.w = w;

var decider = {};

var ruleEngine = {};

ruleEngine['[object String]'] = function(){
	return 'hello text';
}

ruleEngine['[object Number]'] = function(){
	return 'hey count';
}

w.welcome = function(param){
	return ruleEngine[toString.call(param)]();
}


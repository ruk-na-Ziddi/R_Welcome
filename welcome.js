var w = {}
exports.w = w;

var decider = {};

var isDesimal = function(number){
	return Math.ceil(number) != number;
}

var ruleEngine = {};

ruleEngine['[object String]'] = function(){
	return 'hello text';
}

ruleEngine['[object Number]'] = function(number){
	if (isNaN(number)) {
		return 'hey dont count'
	}
	if (isDesimal(number)) {
		return 'hey decimal'
	}
	return 'hey count';
}

w.welcome = function(param){
	return ruleEngine[toString.call(param)](param);
}


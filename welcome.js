var w = {}
exports.w = w;

var decider = {};

var isDesimal = function(param){
	return (typeof(param) == 'number') && Math.ceil(param) != param;
}

var ruleEngine = {};

ruleEngine['[object String]'] = function(){
	return 'hello text';
}

ruleEngine['[object Number]'] = function(){
	return 'hey count';
}

w.welcome = function(param){
	if(isDesimal(param))
		return 'hey decimal';
	return ruleEngine[toString.call(param)]();
}


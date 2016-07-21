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
	if (isNaN(number))
		return 'hey dont count'
	if (isDesimal(number))
		return 'hey decimal'
	if(number == Infinity)
		return 'get out of the world'

	return 'hey count';
}

ruleEngine['[object Null]'] = function(){
	return 'oh no';
}

ruleEngine['[object Undefined]'] = function(){
	return 'who is it';
}

ruleEngine['[object Object]'] = function(obj){
	return ('hi' + " " + Object.keys(obj).join(",")).trim();
}

ruleEngine['[object Function]'] = function(){
	return 'call that';
}

ruleEngine['[object Array]'] = function(list){
	return ("seeya" + " " + list.join("_")).trim();
}

ruleEngine['[object Boolean]'] = function(){
	return 'to be or not to be';
}

var repeat = function(text, times){
	return --times ? text + "-" + repeat(text, times) : text;
}

w.welcome = function(param, times){
	return (times) ? repeat(param, times) : ruleEngine[toString.call(param)](param);
}

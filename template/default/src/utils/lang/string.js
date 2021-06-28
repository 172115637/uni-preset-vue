String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}
String.prototype.simpleTime = function(){
	return this.substring(0, 10)
}
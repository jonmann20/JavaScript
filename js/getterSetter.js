Object.defineProperty(newObj, prop, {
	get: function () {
		return oldObj[prop];
	},
	set: function(arg){
		oldObj[prop] = arg;
	},
	configurable: true
});


// deprecated
newObj.__defineGetter__(prop, function () {
	return oldObj[prop];
});

newObj.__defineSetter__(prop, function (arg) {
	oldObj[prop] = arg;
});

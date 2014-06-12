function extend(childInstance, parentInstance){
	var name;
	for (name in parentInstance){
	    if(!(name in childInstance)){
	        childInstance[name] = parentInstance[name];
	    }
	}
}

// SportsCar extends Car
function SportsCar(car){
	if(typeof(car) === "undefined" || car.getName !== "Car"){
		car = new Car();
	}
	
	extend(this, car);
	this.init(car);
}

SportsCar.prototype = (function(){
	var legalGuardian;

	return {
		getName: "SportsCar",
		hasSpoiler: false,
		

		init: function(car){
			legalGuardian = car;
		},

		// override
		determinePrice: function(){
			console.log("legal: " + legalGuardian.determinePrice());
			return 25;
		}
	};
})();
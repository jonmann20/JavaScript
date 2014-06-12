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
	
	this.super = car;
	extend(this, car);
}

SportsCar.prototype = (function(){
	var legalGuardian;

	return {
		getName: "SportsCar",
		hasSpoiler: false,
		

		// override
		determinePrice: function(){
			console.log("legal: " + this.super.determinePrice());
			return 25;
		}
	};
})();
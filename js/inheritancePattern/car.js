function Car(color){
	this.color = color || "#fff";
}

Car.prototype = (function(){
	var isMoving = false;

	return {
		getName: "Car",
		color: "",


		changeColor: function(color){
			this.color = color;
		},

		determinePrice: function(){
			return 10;
		}
	};
})();

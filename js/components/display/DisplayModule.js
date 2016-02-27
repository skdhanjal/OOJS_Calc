

MainApp.calc.components.display.DisplayModule = (function(){

	var dataSource = MainApp.calc.data;

	function DisplayModule(mediator){
		this.mediator = mediator;
		this.displayCtrl = new MainApp.calc.components.display.DisplayController(this.mediator);
		this.mediator.subscribe('updateDisplay', this.updateDisplay.bind(this));
	}

	DisplayModule.prototype.getDisplay = function(){
		return this.displayCtrl.getDisplayView(dataSource.getDisplayData());
	}

	DisplayModule.prototype.updateDisplay = function(updatedValue){
		this.displayCtrl.updateDisplay(updatedValue);
	}

	return DisplayModule;
})();
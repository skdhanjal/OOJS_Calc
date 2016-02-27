'use strict';


MainApp.calc.components.display.DisplayController = function(mediator){
    this.mediator = mediator;
}

MainApp.calc.components.display.DisplayController.prototype.setMediator = function (mediator) {
	this.mediator = mediator;
}

MainApp.calc.components.display.DisplayController.prototype.getDisplayView = function (displayData) {

	this.displayView = new MainApp.calc.components.display.DisplayView(this.createDisplay(displayData));
    return this.displayView;
}

MainApp.calc.components.display.DisplayController.prototype.createDisplay = function createDisplay(displayData){
	return new MainApp.calc.components.display.Display(displayData.height, displayData.width);
}

MainApp.calc.components.display.DisplayController.prototype.updateDisplay = function (updatedValue){
	this.displayView.el.querySelector('.screen').innerHTML = updatedValue;
	this.mediator.publish('displayUpdated', updatedValue);
}

MainApp.calc.components.display.DisplayController.prototype.getCurrentDisplayValue = function (){

	return this.displayView.el.querySelector('.screen').innerHTML;
	
}







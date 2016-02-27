'use strict';


MainApp.calc.components.button.ButtonController = function(mediator){
    this.mediator = mediator;
}

MainApp.calc.components.button.ButtonController.prototype.getButtonsView = function (buttonsData) {
	return new MainApp.calc.components.button.ButtonView(this.createButtons(buttonsData));
}

MainApp.calc.components.button.ButtonController.prototype.createButtons = function createButtons(buttonsData){
	var self = this,
		//buttonsData = self.dataSource.getButtonsData(),
		items = [];

	for(var i = 0, len = buttonsData.length; i < len; i++){
		var currentButton = buttonsData[i];
		items.push(new MainApp.calc.components.button.Button(currentButton.height, currentButton.width, currentButton.value));
	}

	return items;
}

MainApp.calc.components.button.ButtonController.prototype.handleButtonClick = function(btn){
	this.mediator.publish('btnPressed', btn.currentTarget.innerHTML);
}

MainApp.calc.components.button.ButtonController.prototype.addButtonEvents = function(buttonView){
	var btnEls = buttonView.buttonElements;

	for(var i = 0; i < btnEls.length; i++) {
		btnEls[i].onclick = this.handleButtonClick.bind(this);
	}


}







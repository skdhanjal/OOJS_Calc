
'use strict';

MainApp.calc.components.button.ButtonView = function ButtonView(buttons){
	this.buttons = buttons;
	this.baseTag = 'div';
	this.buttonElements = [];
	this.el = this.getButtonsViewEl();
}

MainApp.calc.components.button.ButtonView.prototype = Object.create(MainApp.calc.components.dom.BasicView.prototype);
MainApp.calc.components.button.ButtonView.prototype.constructor = MainApp.calc.components.button.ButtonView;

MainApp.calc.components.button.ButtonView.prototype.getButtonsViewEl = function (){
	var self = this,
		buttons = self.buttons,
		buttonViewContainer = self.buildElement(self.baseTag, ['buttons'], null, null),
		buttonEl = {};

	for(var i = 0, len = buttons.length; i < len; i++){
		var currentButton = buttons[i];
		buttonEl = self.buildElement('span', [], currentButton.text, null, {height: currentButton.height+'px', width:currentButton.width+'px'});
		self.addChild(buttonViewContainer, buttonEl);
		this.buttonElements.push(buttonEl);
	}
	this.el = buttonViewContainer;
	return buttonViewContainer;
}









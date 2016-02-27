
'use strict';


MainApp.calc.components.display.DisplayView = function DisplayView(display){
	this.display = display;
	this.baseTag = 'div';
	this.el = this.getDisplayViewEl();
}

MainApp.calc.components.display.DisplayView.prototype = Object.create(MainApp.calc.components.dom.BasicView.prototype);
MainApp.calc.components.display.DisplayView.prototype.constructor = MainApp.calc.components.display.DisplayView;

MainApp.calc.components.display.DisplayView.prototype.getDisplayViewEl = function(){
	var self = this,
		html = '',
		displayContainer = self.buildElement(self.baseTag, ['display'], '', null, {height: this.display.height+'px', width:this.display.width+'px'}),
		screenEl = {};

	screenEl = self.buildElement('span', ['screen'], '');
	self.addChild(displayContainer, screenEl);
	self.el = displayContainer;
	return displayContainer;
}













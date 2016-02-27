
'use strict';


MainApp.calc.components.calculator.CalculatorView = function CalculatorView(calculator){
	this.calculator = calculator;
	this.el = this.getCalculatorViewEl();
}

MainApp.calc.components.calculator.CalculatorView.prototype = Object.create(MainApp.calc.components.dom.BasicView.prototype);
MainApp.calc.components.calculator.CalculatorView.prototype.constructor = MainApp.calc.components.displayCalculatorView;

MainApp.calc.components.calculator.CalculatorView.prototype.getCalculatorViewEl = function(){
	return this.buildElement('div', ['calc'], null, {id : this.calculator.id},{height : this.calculator.height+'px', width:this.calculator.width+'px'});
}

MainApp.calc.components.calculator.CalculatorView.prototype.addChildViews = function(childViewArray){
	
	for(var i = 0, len = childViewArray.length; i< len ; i++){
		this.el.appendChild(childViewArray[i].el);
	}
}









'use strict';

MainApp.calc.initCalc = function(parentId){
	var calculatorModule = new MainApp.calc.components.calculator.CalculatorModule();	
	calculatorModule.showCaculator(parentId);
}

// initialise the calc app into the given view
MainApp.calc.initCalc('calculatorView');

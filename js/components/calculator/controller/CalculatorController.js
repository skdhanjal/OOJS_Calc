'use strict';


MainApp.calc.components.calculator.CalculatorController = function(mediator){
    this.mediator = mediator;
}

MainApp.calc.components.calculator.CalculatorController.prototype.addChildren = function (calculatorView, components) {
    calculatorView.addChildViews(components);
}

MainApp.calc.components.calculator.CalculatorController.prototype.getCalculatorView = function (calculator) {
	this.calculatorView = new MainApp.calc.components.calculator.CalculatorView(calculator);
    return this.calculatorView;
}

MainApp.calc.components.calculator.CalculatorController.prototype.updateDisplayValue = function(updatedValue){
	this.currentDisplayValue = updatedValue;
	this.mediator.publish('updateDisplay', updatedValue);
}

MainApp.calc.components.calculator.CalculatorController.prototype.handleResetButton = function(){
	this.updateDisplayValue('');
}

MainApp.calc.components.calculator.CalculatorController.prototype.handleEqualButton = function(inputVal, operators){
	var equation = inputVal,
		lastChar = equation[equation.length - 1];
		// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
	// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
	if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
		equation = equation.replace(/.$/, '');
	}
	if(equation){
		this.updateDisplayValue(eval(equation));
	}
}

MainApp.calc.components.calculator.CalculatorController.prototype.handleDecimalButton = function(btnVal, valueToShow, decimalAdded){
	if(!decimalAdded) {
		valueToShow += btnVal;
		this.updateDisplayValue(valueToShow);
		return true;
	}
}

MainApp.calc.components.calculator.CalculatorController.prototype.handleOperationButton = function(inputVal, valueToShow, btnVal, operators){
	var lastChar = inputVal[inputVal.length - 1];
		// Only add operator if input is not empty and there is no operator at the last
		if(inputVal != '' && operators.indexOf(lastChar) == -1) 
			valueToShow += btnVal;
		// Allow minus if the string is empty
		else if(inputVal == '' && btnVal == '-') 
			valueToShow += btnVal;

		this.updateDisplayValue(valueToShow);
		// Replace the last operator (if exists) with the newly pressed operator
		if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
			// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
			valueToShow = inputVal.replace(/.$/, btnVal);
		}
		this.updateDisplayValue(valueToShow);
}

MainApp.calc.components.calculator.CalculatorController.prototype.handleKeyButton = function(valueToShow, btnVal){
	valueToShow += btnVal;
	this.updateDisplayValue(valueToShow);
}

MainApp.calc.components.calculator.CalculatorController.prototype.calculate = function (btnVal){

	var operators = ['+', '-','÷','x'],
		decimalAdded = false,
		inputVal = this.currentDisplayValue || '',
		valueToShow = inputVal;

	switch(btnVal){
		case 'C':
			this.handleResetButton();
			break;
		case '=':
			this.handleEqualButton(inputVal, operators);
			decimalAdded = false;
			break;
		case '.':
			decimalAdded = this.handleDecimalButton(btnVal, valueToShow, decimalAdded);
			break;
		case '+':
		case '-':
		case 'x':
		case '÷':
			this.handleOperationButton(inputVal, valueToShow, btnVal, operators);
			decimalAdded = false;
			break;
		default:
			this.handleKeyButton(valueToShow, btnVal);
			break;		
	}    
}







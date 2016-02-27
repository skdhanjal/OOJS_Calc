

MainApp.calc.components.calculator.CalculatorModule = (function(){


	function CalculatorModule(){
		this.mediator = new MainApp.calc.Mediator();
		this.calculatorCtrl = new MainApp.calc.components.calculator.CalculatorController(this.mediator);
	}	

	CalculatorModule.prototype.getCalculator = function(height, width, id){
		var calculator = new MainApp.calc.components.calculator.Calculator(height, width, id);
		this.calculatorView = this.calculatorCtrl.getCalculatorView(calculator);
		return this.calculatorView;
	}	

	CalculatorModule.prototype.addComponents = function(components){
		this.calculatorCtrl.addChildren(this.calculatorView, components);
		return this.calculatorView;
	}

	CalculatorModule.prototype.getCalculatorView = function(){
		return this.calculatorView;
	}

	CalculatorModule.prototype.showCaculator = function(parentId){
		var parent = document.querySelector('#'+parentId);
		if(parent){
			parent.appendChild(this.calculatorView.el);
		}
	}

	CalculatorModule.prototype.createCalculator = function(parentId){
		var displayModule = new MainApp.calc.components.display.DisplayModule(this.mediator),
			buttonModule = new MainApp.calc.components.button.ButtonModule(this.mediator),
			calculatorId = 'calc' + Math.floor((Math.random()*10 + 1)),
			displayView = displayModule.getDisplay(),
			buttonsView = buttonModule.getButtons();

		this.getCalculator(300, 335, calculatorId);
		this.addComponents([displayView, buttonsView]);
		this.showCaculator(parentId);
		this.mediator.subscribe('btnPressed', this.calculatorCtrl.calculate.bind(this.calculatorCtrl));
	}

	return CalculatorModule;

})();
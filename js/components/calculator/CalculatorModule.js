

MainApp.calc.components.calculator.CalculatorModule = (function(){


	function CalculatorModule(){
		this.mediator = new MainApp.calc.Mediator();
		this.calculatorCtrl = new MainApp.calc.components.calculator.CalculatorController(this.mediator);
		this.displayModule = new MainApp.calc.components.display.DisplayModule(this.mediator);
		this.buttonModule = new MainApp.calc.components.button.ButtonModule(this.mediator);
	}	

	CalculatorModule.prototype.createCalculatorObject = function(height, width, items){
		var calculator = new MainApp.calc.components.calculator.Calculator(height, width);
		this.calculatorView = this.calculatorCtrl.getCalculatorView(calculator);
		this.addComponents(items);
	}	

	CalculatorModule.prototype.addComponents = function(components){
		this.calculatorCtrl.addChildren(this.calculatorView, components);
		return this.calculatorView;
	}

	CalculatorModule.prototype.getCalculatorView = function(){
		return this.calculatorView;
	}

	CalculatorModule.prototype.showCaculator = function(parentId, config){
		var parent = document.querySelector('#'+parentId);
		if(parent){
			this.createCalculator(config);
			parent.appendChild(this.calculatorView.el);
		}
	}

	CalculatorModule.prototype.getItems = function(){
		return [
			this.displayModule.getDisplay(),
			this.buttonModule.getButtons()
		];
	}

	CalculatorModule.prototype.createCalculator = function(config){
		var config = config || null,
			height = config ? (config.height ? config.height: 300) : 300,
			width = config ? (config.width ? config.width: 335) : 335

		this.createCalculatorObject(height, width, this.getItems());
		this.mediator.subscribe('btnPressed', this.calculatorCtrl.calculate.bind(this.calculatorCtrl));
	}

	return CalculatorModule;

})();
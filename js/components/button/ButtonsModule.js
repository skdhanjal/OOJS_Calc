

MainApp.calc.components.button.ButtonModule = (function(){

	var dataSource = MainApp.calc.data;

	function ButtonModule(mediator){
		this.mediator = mediator;
		this.buttonCtrl = new MainApp.calc.components.button.ButtonController(this.mediator);
	}	

	ButtonModule.prototype.getButtons = function(){
		var buttonView = this.buttonCtrl.getButtonsView(dataSource.getButtonsData());
		this.addButtonEvents(buttonView);
		return buttonView;
	}

	ButtonModule.prototype.handleButtonClick = function(btn){
		this.buttonCtrl.handleButtonClick(btn);
	}

	ButtonModule.prototype.addButtonEvents = function(buttonView){
		this.buttonCtrl.addButtonEvents(buttonView);
	}

	return ButtonModule;
})();
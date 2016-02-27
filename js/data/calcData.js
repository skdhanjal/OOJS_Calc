

MainApp.calc.data = {};

MainApp.calc.data.getDisplayData = function(){

	var displayData = {
			type:'screen',
			height: 50,
			width : 300,
			color : 'grey'
	};
	return displayData;
}

MainApp.calc.data.getButtonsData = function(){

	var requiredButtons = [
		
		{
			value: '7',
			type:'key', 
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '8', 
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '9',
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '+', 
			type:'operation', 
			section:'operations',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '4', 
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '5', 
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '6', 
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '-', 
			type:'operation',
			section:'operations',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '1',
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '2', 
			type:'key', 
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '3', 
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '÷', 
			type:'operation',
			section:'operations',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '0',
		 	type:'key', 
		 	section:'buttons',
		 	height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '.',
			type:'key',
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: '=', 
			type:'result', 
			section:'buttons',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: 'x', 
			type:'operation', 
			section:'operations',
			height : 36,
			width : 66,
			color : 'white'
		},
		{
			value: 'C', 
			type:'clear',
			section:'display',
			height : 36,
			width : 66,
			color : 'white'
		}
	 ];

	 return requiredButtons;
}  



'use strict';

MainApp.calc.components.dom = {};

MainApp.calc.components.dom.BasicView = function(){
    //
}

MainApp.calc.components.dom.BasicView.prototype.buildElement = function (elementTagName, classList, innerHTML, attributes,styles) {
    var element = document.createElement(elementTagName);
    
    if (attributes) {
        for (var attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }
    if (styles) {
        for (var style in styles) {
            element.style[style] = styles[style];
        }
    }
    if(classList){
        for (var j = 0, classListLen = classList.length; j < classListLen; j++) {
            element.classList.add(classList[j]);
        }
    }
    if(innerHTML)
        element.innerHTML = innerHTML;

    return element;
}

MainApp.calc.components.dom.BasicView.prototype.addChild = function(parent, child) {
    if (parent) {
        parent.appendChild(child);
    }
}

MainApp.calc.components.dom.BasicView.prototype.addClass = function(element, className) {
    element.classList.add(className);
}

MainApp.calc.components.dom.BasicView.prototype.removeClass = function(element, className) {
    element.classList.remove(className);
}

MainApp.calc.components.dom.BasicView.prototype.hasClass = function(element, className) {
    return element.classList.contains(className);
}






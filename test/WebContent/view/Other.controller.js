sap.ui.controller("bsc.example.view.Other", {

/////////////////////////////////////////////////////
// Controller Lifecycle

  onInit: function() { },

//  onBeforeRendering: function() {},
//  onAfterRendering: function() {},
//  onExit: function() {},

  
/////////////////////////////////////////////////////
// User Interaction
  
  onNavBtnPressed : function() {
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	oRouter.navTo("one");
  } 

});
sap.ui.controller("bsc.example.view.One", {

  onBtnPressed : function() {
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	oRouter.navTo("other");
  }

});
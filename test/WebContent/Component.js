sap.ui.core.UIComponent.extend("bsc.example.Component", {

  metadata : {
    name : "Component Example",
    includes : [ "resources/css/styles.css" ], // TODO: add an external stylesheet here
    dependencies : {
      // define ui5 lib dependencies here
      libs : [ "sap.m" ],
      components : [  ],
      ui5version: "1.22.11"
    },

    // Define your apps root view, you can use JS or JSON Views by changing viewType
    // TODO: Add bsc.example.view.Root.view.xml as your root view
    rootView : { 
        viewName: "bsc.example.view.Root",
        type: "XML"
    },


    // Find config params here: https://sapui5.netweaver.ondemand.com/sdk/#docs/api/symbols/sap.ui.core.routing.Route.html
    routing : {
      config : {
        viewPath : "bsc.example.view",
        viewType : "XML",
        controlId: "App",
        controlAggregation : "pages",
      },

      routes : [
        {
          pattern : "other",
          name : "other",
          view : "Other",
          viewLevel: 2
        },
        {
          // all routes need to be prefixed with the apps base route (as defined in app-config.json)
          // ":all*:" defines a catchall route, first pattern applies, therefore home view should be last in this array
          pattern : [ "", "one", ":all*:" ],
          name : "one",
          view : "One",
          viewLevel: 1
        }
      ]
    }
  },



  init: function() {
	  // Do global initialization stuff here
	
	  // apply super constructor
	  sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
	  
	  // load mobile route handler and initialize router
	  jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	  var router = this.getRouter();
	  this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	  router.initialize();
  },

  exit : function() {
	  // Remember to de-register all Component.js event listeners resp. EventBus subscriptions here
  }

});
=======
      ui5version: "1.22.8"
    },

    // Define your apps root view, you can use JS or JSON Views by changing viewType
    // TODO: Add bsc.example.view.Root.view.xml as your root view
    rootView : { 
        viewName: "bsc.example.view.Root",
        type: "XML"
    },


    // Find config params here: https://sapui5.netweaver.ondemand.com/sdk/#docs/api/symbols/sap.ui.core.routing.Route.html
    routing : {
      config : {
        viewPath : "bsc.example.view",
        viewType : "XML",
        controlId: "App",
        controlAggregation : "pages",
      },

      routes : [
        {
          pattern : "other",
          name : "other",
          view : "Other",
          viewLevel: 2
        },
        {
          // all routes need to be prefixed with the apps base route (as defined in app-config.json)
          // ":all*:" defines a catchall route, first pattern applies, therefore home view should be last in this array
          pattern : [ "", "one", ":all*:" ],
          name : "one",
          view : "One",
          viewLevel: 1
        }
      ]
    }
  },



  init: function() {
	  // Do global initialization stuff here
	
	  // apply super constructor
	  sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
	  
	  // load mobile route handler and initialize router
	  jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	  var router = this.getRouter();
	  this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	  router.initialize();
  },

  exit : function() {
	  // Remember to de-register all Component.js event listeners resp. EventBus subscriptions here
  }

});
>>>>>>> branch 'master' of https://github.com/bsc-antolovic/test.git
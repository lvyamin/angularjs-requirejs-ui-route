var jsDebug = true;
var versionCode="1.1.0"

var baseUrl = jsDebug ? 'modules' : 'js/release/'+versionCode;

var config = {
	baseUrl:baseUrl,
	paths:{
		angular:"../lib/angular/angular.min",
		app:"app",
		router:"../lib/angular/angular-ui-router",
		jquery:"../lib/jquery/jquery.min"
	},
	shim:{
		"router":{
			deps:['angular']
		},
		"angular":{
			exports:'angular'
		}

	}
	
}

require.config(config)
define([

	"angular",
	"router",
	"utils/resolveControll",
	],function(angular,router,getResolve){
	var app = angular.module("myApp",["ui.router"]);
	app.run(["$rootScope",function($rootScope){
		$rootScope.title="angularjs test"
	}])
	app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){		
		app.register = {
			//得到$controllerProvider的引用
			controller : $controllerProvider.register,
			//同样的，这里也可以保存directive／filter／service的引用
			directive: $compileProvider.directive,
			filter: $filterProvider.register,
			service: $provide.service,
			factory: $provide.factory
		};
	})
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.when("/","/menu/index").otherwise("/menu/index")

		$stateProvider.state("home",{
			url:"/",
			views:{
				header:{
					templateUrl:"templates/lib/header.html",
					controller:"headerCtrl",
					resolve:{
						loadCtrl: ["$q",function($q) {
					        var deferred = $q.defer();
					        //异步加载controller／directive/filter/service
					        require([
					            'controller/lib/headerCtrl'
					        ], function() { deferred.resolve(); });
					        return deferred.promise;
					    }]
					}
				},
				content:{
					templateUrl:"templates/lib/content.html"
				},
				footer:{
					templateUrl:"templates/lib/footer.html",
					controller:"footerCtrl",
					resolve:{
						loadCtrl: ["$q",function($q) {
					        var deferred = $q.defer();
					        //异步加载controller／directive/filter/service
					        require([
					            'controller/lib/footerCtrl'
					        ], function() { deferred.resolve(); });
					        return deferred.promise;
					    }]
					}
				}
				
			}
		}).state("home.menu",{
			url:"menu",
			views:{
				menu:{
					templateUrl:"templates/lib/menu.html",
					controller:"menuCtrl",
					resolve:{
						loadCtrl: ["$q",function($q) {
					        var deferred = $q.defer();
					        //异步加载controller／directive/filter/service
					        require([
					            'controller/lib/menuCtrl'
					        ], function() { deferred.resolve(); });
					        return deferred.promise;
					    }]
					}
				}
			}
		}).state("home.menu.index",{
			url:"/index",
			views:{
				"content@home":{
					templateUrl:"templates/page/index.html",
					controller:"indexCtrl",
					resolve:{
						loadCtrl: ["$q",function($q) {
					        var deferred = $q.defer();
					        //异步加载controller／directive/filter/service
					        require([
					            'controller/page/indexCtrl'
					        ], function() { deferred.resolve(); });
					        return deferred.promise;
					    }]
					}
				}
			}
		}).state("home.menu.inject",{
			url:"/inject",
			views:{
				"content@home":{
					templateUrl:"templates/page/inject.html",
					controller:"injectCtrl",
					resolve:{
						loadCtrl: ["$q",function($q) {
					        var deferred = $q.defer();
					        //异步加载controller／directive/filter/service
					        require([
					            'controller/page/injectCtrl'
					        ], function() { deferred.resolve(); });
					        return deferred.promise;
					    }]
					}
				}
			}
		}).state("home.menu.service",{
			url:"/service",
			views:{
				"content@home":{
					templateUrl:"templates/page/service.html",
					controller:"serviceCtrl",
					resolve:{
						loadCtrl: ["$q",function($q) {
					        var deferred = $q.defer();
					        //异步加载controller／directive/filter/service
					        require([
					            'controller/page/serviceCtrl'
					        ], function() { deferred.resolve(); });
					        return deferred.promise;
					    }]
					}
				}
			}
		}).state("home.menu.directive",{
			url:"/directive",
			views:{
				"content@home":{
					templateUrl:"templates/page/directive.html",
					controller:"directiveCtrl",
					resolve:{
						loadCtrl: ["$q",function($q) {
					        var deferred = $q.defer();
					        //异步加载controller／directive/filter/service
					        require([
					            'controller/page/directiveCtrl'
					        ], function() { deferred.resolve(); });
					        return deferred.promise;
					    }]
					}
				}
			}
		})

	})
	
	return app;
})
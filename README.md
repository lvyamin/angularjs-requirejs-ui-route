## 一套通过Requirejs整合Angularjs+Ui-route的解决方案

整合了angularjs和requirejs，解决了组件之间相互依赖，以及按需加载的问题，大大提高了运行效率，以及工作效率

* 目录介绍
  
    ```
    -i18n //国际化
    -js //压缩JS目录
    -less //less
    -modules //angularjs 代码
    -templates  //模板
    
    ```

* 入口文件

module/main.js

```
	require(["jquery","app"],function(){
		angular.bootstrap(document,['myApp']);
	})
	
```

* angularjs入口文件
module/app.js

```
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

```

* 压缩配置文件

build.js

```

({
  baseUrl:"modules",
  paths: {
    angular:"../lib/angular/angular.min",
    app:"app",
    router:"../lib/angular/angular-ui-router",
    jquery:"../lib/jquery/jquery.min"
  },
  shim: {
    "router":{
      deps:['angular']
    },
    "angular":{
      exports:'angular'
    }
   //...
  },
  optimize: "uglify2",
  uglify2: {
  mangle: false //false 不混淆变量名
  },
  findNestedDependencies: true,
  name: "main",
  out: "js/release/1.1.0/main.js"
})


```

* 浏览器端requirejs配置文件

lib/config/rjs.js

```
var jsDebug = false; //开启关闭debug模式
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

```

* 打包 

```

执行 r.js -o build.js

```


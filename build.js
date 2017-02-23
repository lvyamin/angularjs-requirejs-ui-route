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


define(['app','service/getMenu'],function(app){
	app.register.controller('menuCtrl', ['$scope','getMenu',function($scope,getMenu){
		$scope.menu=getMenu()
		
	}])


})
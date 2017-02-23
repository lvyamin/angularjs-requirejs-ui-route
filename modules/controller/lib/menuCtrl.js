define(['app'],function(app){
	app.register.controller('menuCtrl', ['$scope', function($scope){
		$scope.menu=[
			{
				title:"首页",
				href:"home.menu.index"
			},
			{
				title:"依赖注入",
				href:"home.menu.inject"
			},
			{
				title:"服务",
				href:"home.menu.service"
			},
			{
				title:"指令",
				href:"home.menu.directive"
			}
		]
		
	}])


})
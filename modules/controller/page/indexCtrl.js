define(['app'],function(app){
	app.register.controller('indexCtrl', ['$scope', function($scope){
		$scope.discribe={
			title:"Angularjs 实验室",
			content:"这个是一个angularjs实验室，在学习过程中放入此实验室"
		}
	}])
})
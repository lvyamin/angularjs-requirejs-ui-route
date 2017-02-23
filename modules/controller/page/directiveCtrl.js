define(['app','directive/sliderLi'],function(app){
	app.register.controller('directiveCtrl', ['$scope', function($scope){
		$scope.title="指令",
		$scope.slider=[
			{title:"标题1",body:"内容一"},
			{title:"标题2",body:"内容二"},
			{title:"标题3",body:"内容三"}
		]
	}])

})
define(['app','service/getScopeRoot'],function(app){

	app.register.controller('injectCtrl', [
		'$scope',
		'getscp',
		function($scope,getscp){
			$scope.title="依赖注入"
			$scope.getRtitle=function(){
				alert(getscp.title)
				$scope.rootTitle=getscp.getTitle()
			}
		
	}])

})
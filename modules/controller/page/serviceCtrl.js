define(['app','service/githubService'],function(app){

	app.register.controller('serviceCtrl', ['$scope','githubService',function($scope,githubService){
		$scope.title="服务";

		var promiseGithub=githubService.getList('healen','events');
		$scope.loading= true;
		promiseGithub.success(function(data){
			$scope.loading=false
			$scope.githubData = data.data
		})
		
	}])

})
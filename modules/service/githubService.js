define(['app','service/api'],function(app){

	app.register.factory('githubService', ['$http','api', function($http,api){

		// console.log(api.githubApi)

		function getGithub(username,path){
			var githubPromise = $http({
				method:"JSONP",
				url:api.githubApi+"/users/"+username+"/"+path+"?callback=JSON_CALLBACK"
			})
			return githubPromise;
		}

		


		return {
			getList:getGithub
		}
		// return function name(){
			
		// };
	}])

})
define(['app'],function(app){

	app.register.factory('getscp', ['$rootScope', function($rootScope){
		return {
			title:$rootScope.title,
			getTitle:function(){
				return $rootScope.title
			}
		}
	}])
})
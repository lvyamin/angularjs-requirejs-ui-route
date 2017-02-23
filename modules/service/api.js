define(['app'],function(app){
	app.register.service('api', [function(){
		this.githubApi='https://api.github.com';
	}])
})
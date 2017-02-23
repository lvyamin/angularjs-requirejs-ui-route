define(['app'],function(app){
	app.register.factory('getMenu',[function(){
		var getMenu = function(){
			return [
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
				},
				{
					title:"XHR",
					href:"home.menu.xhr"
				}
			]
		}
		return getMenu;
	}])
})
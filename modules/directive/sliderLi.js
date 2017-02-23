define(['app'],function(app){
	app.register.directive("sliderLi",[function(){
		return {
			restrict:"EAC",
			transclude:true,
			scope:{
				title:"=sliderTitle",
				isshow:"=sliderShowBody",
			},
			templateUrl:"templates/directive/sliderLi.html",
			link:function($scope, iElm, iAttrs, controller){
				// console.log(iElm.find("div"))

				iElm.find(".title").on("click",function(){
					angular.element(".sliderbox .body").addClass("ng-hide")
					iElm.find(".body").removeClass("ng-hide")
				})
			}
		}
	}])

	// app.register.directive('sliderLi', ['', function(){
	// 	// Runs during compile
	// 	return {
	// 		// name: '',
	// 		// priority: 1,
	// 		// terminal: true,
	// 		// scope: {}, // {} = isolate, true = child, false/undefined = no change
	// 		// controller: function($scope, $element, $attrs, $transclude) {},
	// 		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
	// 		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
	// 		// template: '',
	// 		// templateUrl: '',
	// 		// replace: true,
	// 		// transclude: true,
	// 		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	// 		link: function($scope, iElm, iAttrs, controller) {
				
	// 		}
	// 	};
	// }]);
})

define([],function(){
	var setCtrl = function(dir){
		var todo = ["$q",function($q) {
	        var deferred = $q.defer();
	        //异步加载controller／directive/filter/service
	        require([
	            dir
	        ], function() { deferred.resolve(); });
	        return deferred.promise;
	    }]
	    return todo
	}
	return {
		setCtrl:setCtrl
	}

})
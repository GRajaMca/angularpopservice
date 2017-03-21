angular.module('imgui', [ 'angularPopService' ]).controller('mainCtrl',
		MainCtrl);

MainCtrl.$inject = [ '$scope', '$rootScope', 'popService' ];

function MainCtrl($scope, $rootScope, popService) {

	$scope.alert = function() {

		popService.showModal("Alert",
				"This is simple Alert message", "", "",
				"sample/popup/alert.html").then(function(data) {
		});
	};

	$scope.Warning = function() {
		popService.showModal("Warning",
				"Are you Sure do you want to Process ??", "", "",
				"sample/popup/warning.html").then(function(data) {
			if (angular.isDefined(data.action)) {
				var temp = "Not Process";
				if (angular.equals(data.action, true)) {
					var temp = "Process";
				}
				$scope.warningMessage = "You Said to " + temp;
			}
			console.log(data);
		});
	};

	$scope.Complex = function() {
		popService.showModal("Complex", "", "", "", "sample/popup/complex.html")
			.then(function(data) {
				if (angular.isDefined(data.action) && angular.equals(data.action,true)) {
					var userInput = data.data;
					$scope.ComplexObj = "You Have Entered "+ ",UserName ->"+ userInput.username+ " ,Password ->"+ userInput.password;
					}
				});
	};

	$scope.postData = function(data) {
		popService.showModal("Posting the Data", "Your Name is ", data, "",
				"sample/popup/postData.html").then(function(data) {

		});
	};
	
	$scope.passData = function(data) {
		popService.showModal("Posting the Data", "Your Name is ", data, "",
				"sample/popup/postData.html").then(function(data) {

		});
	};

}
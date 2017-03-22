# angularPopService
Angular PopService is providing custom Bootstrap Modal Service in Angular -- supports creating popups and modals via a service. See [a quick fiddle](http://jsfiddle.net/dwmkerr/8MVLJ/) or a full set of samples at [https://github.com/GRajaMca/angularPopService/](https://github.com/GRajaMca/angularPopService/).

1. [Usage](#usage)
2. [Developing](#developing)
3. [Thanks](#thanks)

## Usage

Install with Bower (or NPM):

```bash
bower install angular-popUp-service
# or...
npm install angular-popUp-service
```

Then reference the minified script:

```html
<script src="bower_components/angularPopService/dist/angularPopService.min.js"></script>
```

Specify the angularPopService as a dependency of your application:

```js
angular.module('imgui', [ 'angularPopService' ]).controller('mainCtrl',
		MainCtrl);

MainCtrl.$inject = [ '$scope', '$rootScope', 'popService' ];
```

Now just inject the angularPopService into any controller, service or directive where you need it.

```js
function MainCtrl($scope, $rootScope, popService) {

  //$scope.alert function is used provide simple bootstrap alert
 	$scope.alert = function() {
    //popService is the service provider of angularPopService
    //popService.showModal("Title","content","optional","optional","templateUrl")
		popService.showModal("Alert",
				"This is simple Alert message", "", "",
				"sample/popup/alert.html").then(function(data) {
		});
	};
  

};
```

angularPopService is Customized Bootstrap Modal,it works everything as JSON and templateUrl what you are going to provide

Now This sample is used to provide warning message to the end user and get the response from user,if the user said yes it will go to next step else break the process

```htm
//Template Url
<div class="modal fade">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
        <p>{{warning}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="close()">OK</button>
      </div>
    </div>
  </div>
</div>

```

```js
	//$scope.warning function is used to provide warning message
	$scope.Warning = function() {
		//popService.showModal("title","message","optional","optional","templateUrl");
		//for templateUrl checkout our sample and use the same format of close the window and buttons
		popService.showModal("Warning",
				"Are you Sure do you want to Process ??", "", "",
				"sample/popup/warning.html").then(function(data) {
				//data is the response from angularPopService
			if (angular.isDefined(data.action)) {
				var temp = "Not Process";
				//if the response is true then it will move further else break
				if (angular.equals(data.action, true)) {
					var temp = "Process";
				}
				$scope.warningMessage = "You Said to " + temp;
			}
			console.log(data);
		});
	};
	
```





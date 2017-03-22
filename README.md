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

Specify the modal service as a dependency of your application:

```js
var app = angular.module('sampleapp', ['angularPopService']);
```

Now just inject the modal service into any controller, service or directive where you need it.

```js
app.controller('SampleController', ["$scope", "popService", function($scope, popService) {

  //$scope.alert function is used provide simple bootstrap alert
 	$scope.alert = function() {
    //popService is the service provider of angularPopService
    //popService.showModal("Title","content","optional","optional","templateUrl")
		popService.showModal("Alert",
				"This is simple Alert message", "", "",
				"sample/popup/alert.html").then(function(data) {
		});
	};
  

}]);
```

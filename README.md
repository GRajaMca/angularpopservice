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
<script src="bower_components/angular-modal-service/dst/angular-modal-service.min.js"></script>
```

Specify the modal service as a dependency of your application:

```js
var app = angular.module('sampleapp', ['angularModalService']);
```

Now just inject the modal service into any controller, service or directive where you need it.

```js
app.controller('SampleController', ["$scope", "ModalService", function($scope, ModalService) {

  $scope.showAModal = function() {

  	// Just provide a template url, a controller and call 'showModal'.
    ModalService.showModal({
      templateUrl: "yesno/yesno.html",
      controller: "YesNoController"
    }).then(function(modal) {
      // The modal object has the element built, if this is a bootstrap modal
      // you can call 'modal' to show it, if it's a custom modal just show or hide
      // it as you need to.
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.message = result ? "You said Yes" : "You said No";
      });
    });

  };

}]);
```

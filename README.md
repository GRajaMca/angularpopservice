# angularPopService
Angular PopService is providing custom Bootstrap Modal Service in Angular -- supports creating popups and modals via a service. See [a quick fiddle](http://jsfiddle.net/dwmkerr/8MVLJ/) or a full set of samples at [https://github.com/GRajaMca/angularPopService/](https://github.com/GRajaMca/angularPopService/).

1. [Usage](#usage)
2. [Developing](#developing)
3. [Note](#note)
4. [Thanks](#thanks)
5. [Contact] (#contact)

## Usage

Install with Bower (or NPM):

```bash
bower install angularPopService
# or...
npm install angularPopService
```

Then reference the minified script:

```html
<script src="bower_components/angularPopService/dist/angularPopService.min.js"></script>
```

## Developing
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
<!--Template Url-->
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
	});
};
	
```
Sample for Complex Modal, Get the input from angularPopService

```html
<!--Template samle -->
<div class="modal fade">
	<div class="modal-dialog modal-md">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" ng-click="close()"
					data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">{{title}}</h4>
			</div>
			<div class="modal-body">
				<div class="form-group">
					<!--get all the input object start with data.yourObjectName --> 
					<label class="control-label"> User Name</label>
					<input type="text" class="form-control" ng-model="data.username" placeholder="UserName">
					<label class="control-label">Password</label>
					<input type="password" class="form-control" ng-model="data.password" placeholder="Password">
				</div>

			</div>
			<div class="modal-footer">
				<button type="button" ng-click="close(false)"
					class="btn btn-default" data-dismiss="modal">No</button>
				<button type="button" ng-click="close(true)" class="btn btn-primary"
					data-dismiss="modal">Yes</button>
			</div>
		</div>
	</div>
</div>

```


```js

$scope.Complex = function() {
	//popService.showModal("title","optional","optional","optional","templateUrl")
	popService.showModal("Complex", "", "", "", "sample/popup/complex.html")
		.then(function(data) {
			//data is the response from angularPopService
			if (angular.isDefined(data.action) && angular.equals(data.action,true)) {
			//data.data is value which you have given in Modal view
			var userInput = data.data;
			$scope.ComplexObj = "You Have Entered "+ ",UserName ->"+ userInput.username+ " ,Password ->"+userInput.password;
			}
		});
};

```

Sample for Posting the data from Controller to Modal View

```html
<!--Template url for Posting the data -->
<div class="modal fade">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
      	<!--All your data passing from Controller you will receieve on object body in the modal view -->
        <p>{{warning}} {{body.name}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="close()">OK</button>
      </div>
    </div>
  </div>
</div>

```

```js
//sample for posting data from controller to Modal View

$scope.postData = function(data) {
	//popService.showModal("Title","message","Object or data passing the Modal","optional","templateUrl")
	popService.showModal("Posting the Data", "Your Name is ", data, "",
		"sample/popup/postData.html").then(function(data) {
			//data is the response from angularPopService
		});
	};
```  

## Note

Try to use the angularPopService in sample how we provided,if you are passing the data or Object to the Modal view use 3rd parameter of popService.showModal function,and you will get the data into the body object in Modal View

If you are collecting input from Modal View bind the object to data and collect you will be receive the data in controller in the object of data.data,

Check out the above sample for your use..


## Thanks

The special Thanks to angular modal service,this is inspired from angular modal service 

## Contact 

Reach me on (https://www.linkedin.com/in/graja-mca-15445286/)

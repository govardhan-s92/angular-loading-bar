var app = angular.module('LoadingBarExample', ['angular-loading-bar'])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }]);
  app.controller('ExampleCtrl',function($scope,$http,$document){
  	$http.get('demo.txt').success(function(response){
  	$scope.text=response;
  	})
  })

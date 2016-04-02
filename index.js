(function(angular){

   var sampleApp = angular.module('sampleApp', []);
   sampleApp.controller('sampleController',['$scope', function($scope){
   	   $scope.testMsg = 'This is a angular seed application!!';
   }]);

})(angular)
(function(angular){

   var sampleApp = angular.module('sampleApp', []);
   sampleApp.controller('sampleController',['$scope', function($scope){
   	   $scope.testMsg = 'This is the angular seed application!!';
   }]);

})(angular);
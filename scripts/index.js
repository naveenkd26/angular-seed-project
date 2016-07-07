(function(angular){

   var sampleApp = angular.module('sampleApp', []);
   sampleApp.controller('sampleController',['$scope', function($scope){
   	   $scope.message = ' .This is the angular seed application!!';
   	   //$scope.testMsg = JSON.stringify({a:1,b:2,c:{d:3, e:4}},null,"    ");
   	   $scope.testMsg = angular.toJson({a:1,b:2,c:{d:3, e:4}}, true);
   }]);

})(angular);
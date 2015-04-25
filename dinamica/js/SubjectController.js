var app = angular.module("siApp", []);

app.controller("SubjectController", ['$scope', function ($scope) {
    
    $scope.desired = [];
    $scope.known = [];
    
    $scope.desiredName = "";
    $scope.knownName = "";
    
    $scope.addDesired = function (name) {
        $scope.desired.push(name);
    };
    
    $scope.addKnown = function (name) {
        $scope.known.push(name);
    };
    
    $scope.removeDesired = function (index) {
        $scope.desired.splice(index, 1);
    };
    
    $scope.removeKnown = function (index) {
        $scope.known.splice(index, 1);
    };
    
    $scope.moveDesired = function (index) {
        $desiredName = $scope.desired[index];
        $scope.removeDesired(index);
        $scope.addKnown($desiredName);
    };
    
    $scope.moveKnown = function (index) {
        $knownName = $scope.known[index];
        $scope.removeKnown(index);
        $scope.addDesired($knownName);
    };
}]);
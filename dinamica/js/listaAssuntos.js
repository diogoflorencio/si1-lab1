var app = angular.module("siApp", []);

app.controller("SubjectController", ['$scope', function ($scope) {

    $scope.assunto = [];
    $scope.assuntoConhecido = [];

    $scope.nomeAssunto = "";
    $scope.nomeConhecido = "";

    $scope.addAssunto = function (name) {
        $scope.assunto.push(name);
    };

    $scope.addAssuntoConhecido = function (name) {
        $scope.assuntoConhecido.push(name);
    };

    $scope.removeAssunto = function (index) {
        $scope.assunto.splice(index, 1);
    };

    $scope.removeAssuntoConhecido = function (index) {
        $scope.assuntoConhecido.splice(index, 1);
    };

    $scope.moveAssunto = function (index) {
        $nomeAssunto = $scope.assunto[index];
        $scope.removeAssunto(index);
        $scope.addAssuntoConhecido($nomeAssunto);
    };

    $scope.moveAssuntoConhecido = function (index) {
        $nomeConhecido = $scope.assuntoConhecido[index];
        $scope.removeAssuntoConhecido(index);
        $scope.addAssunto($nomeConhecido);
    };
}]);
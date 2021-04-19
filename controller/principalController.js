/* Controlador da Página Inicial */
app.controller('PrincipalController', function($scope, $route, $routeParams, $location) {
  $scope.titulo = 'Principal';
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})
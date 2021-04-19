/* Configuração das Rotas */
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'view/principal.html',
      controller: 'PrincipalController'
    })

    .when('/curso', {
      templateUrl : 'view/cursos/curso.html',
      controller: 'CursoController'
    })
    .when('/curso/:acao/:id', {
      templateUrl : 'view/cursos/editar_curso.html',
      controller: 'CursoController'
    })

    .when('/usuario', {
      templateUrl : 'view/usuarios/usuario.html',
      controller: 'UsuarioController'
    })
    .when('/usuario/:acao/:id', {
      templateUrl : 'view/usuarios/editar_usuario.html',
      controller: 'UsuarioController'
    })

    .when('/cursando/:idCurso', {
      templateUrl : 'view/cursando/cursando.html',
      controller: 'CursandoController'
    })
    .when('/cursando/:acao/:idCurso/:idUsuario', {
      templateUrl : 'view/cursando/editar_cursando.html',
      controller: 'CursandoController'
    });
}]);
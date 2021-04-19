/* Controlador da Página Inicial */
app.controller('DesafioController', function($scope, $route, $routeParams, $location) {

  $scope.listaUsuarios = [
    new modeloUsuario(1, 'Roger Murtaugh', 1994321256, 'rua Madre Maria Inês 54', new Date('2019-03-10')),
    new modeloUsuario(2, 'Ethan Hunt', 11955521256, 'rua Paulista 30002', new Date('2019-06-10')),
    new modeloUsuario(3, 'John McClane', 48994321256, 'rodovia Gov. Mário Covas 43322', new Date('2019-07-10')),
    new modeloUsuario(4, 'Kevin Lomax', 11984314566, 'rua Maurício Jackey 432', new Date('2019-08-10')),
    new modeloUsuario(5, 'John Wick', 48954225444, 'rodovia Baldicero Filomeno 3221', new Date('2019-11-08')),
    new modeloUsuario(6, 'Sherlok Holmes', 48954325444, 'rua Baker Street 221B', new Date('2019-11-10')),
    new modeloUsuario(7, 'Mark Kendal', 11984321256, 'rua Jacques Alberto 543', new Date('2020-01-10')),
    new modeloUsuario(8, 'Marla Singer', 11981433256, 'rua Almir da Silva 234', new Date('2020-02-13')),
    new modeloUsuario(9, 'Kevin Lomax', 48954325432, 'rua Alameda dos Anjos 21', new Date('2020-05-10')),
    new modeloUsuario(10, 'Roni Paschoal', 11981863256, 'rua Almeida Garret 31', new Date('2020-11-30'))
  ];

  $scope.listaCursos = [
    new modeloCurso(1, 'Introdução à Vendas', 'Aqui o funcionário terá a oportunidade de iniciar sua caminhada no setor de vendas.', 80, 50.00),
    new modeloCurso(2, 'Aprimorando de técnicas de Vendas', 'Aqui o funcionário terá a oportunidade de aprimorar sua abilidade de persuasão.', 140, 150.00),
    new modeloCurso(3, 'Vendas Avançada', 'Aqui o funcionário terá a oportunidade de seguir o curso mais atual do setor.', 280, 1050.00),
    new modeloCurso(4, 'Comunição Interpessoal', 'Aqui o funcionário terá a oportunidade de aprimorar seus relacinamentos com pelossoas desconhecidas.', 140, 150.00),
    new modeloCurso(5, 'Vendas do A a Z', 'Aqui o funcionário terá a oportunidade de reciclar seu conhecimento em vendas.', 200),
    new modeloCurso(6, 'Gestão de Vendas', 'Aqui o funcionário terá a oportunidade de aprimorar sua abilidade de motivar e gernciar pequenas equipes.', 140, 350.00)
  ]

  $scope.listaCadastrados = [
    new modeloCadastrado($scope.listaUsuarios[0], $scope.listaCursos[1]),
    new modeloCadastrado($scope.listaUsuarios[3], $scope.listaCursos[2]),
    new modeloCadastrado($scope.listaUsuarios[5], $scope.listaCursos[4]),
    new modeloCadastrado($scope.listaUsuarios[4], $scope.listaCursos[5]),
    new modeloCadastrado($scope.listaUsuarios[2], $scope.listaCursos[3]),
    new modeloCadastrado($scope.listaUsuarios[5], $scope.listaCursos[5]),
    new modeloCadastrado($scope.listaUsuarios[6], $scope.listaCursos[5]),
    new modeloCadastrado($scope.listaUsuarios[0], $scope.listaCursos[0]),
    new modeloCadastrado($scope.listaUsuarios[5], $scope.listaCursos[1]),
    new modeloCadastrado($scope.listaUsuarios[1], $scope.listaCursos[3]),
    new modeloCadastrado($scope.listaUsuarios[4], $scope.listaCursos[2]),
    new modeloCadastrado($scope.listaUsuarios[9], $scope.listaCursos[5]),
    new modeloCadastrado($scope.listaUsuarios[0], $scope.listaCursos[3]),
    new modeloCadastrado($scope.listaUsuarios[9], $scope.listaCursos[0]),
    new modeloCadastrado($scope.listaUsuarios[9], $scope.listaCursos[1])
  ]

  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})
/* Controladores dos Usuários */
app.controller('UsuarioController', ['$location', '$scope', '$routeParams', function($location, $scope, $routeParams) {
  
  $scope.name = 'UsuarioController';
  $scope.params = $routeParams;
  $scope.usuario = null;
  
  if($scope.params.id > 0) {
    $scope.listaUsuarios.forEach(function(usuario) {
      if (usuario.id == $scope.params.id) { $scope.usuario = usuario; }
    });
  } else if ($scope.listaUsuarios.length > 0) {
    novoId = parseInt($scope.listaUsuarios[$scope.listaUsuarios.length - 1].id) + 1;
    $scope.usuario = new modeloUsuario(novoId, '', '', '', new Date());
  }

  switch($scope.params.acao) {
    case 'adicionar':
      $scope.titulo = 'Adicionar Usuário';
      $scope.acao = 'Adicionado';
      break;
      
    case 'alterar':
      $scope.titulo = 'Editar Usuário';
      $scope.acao = 'Editado';
      break;
      
    case 'remover':
      $scope.titulo = 'Remover Usuário';
      if(usuario.id > 0) {
        $scope.listaUsuarios.forEach(function(usuario, index) {
          if (usuario.id == $scope.params.id) { $scope.listaUsuarios.splice(index, 1); }
        });
      }
      $location.url('/usuario');
      alert('Usuário ' + $scope.usuario.nome + ' com sucesso!');
      break;
      
    default:
      $scope.titulo = 'Listar Usuário';
  }

  $scope.salvar = function(acao) {
    if($scope.usuario.nome != "" && $scope.usuario.telefone != "" && $scope.usuario.endereco != "" && $scope.usuario.dataCadastro != "") {
      if(acao == 'Editado') {

        $scope.listaUsuarios.forEach(function(usuario, index) {
          if (usuario.id == $scope.params.id) { $scope.listaUsuarios.splice(index, 1, $scope.usuario); }
        });

      } else if(acao == 'Adicionado') {
        $scope.listaUsuarios.push($scope.usuario);
      }
      
      alert(acao + ' com sucesso!');
      $location.url('/usuario');
    } else {
      alert('Todos os campos são obrigatórios!');
    }
  }
}])
/* Controlador dos Cursos */
app.controller('CursoController', ['$location', '$scope', '$routeParams', '$http', function($location, $scope, $routeParams, $http) {

  $scope.name = 'CursoController';
  $scope.params = $routeParams;
  $scope.curso = null;

  if($scope.params.id > 0) {
    $scope.listaCursos.forEach(function(curso) {
      if (curso.id == $scope.params.id) { $scope.curso = curso; }
    });
  } else if ($scope.listaCursos.length > 0) {
    novoId = parseInt($scope.listaCursos[$scope.listaCursos.length - 1].id) + 1;
    $scope.curso = new modeloCurso(novoId, '', '', '');
  }

  switch($scope.params.acao) {
    case 'adicionar':
      $scope.titulo = 'Adicionar Curso';
      $scope.acao = 'Adicionado';
      break;

    case 'alterar':
      $scope.titulo = 'Editar Curso';
      $scope.acao = 'Editado';
      break;

    case 'remover':
      $scope.titulo = 'Remover Cursos';
      if(curso.id > 0) {
        $scope.listaCursos.forEach(function(curso, index) {
          if (curso.id == $scope.params.id) { $scope.listaCursos.splice(index, 1); }
        });
      }
      alert('Curso ' + $scope.curso.titulo + ' com sucesso!');
      $location.url('/curso');
      break;

    case 'servidor':
      $http({
        method: 'GET',
        url: 'http://fiversystem.com/desafio/web_service/cursos.php'
      }).then(function successCallback(response) {
          var nomesCursos = null;
          response.data.forEach(function(curso) {
            $scope.listaCursos.push(new modeloCurso(curso.crs_id_curso, curso.crs_titulo, curso.crs_descricao, curso.crs_carga_horaria, curso.crs_valor));
            if(nomesCursos) {
              nomesCursos = curso.crs_titulo + ", ";
            }
            nomesCursos += curso.crs_titulo;
          });
          alert('Os cursos ' + nomesCursos + ' foram carregados com sucesso!');
          
      }, function errorCallback(response) {
        console.log(response);
      });

      $location.url('/curso');
      break;

    default:
      $scope.titulo = 'Listar Cursos';
  }

  $scope.salvar = function(acao) {

    if($scope.curso.titulo != "" && $scope.curso.descricao != "" && $scope.curso.cargaHoraria != "") {

      if(acao == 'Editado') {
  
        $scope.listaCursos.forEach(function(curso, index) {
          if (curso.id == $scope.params.id) { $scope.listaCursos.splice(index, 1, $scope.curso); }
        });
    
        } else if(acao == 'Adicionado') {
          $scope.listaCursos.push($scope.curso);
        }
        
        alert(acao + ' com sucesso!');
        $location.url('/curso');

    } else {
      alert('Os campos Título, Descrição e Carga Horária são obrigatórios!');
    }
  }
}])
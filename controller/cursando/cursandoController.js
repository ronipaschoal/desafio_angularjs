/* Controlador da relação entre os usuários(alunos) com os cursos */
app.controller('CursandoController', ['$location', '$scope', '$routeParams', function($location, $scope, $routeParams) {
  
  $scope.name = 'CursandoController';
  $scope.params = $routeParams;

  $scope.usuariosCadastrados = new Array();
  $scope.usuariosNaoCadastrados = new Array();

  if($scope.params.idCurso > 0) {
    $scope.listaCursos.forEach(function(curso) {
      if (curso.id == $scope.params.idCurso) { $scope.curso = curso; }
    });
    $scope.listaCadastrados.forEach(function(listaCadastrado) {
      if (listaCadastrado.curso.id == $scope.curso.id) { $scope.usuariosCadastrados.push(listaCadastrado.usuario); }
    });
  }

  switch($scope.params.acao) {

    case 'adicionar':
        $scope.titulo = 'Adicionar Usuário no Curso ' + $scope.curso.titulo;

        $scope.listaUsuarios.forEach(function(usuario) {
          var naoEsta = true;
          $scope.listaCadastrados.forEach(function(listaCadastrado) {
            
            if (listaCadastrado.usuario.id == usuario.id 
              && listaCadastrado.curso.id == $scope.params.idCurso) { 
              naoEsta = false;
            }
          });
          if(naoEsta) { $scope.usuariosNaoCadastrados.push(usuario); }
        });

        $scope.salvar = function() {

          if ($scope.usuario) {
            
            $scope.listaUsuarios.forEach(function(usuario) {
              if (usuario.id == $scope.usuario.id) { $scope.usuario = usuario; }
            });

            var vinculo = new modeloCadastrado( $scope.usuario, $scope.curso);
            $scope.listaCadastrados.push(vinculo);

            alert('Usuário ' + $scope.usuario.nome + ' adicionado no curso ' + $scope.curso.titulo + ' com sucesso!');
            $location.url('/cursando/' + $scope.curso.id);
          } else {
            alert('O campo usuário é obrigatório!');
          }
        }
      break;

    case 'remover':
        $scope.titulo = 'Remover Vinculo ' + $scope.curso.titulo;

        $scope.listaCadastrados.forEach(function(listaCadastrado, index) {
          if ((listaCadastrado.curso.id == $scope.curso.id)
            && (listaCadastrado.usuario.id == $scope.params.idUsuario)) { 
              $scope.listaCadastrados.splice(index, 1);
            }
        });

        alert('Usuário removido do curso ' + $scope.curso.titulo + ' com sucesso!');
        $location.url('/cursando/' + $scope.curso.id);
      break;
      
    default:
        $scope.titulo = 'Usuários Cursando ' + $scope.curso.titulo;
  }

  $scope.exportar = function() {

    var dataCriacao = new Date();
    $("#cursando").tableHTMLExport({
      // csv, txt, json, pdf
      type:'pdf',
      // file name
      filename: 'usuarios_cursando_' + retira_acentos($scope.curso.titulo.toLowerCase()) + '_' + dataCriacao.getFullYear() + '_' + (dataCriacao.getMonth() + 1) + '_' + dataCriacao.getDate(),
      ignoreColumns:'.ignore',
      ignoreRows:'.ignore'

    });    
  }

  function retira_acentos(str) {
    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ ";
    sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr_";
    novastr="";
    for(i=0; i<str.length; i++) {
        troca=false;
        for (a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
  }       
}])
(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Epistemología de la Psicología",codigo:"403002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Cibercultura",codigo:"403037",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Historia de la Psicología",codigo:"403001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Procesos Cognoscitivos",codigo:"403003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"2",curso:"Pensamiento Lógico Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"2",curso:"Curso Electivo Bases Psicobiológicas del Comportamiento",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"13",pre1:"0"},
{ periodo:"2",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Curso Electivo Componente Social Solidario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"2",curso:"Prestación del Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Curso Electivo Procesos Psicológicos Básicos",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"15",pre1:"0"},
{ periodo:"3",curso:"Psicología Evolutiva",codigo:"403012",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Estadística",codigo:"202107095",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"3",curso:"Psicofisiología",codigo:"403005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"3",curso:"Personalidad",codigo:"403004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Psicopatología y Contextos",codigo:"403015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"16",pre1:"0"},
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},

{ periodo:"4",curso:"Aprendizaje",codigo:"403006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"4",curso:"Observación y Entrevista",codigo:"403011",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"4",curso:"Psicometría",codigo:"403016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"4",curso:"Neuropsicología",codigo:"403025",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"4",curso:"Investigación Ciencias Sociales",codigo:"400001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Curso Electivo Problemas Fundamentales de la Psicología Individual",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"16",pre1:"0"},
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},

{ periodo:"5",curso:"Diagnósticos Psicológicos",codigo:"403024",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"5",curso:"Curso Electivo Problemas Fundamentales de la Psicología Social",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Psicología de los Grupos",codigo:"403020",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"5",curso:"Ecología Humana",codigo:"403017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Paradigmas de Investigación en Psicología",codigo:"403023",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Psicología Social",codigo:"403019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Inglés B1+",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},

{ periodo:"6",curso:"Modelos de Intervención en Psicología",codigo:"403021",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"6",curso:"Curso Electivo Problemas Fundamentales de la Psicología Social",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Psicología Comunitaria",codigo:"403022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"6",curso:"Antropología Psicológica",codigo:"403018",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Diseño de Proyectos Sociales",codigo:"400002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso Electivo Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso Electivo Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"7",curso:"Acción Psicosocial y Educación",codigo:"403026",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"7",curso:"Acción Psicosocial y Familia",codigo:"403027",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"7",curso:"Acción Psicosocial y en la Comunidad",codigo:"403028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"7",curso:"Curso Electivo Disciplinar Común",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Curso Electivo Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Acción Psicosocial y Trabajo",codigo:"403031",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"8",curso:"Acción Psicosocial en el Contexto Júridico",codigo:"403030",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"8",curso:"Psicología Política",codigo:"403033",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"9",curso:"Acción Psicosocial y Salud",codigo:"403032",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"9",curso:"Práctica Profesional Escenario 1",codigo:"403035",creditos:"4",tipo:"Práctica",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"9",curso:"Políticas Públicas y Desarrollo Humano",codigo:"403029",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"10",curso:"Práctica Profesional Escenario 2",codigo:"403036",creditos:"4",tipo:"Práctica",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"10",curso:"Seminario de Investigación Psicología",codigo:"403034",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},

];

$scope.curriculum = agruparPorPeriodo($scope.mt2);

      // Función para reorganizar las materias por periodo
    function agruparPorPeriodo(materias) {
      const curriculum = {};
      materias.forEach(materia => {
        if (!curriculum[materia.periodo]) {
          curriculum[materia.periodo] = [];
        }
        curriculum[materia.periodo].push(materia);
      });
      return curriculum;
    }

    // Función para calcular el total de créditos y las sumatorias de créditos Os y electivos
      $scope.calcularTotales = function () {
      $scope.totalCreditos = 0;
      $scope.sumaCreditosObligatorios = 0;
      $scope.sumaCreditosElectivos = 0;

      for (const periodo in $scope.curriculum) {
        const materias = $scope.curriculum[periodo];
        for (const curso of materias) {
          $scope.totalCreditos += parseInt(curso.creditos, 10);
          if (curso.clasificacion === "Obligatorio") {
            $scope.sumaCreditosObligatorios += parseInt(curso.creditos, 10);	
          } else if (curso.clasificacion === "Electiva") {
            $scope.sumaCreditosElectivos += parseInt(curso.creditos, 10);			
          }
        }
      }
    };
   
    $scope.calcularTotales(); // Calcular los totales al inicio

    $scope.calcularCreditosPorNivel = function (nivel) {
      let creditosTotales = 0;
      for (const periodo in $scope.curriculum) {
        if (nivel === 'todos' || periodo === nivel) {
          const materias = $scope.curriculum[periodo];
          for (const curso of materias) {
            creditosTotales += parseInt(curso.creditos, 10);
          }
        }
      }
      return creditosTotales;
    };
	
	
//oculta lateral	
 $scope.verinfo=false;

  $scope.openPopup = function (curso) {
 // Establecer el fondo en blanco para todos los cursos
  for (const periodo in $scope.curriculum) {
    const materias = $scope.curriculum[periodo];
    for (const materia of materias) {
      materia.preColor = 'white';
	  materia.preColor1 = 'white';	  
    }
  }

  // Verificar si la variable pre del curso tiene un valor diferente de '0'
  if (curso.pre !== '0') {
    // Establecer el color correspondiente según el valor de pre
    let color;
    switch (curso.pre) {
    case '11': color = '5px solid #FF0000'; break;  // Rojo intenso
    case '12': color = '5px solid #00FF00'; break;  // Verde brillante
    case '13': color = '5px solid #0000FF'; break;  // Azul neón
    case '14': color = '5px solid #FFFF00'; break;  // Amarillo fuerte
    case '15': color = '5px solid #FF00FF'; break;  // Fucsia vibrante
    case '16': color = '5px solid #00FFFF'; break;  // Cian eléctrico
    case '17': color = '5px solid #FF6600'; break;  // Naranja fuerte
    case '18': color = '5px solid #9933FF'; break;  // Morado brillante
    case '19': color = '5px solid #39FF14'; break;  // Verde neón
      default:color = 'display:none'; }

    // Aplicar el color a todos los cursos que tengan el mismo valor en pre
    for (const periodo in $scope.curriculum) {
      const materias = $scope.curriculum[periodo];
      for (const materia of materias) {
        if (materia.pre === curso.pre) {
          materia.preColor = color;
        }
      }
    }
  }

  // Verificar si la variable pre1 del curso tiene un valor diferente de '0'
  if (curso.pre1 !== '0') {
    // Establecer el color correspondiente según el valor de pre1
    let color1;
    switch (curso.pre1) {
    case '131': color1 = '5px solid #FF1493'; break; // Rosa fuerte
    case '141': color1 = '5px solid #FFD700'; break; // Dorado brillante
    case '151': color1 = '5px solid #1E90FF'; break; // Azul eléctrico
    case '161': color1 = '5px solid #8A2BE2'; break; // Azul violeta intenso
    case '171': color1 = '5px solid #DC143C'; break; // Rojo carmesí
    default: color = 'display:none';
    }

    // Aplicar el color a todos los cursos que tengan el mismo valor en pre1
    for (const periodo in $scope.curriculum) {
      const materias = $scope.curriculum[periodo];
      for (const materia of materias) {
        if (materia.pre1 === curso.pre1) {
          materia.preColor1 = color1;
        }
      }
    }
  }
    
  // Establecer el curso seleccionado
  $scope.selectedCurso = curso;
  $scope.verinfo=true;
  
  
};
	
//estilo malla	  
  
$scope.getStyle = function(curso) {
    var clasificacionFinal = curso.clasificacion1 || curso.clasificacion;

    var styles = {
        'border-left': clasificacionFinal === 'Obligatorio' ? '6px solid #282828' :
                       clasificacionFinal === 'Electiva' ? '6px solid #4AA5FF' :
                       clasificacionFinal === 'Componente Práctico' ? '6px solid #45C045' : ''
    };

    if (clasificacionFinal === 'Electiva') {
        styles['background-color'] = '#DDEEFF'; // Fondo para cursos Electiva
    } else if (clasificacionFinal === 'Componente Práctico') {
        styles['background-color'] = '#C8FACC'; 
    }

    if (curso === $scope.selectedCurso) {
        styles['background-color'] = '#282828'; // Fondo negro
        styles['color'] = '#fff'; // Letras blancas
    }

    return styles;
};
 
 //estilo prerrequisitos popup
   $scope.getStyle1 = function(curso) {
        if (curso === $scope.selectedCurso) {return { 'color': '#0074E8', 'font-weight': 'bold' };}
        return { 'color': '#535362' };
    }; 

$scope.getPreRequisitos = function(tipo) {
    if (!$scope.selectedCurso || !$scope.selectedCurso[tipo]) {
        return []; // Retorna un array vacío si `selectedCurso` o `selectedCurso[tipo]` es `undefined`
    }

    return $scope.mt2
        .filter(function(curso) {
            return curso[tipo] && curso[tipo] === $scope.selectedCurso[tipo]; // Verifica que curso[tipo] existe antes de comparar
        })
        .sort(function(a, b) {
            return (a.periodo || 0) - (b.periodo || 0); // Asegura que `periodo` no sea undefined
        });
};

$scope.isPreRequisito = function(curso) {return curso.pre === $scope.selectedCurso.pre;};
$scope.isPreRequisito1 = function(curso) {return curso.pre1 === $scope.selectedCurso.pre1;};
 
$scope.getBorderBottomStyle = function(curso) {return {'border-bottom': curso.preColor,'height': '120px'};};
$scope.getBorderBottomStyle1 = function(curso) {return { 'border-bottom': curso.preColor1 };};

//color escuela
 $scope.escuela = function() {return { 'color': '#0074E8'}; };


//Cursos Electivos Formación Social Solidaria
$scope.bas01 = '<p class="tit3 h5">Cursos Electivos Formación Social Solidaria</p>' +
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto, Comunidad e Interacción Social - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Cursos Formación Complementaria
$scope.bas02 = '<p class="tit3 h5">Cursos Formación Complementaria</p>' +
'<ul>'+
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Acondicionamiento Físico y Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar tres cursos (3) electivos,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Cursos Electivos Bases Psicobiológicas del Comportamiento
$scope.bas03 = '<p class="tit3 h5">Cursos Electivos Bases Psicobiológicas del Comportamiento</p>' +
'<ul>'+
'<li>Psicobiología - <strong>Código: </strong>403013 - <strong>Créditos: </strong>3</li>' +
'<li>Biología - <strong>Código: </strong>201101 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización, aprobando por lo menos 3 cursos electivos disciplinares específicos de ésta. Los dos cursos restantes podrá tomarlos en cualquier otra línea de profundización</p>';

//Disciplinar Común
$scope.bas04 = '<p class="tit3 h5">Disciplinar Común</li>' +
'<ul>'+
'<li>Competencias Ciudadanas - <strong>Código: </strong>404437081 - <strong>Créditos: </strong>3</li>' +
'<li>Ética - <strong>Código: </strong>404437080 - <strong>Créditos: </strong>3</li>' +
'<li>Prosocialidad - <strong>Código: </strong>403010 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Cursos Electivos Procesos Psicológicos Básicos
$scope.bas05 = '<p class="tit3 h5">Cursos Electivos Procesos Psicológicos Básicos</li>' +
'<ul>'+
'<li>Inteligencia y Creatividad - <strong>Código: </strong>403040 - <strong>Créditos: </strong>3</li>' +
'<li>Procesos Cognoscitivos Superiores - <strong>Código: </strong>403041 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Problemas Fundamentales de la Psicología Individual
$scope.bas06 = '<p class="tit3 h5">Problemas Fundamentales de la Psicología Individual</li>' +
'<ul>'+
'<li>Psicopatología de la Adultez y la Vejez - <strong>Código: </strong>403008 - <strong>Créditos: </strong>3</li>' +
'<li>Psicopatología de la Niñez y la Adolescencia - <strong>Código: </strong>403009 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Problemas Fundamentales de la Psicología Social
$scope.bas07 = '<p class="tit3 h5">Problemas Fundamentales de la Psicología Social</li>' +
'<ul>'+
'<li>Comunidad Sociedad y Cultura - <strong>Código: </strong>403007 - <strong>Créditos: </strong>3</li>' +
'<li>Construcción de Subjetividades - <strong>Código: </strong>403039 - <strong>Créditos: </strong>3</li>' +
'<li>Etnopsicología - <strong>Código: </strong>403038 - <strong>Créditos: </strong>3</li>' +
'<li>La Ciudad como Propuesta Cultural - <strong>Código: </strong>404037105 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar seis cursos (6) electivos,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

});

})();
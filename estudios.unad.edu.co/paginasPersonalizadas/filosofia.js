(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Teoría del Conocimiento",codigo:"407001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodólogico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodólogico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Griego",codigo:"402727726",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"2",curso:"Filosofía Antigua",codigo:"401202",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"2",curso:"Filosofía no Occidental",codigo:"401201",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Gnoseología",codigo:"407002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Metodólogico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Cibercultura",codigo:"403037",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"3",curso:"Filosofía Medieval",codigo:"401203",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Antropología Filosófica",codigo:"407011",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Fundamentos Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Lógica Formal",codigo:"103300",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Componente de Formación Social Solidaria",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
//{ periodo:"3",curso:"Prestación Servicio Social unadista",codigo:"700004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"4",curso:"Filosofía Moderna",codigo:"401204",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"4",curso:"Fenomenología",codigo:"407004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Diseño de Proyectos Sociales",codigo:"400002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Investigación Ciencias Sociales",codigo:"400001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Electivo Disciplinar",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"5",curso:"Filosofía Contemporánea",codigo:"401205",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"5",curso:"Seminario 1",codigo:"407029",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"5",curso:"Hermenéutica",codigo:"401224",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Filosofía del Arte",codigo:"407024",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Prosocialidad",codigo:"403010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Electivo Disciplinar",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"6",curso:"Filosofía Ética",codigo:"301131",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Pensamiento Filosófico Latinoamericano",codigo:"401207",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"6",curso:"Seminario 2",codigo:"407030",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"6",curso:"Analítica",codigo:"407005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso Formación Complementaria",codigo:"*",creditos:"1",tipo:"",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Electivo Disciplinar",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"7",curso:"Filosofía Política",codigo:"303092",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Metafísica",codigo:"401209",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"7",curso:"Seminario 3",codigo:"407031",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"7",curso:"Genealogía",codigo:"407034",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Filosofía de la Diferencia",codigo:"407026",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Curso Formación Complementaria",codigo:"*",creditos:"1",tipo:"",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Electivo Disciplinar",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Filosofía de la Cultura",codigo:"407010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Post-Metafísica",codigo:"407027",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"8",curso:"Seminario 4",codigo:"407032",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"8",curso:"Arqueología",codigo:"407003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Filosofía de la Tecnología",codigo:"407033",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Curso Formación Complementaria",codigo:"*",creditos:"1",tipo:"",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Electivo Disciplinar",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0"}
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


//Componente de Formación Social Solidaria
//Electiva Social Solidaria: De una oferta de 3 cursos el estudiante debe matricular y aprobar 1 curso. 
$scope.basico1 = '<p class="tit3 h5">Componente de Formación Social Solidaria</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, desarrollo y calidad de vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  De una oferta de 3 cursos el estudiante debe matricular y aprobar 1 curso.</p>';


//Electivo Disciplinar
//Electivas disciplinares: De una oferta de 18 cursos el estudiante debe matricular y aprobar 5 cursos, según sus intereses académicos e investigativo. 
$scope.basico2 = '<p class="tit3 h5">Electivo Disciplinar</p>'+
'<ul>'+
'<li>Seminario de Autor Filosofía Moderna - <strong>Código: </strong>407021 - <strong>Créditos: </strong>3</li>' +
'<li>Ética, social y económica - <strong>Código: </strong>407012 - <strong>Créditos: </strong>3</li>' +
'<li>Seminario de Autor Filosofía no Occidental - <strong>Código: </strong>407023 - <strong>Créditos: </strong>3</li>'+
'<li>Seminario de Autor Filosofía Medieval - <strong>Código: </strong>407020 - <strong>Créditos: </strong>3</li>'+
'<li>Seminario de Autor Filosofía Contemporánea - <strong>Código: </strong>407022 - <strong>Créditos: </strong>3</li>'+
'<li>Derechos Humanos - <strong>Código: </strong>407035 - <strong>Créditos: </strong>3</li>'+
'<li>Política economía y sociedad - <strong>Código: </strong>407016 - <strong>Créditos: </strong>3</li>'+
'<li>Democracia y ciudadanía - <strong>Código: </strong>407014 - <strong>Créditos: </strong>3</li>'+
'<li>Interculturalidad y Globalización - <strong>Código: </strong>407013 - <strong>Créditos: </strong>3</li>'+
'<li>Problemas y Autores - <strong>Código: </strong>407028 - <strong>Créditos: </strong>3</li>'+
'<li>Seminario de Autor Filosofía Antigua - <strong>Código: </strong>407019 - <strong>Créditos: </strong>3</li>'+
'<li>Problemas de Estética - <strong>Código: </strong>407025 - <strong>Créditos: </strong>3</li>'+
'<li>Estado y Sociedad - <strong>Código: </strong>407015 - <strong>Créditos: </strong>3</li>'+
'<li>Bioética - <strong>Código: </strong>407009 - <strong>Créditos: </strong>3</li>'+
'<li>Filosofía de la Liberación - <strong>Código: </strong>407017 - <strong>Créditos: </strong>3</li>'+
'<li>Modernidad y Posmodernidad - <strong>Código: </strong>407008 - <strong>Créditos: </strong>3</li>'+
'<li>Pensamiento Complejo - <strong>Código: </strong>407007 - <strong>Créditos: </strong>3</li>'+
'<li>Ciencia y Sociedad - <strong>Código: </strong>407006 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong> De una oferta de 18 cursos el estudiante debe matricular y aprobar 5 cursos, según sus intereses académicos e investigativo.</p>';


//Curso Formación Complementaria
//Electiva de Formación Complementaria: De una oferta de 4 cursos, el estudiante debe matricular y aprobar 3 cursos. 

$scope.basico3 = '<p class="tit3 h5">Curso Formación Complementaria</p>'+
'<ul>'+
'<li>Protocolo e Imagen - <strong>Código: </strong>80007 <strong>Créditos: </strong>1</li>' +
'<li>Acondicionamiento Físico y Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>'+
'<li>Teatro - <strong>Código: </strong>8010 - <strong>Créditos: </strong>1</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> De una oferta de 4 cursos, el estudiante debe matricular y aprobar 3 cursos</p>';



});

})();
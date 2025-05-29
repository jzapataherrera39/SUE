(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a las Artes Visuales",codigo:"408007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"1",curso:"Dibujo",codigo:"408012",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12", pre1:"0"},
{ periodo:"1",curso:"Fotografía Artística",codigo:"408014",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14", pre1:"131"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Cátedra Unadista",codigo:"90001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Curso Electivo Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"2",curso:"Arte, Imagen y Saber Ancestral",codigo:"408001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"2",curso:"Diseño Básico",codigo:"408013",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12", pre1:"0"},
{ periodo:"2",curso:"Posproducción de Fotografía",codigo:"408016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14", pre1:"131"},
{ periodo:"2",curso:"Cibercultura",codigo:"403037",creditos:"3",tipo:"T",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13", pre1:"0"},

{ periodo:"3",curso:"La Imagen Trascendental y la Expansión Religiosa",codigo:"408002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"3",curso:"Dibujo Digital",codigo:"408015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12", pre1:"0"},
{ periodo:"3",curso:"Video",codigo:"408017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14", pre1:"0"},
{ periodo:"3",curso:"Antropología Visual",codigo:"408042",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"131"},
{ periodo:"3",curso:"Curso Componente Social Solidario",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"3",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13", pre1:"0"},
{ periodo:"3",curso:"Prestación del Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"4",curso:"Las imágenes y el Arte del Humanismo",codigo:"408003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"4",curso:"Arte, Estética y Política",codigo:"408008",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"4",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"14", pre1:"0"},
{ periodo:"4",curso:"Oralidad y Escritura",codigo:"408048",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"131"},
{ periodo:"4",curso:"Arte y Sociedad",codigo:"408047",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15", pre1:"0"},
{ periodo:"4",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13", pre1:"0"},

{ periodo:"5",curso:"El Arte y la Modernidad",codigo:"408004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"5",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"5",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"14", pre1:"0"},
{ periodo:"5",curso:"Conservación y Preservación del Patrimonio Artístico",codigo:"408046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"131"},
{ periodo:"5",curso:"Estética y Procesos Artísticos Contemporáneos",codigo:"408043",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15", pre1:"0"},
{ periodo:"5",curso:"Curso Electivo Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13", pre1:"0"},

{ periodo:"6",curso:"Geopolítica y Arte en la Contemporaneidad",codigo:"408005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"6",curso:"Pensamiento Artístico: Expresión Artística y Nuevos Medios",codigo:"408009",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"6",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"14", pre1:"0"},
{ periodo:"6",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"131"},
{ periodo:"6",curso:"Museografía y Museología",codigo:"408045",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"6",curso:"Investigación de Procesos Artísticos",codigo:"408040",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"6",curso:"Prosocialilad",codigo:"403010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"7",curso:"Colombia: Arte, Identidad y Alteridad",codigo:"408006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"7",curso:"Pensamiento Artístico: Arte, Cuerpo y Espacio Tiempo",codigo:"408010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"16", pre1:"0"},
{ periodo:"7",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"14", pre1:"0"},
{ periodo:"7",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"131"},
{ periodo:"7",curso:"Gestión Cultural",codigo:"408041",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"7",curso:"Taller integral I",codigo:"408038",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"17", pre1:"0"},
{ periodo:"7",curso:"Curso Electivo Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"8",curso:"Taller Integral II",codigo:"408039",creditos:"6",tipo:"Práctico",clasificacion:"Obligatorio",pre:"17", pre1:"0"},
{ periodo:"8",curso:"Pensamiento Artístico: Prácticas Nuevas y Emergentes",codigo:"408011",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"16", pre1:"0"}
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




//línea de profundización I / Expresión digital
$scope.bas01 = '<h3 class="tit3">Línea de profundización I / Expresión digital</h3>'+
'<p>Multimedia - <strong>Código: </strong>4087027 - <strong>Créditos: </strong>3</p>' +
'<p>Arte interactivo - <strong>Código: </strong>408025 - <strong>Créditos: </strong>3</p>' +
'<p>Posproducción de video - <strong>Código: </strong>408031 - <strong>Créditos: </strong>3</p>'+
'<p>Animación - <strong>Código: </strong>48030 - <strong>Créditos: </strong>3</p>'+
'<p>Animación 3D - <strong>Código: </strong>408026 - <strong>Créditos: </strong>3</p>'+
'<p>Programación para artistas - <strong>Código: </strong>408028 - <strong>Créditos: </strong>3</p>'+
'<p>Electrónica para artistas - <strong>Código: </strong>408029 - <strong>Créditos: </strong>3</p>'+
'<hr>';

//línea de profundización II / Gráfica y pintura
$scope.basico1 = '<h3 class="tit3">Línea de profundización II / Gráfica y pintura</h3>'+
'<p>Dibujo figura humana - <strong>Código: </strong>408018 - <strong>Créditos: </strong>3</p>' +
'<p>Dibujo espacialidad - <strong>Código: </strong>408019 - <strong>Créditos: </strong>3</p>' +
'<p>Pintura - <strong>Código: </strong>408020 - <strong>Créditos: </strong>3</p>'+
'<p>Pintura digital - <strong>Código: </strong>408021 - <strong>Créditos: </strong>3</p>'+
'<p>Ilustración - <strong>Código: </strong>408023 - <strong>Créditos: </strong>3</p>'+
'<p>Técinas de grabado - <strong>Código: </strong>408022 - <strong>Créditos: </strong>3</p>'+
'<p>Edición y autoedición digítal - <strong>Código: </strong>408024 - <strong>Créditos: </strong>3</p>'+
'<hr>'+
'<p><strong>Nota: </strong>  Elija UNA de las líneas de profundización. Matricule y apruebe los cursos de acuerdo al orden presentado en cada línea</p>';


//Cursos Formación Complementaria
$scope.basico2 = '<h3 class="tit3">Cursos formación complementaria</h3>'+
'<p>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</p>' +
'<p>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</p>' +
'<p>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</p>'+
'<p>Apreciación de las imágenes del arte - <strong>Código: </strong>86996 - <strong>Créditos: </strong>1</p>'+
'<p>Acondicionamiento fisíco - <strong>Código: </strong>00004 - <strong>Créditos: </strong>1</p>'+
'<hr>';

//Cursos Formación Social Solidaria
$scope.basico3 = '<h3 class="tit3">Cursos Formación Social Solidaria</h3>'+
'<p>Inclusión social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</p>' +
'<hr>'+
'<p><strong>Nota: </strong>  Matricule y apruebe tres cursos de la oferta en el orden que desee.</p>';



});

})();
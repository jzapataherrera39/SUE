(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Fundamentos Sociológicos y Antropológicos del Deporte",codigo:"410037",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Gestión Social del Deporte",codigo:"410038",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Fundamentos de la Actividad Física y el Deporte",codigo:"410039",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Legislación Deportiva",codigo:"410040",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Historia del Deporte",codigo:"410041",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"2",curso:"Fundamentos de Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Juego, Recreación y Comunidad",codigo:"410042",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Sistema Nacional e Internacional del Deporte",codigo:"410043",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Curso Electivo Componente Social Solidario",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Industrias del Deporte",codigo:"410044",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Pensamiento Lógico y Matemático",codigo:"407011",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Administración y Gerencia Deportiva",codigo:"410045",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Deporte Social Comunitario",codigo:"410046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Gobierno, Territorialidad y Políticas Deportivas",codigo:"410047",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Investigación en Ciencias Sociales",codigo:"400001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"4",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"4",curso:"Ciber Cultura",codigo:"403037",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Innovación y Emprendimientos",codigo:"410048",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Pedagogía del Deporte",codigo:"410049",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Gestión de Políticas Públicas del Deporte",codigo:"410050",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Investigación Cuantitativa",codigo:"101267424",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"5",curso:"Prosocialidad",codigo:"403010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Inglés B1+",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"5",curso:"Deporte de Alto Rendimiento",codigo:"410051",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Ciencias de la Salud Aplicadas al Deporte",codigo:"410052",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"'0",pre1:"0"},
{ periodo:"5",curso:"Contratación Pública",codigo:"410053",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Diseño de Proyectos Sociales",codigo:"400002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Curso de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"6",curso:"Coaching Deportivo",codigo:"410054",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso de Profundización",codigo:"*",creditos:"6",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso de Profundización",codigo:"*",creditos:"6",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"7",curso:"Innovaciones Tecnológicas y Social Media en el Deporte",codigo:"410055",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Curso de Profundización",codigo:"*",creditos:"6",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Curso de Profundización",codigo:"*",creditos:"6",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Curso de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Opción de Transferencia / Rutas Internacionales",codigo:"*",creditos:"10",tipo:"Práctico",clasificacion:"Obligatorio", clasificacion1:"Opción de Transferencia",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Curso de Profundización",codigo:"*",creditos:"6",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},


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
                       clasificacionFinal === 'Opción de Transferencia' ? '6px solid #45C045' : ''
    };

    if (clasificacionFinal === 'Electiva') {
        styles['background-color'] = '#DDEEFF'; // Fondo para cursos Electiva
    } else if (clasificacionFinal === 'Opción de Transferencia') {
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




//COMPONENTE SOCIAL SOLIDARIO
$scope.bas01 = '<p class="tit3 h5">Componente Social Solidario</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto, Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>'+
'<hr>' +
'</ul>'+
'<p><strong>Nota: </strong>  Solo se debe matricular uno (1) de los siguientes cursos,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//COMPONENTE DE FORMACIÓN COMPLEMENTARIA
$scope.bas02 = '<p class="tit3 h5">Componente de Formación Ccomplementaria</p>'+
'<ul>'+
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>'+
'<li>Acondicionamiento Físico y Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>'+
'<li>Apreciación de las Imágenes de Arte - <strong>Código: </strong>404086996 - <strong>Créditos: </strong>1</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe Matricular tres (3) cursos de los siguientes electivos,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//OPCIÓN DE TRANSFERENCIA
$scope.trans01 = '<p class="tit3 h5">Opción de Transferencia</p>'+
'<ul>'+
'<li>Dirección y Administración del Deporte - <strong>Código: </strong>410079 - <strong>Créditos: </strong>10</li>' +
'<li>Deporte e Inclusión Social - <strong>Código: </strong>410080 - <strong>Créditos: </strong>10</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe Matricular uno (1) de los siguientes cursos</p>';

//PROFUNDIZACIONES
$scope.prof01 = '<p class="tit3 h5">Estudios Socio Culturales del Deporte</p>'+
'<ul>'+
'<li>Sociología del Deporte - <strong>Código: </strong>410056 - <strong>Créditos: </strong>6</li>' +
'<li>Antropología del Deporte - <strong>Código: </strong>410057 - <strong>Créditos: </strong>6</li>' +
'<li>Deporte y Comunicación - <strong>Código: </strong>410058 - <strong>Créditos: </strong>6</li>'+
'<li>Género y Deporte - <strong>Código: </strong>410059 - <strong>Créditos: </strong>6</li>'+
'<li>Violencias en el Deporte - <strong>Código: </strong>410060 - <strong>Créditos: </strong>6</li>'+
'</ul>'+
'<hr>'+
'<p class="tit3 h5">Políticas Públicas y Legislación Deportiva</p>'+
'<ul>'+
'<li>Gestión de Calidad e Indicadores Sociales del Deporte - <strong>Código: </strong>410061 - <strong>Créditos: </strong>6</li>' +
'<li>Derecho Deportivo Internacional  - <strong>Código: </strong>410062 - <strong>Créditos: </strong>6</li>' +
'<li>Contabilidad, Costos y Presupuestos para Organizaciones Deportivas - <strong>Código: </strong>410063 - <strong>Créditos: </strong>6</li>'+
'<li>Políticas Públicas para la Inclusión - <strong>Código: </strong>410064 - <strong>Créditos: </strong>6</li>'+
'<li>Diseño y Evaluación de Políticas Públicas - <strong>Código: </strong>410065 - <strong>Créditos: </strong>6</li>'+
'</ul>'+
'<hr>'+
'<p class="tit3 h5">Deporte Social Comunitario</p>'+
'<ul>'+
'<li>Deporte Adaptado - <strong>Código: </strong>4100661 - <strong>Créditos: </strong>6</li>' +
'<li>Psicología Aplicada al Deporte  - <strong>Código: </strong>410067 - <strong>Créditos: </strong>6</li>' +
'<li>Deporte para la Paz - <strong>Código: </strong>410068 - <strong>Créditos: </strong>6</li>'+
'<li>Deporte y Bienestar en las Organizaciones - <strong>Código: </strong>410069 - <strong>Créditos: </strong>6</li>'+
'<li>Medio Ambiente y Deporte - <strong>Código: </strong>410070 - <strong>Créditos: </strong>6</li>'+
'</ul>'+
'<hr>'+
'<p class="tit3 h5">Emprendimientos Deportivos</p>'+
'<ul>'+
'<li>Marketing Deportivo - <strong>Código: </strong>410071 - <strong>Créditos: </strong>6</li>' +
'<li>Proyectos Sociales y Productivos en el Deporte  - <strong>Código: </strong>410072 - <strong>Créditos: </strong>6</li>' +
'<li>Planeación y Logística de Eventos Deportivos - <strong>Código: </strong>410073 - <strong>Créditos: </strong>6</li>'+
'<li>Economía Solidaria, Deporte y Desarrollo - <strong>Código: </strong>410074 - <strong>Créditos: </strong>6</li>'+
'<li>Direccionamiento Estratégico de Organizaciones Deportivas - <strong>Código: </strong>410075 - <strong>Créditos: </strong>6</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota Cursos de Profundización: </strong>  El estudiante debe escoger una línea y cursar los cinco cursos que la componen. Por ejemplo, si selecciona la línea de Estudios socio culturales del deporte, debe cursar:Sociología del deporte, Antropología del deporte, Deporte y comunicación, Género y deporte y Violencias en el deporte. Son requisitos para acceder al grado la aprobación de una opción de grado y la presentación de la prueba de Estado.</p>';


});

})();
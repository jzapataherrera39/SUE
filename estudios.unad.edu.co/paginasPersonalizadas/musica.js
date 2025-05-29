(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Fundamentos de la Escritura Musical",codigo:"410001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"1",curso:"Electivo Instrumento Complementario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"12",pre1:"0"},
{ periodo:"1",curso:"Fundamentos Teóricos de la Música Tonal",codigo:"410013",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"1",curso:"Historia de la Música Occidental",codigo:"403348718",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodólogico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Lecto-Escritura Básica",codigo:"403348812",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"2",curso:"Electivo Instrumento Complementario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"12",pre1:"0"},
{ periodo:"2",curso:"Armonía",codigo:"403348813",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"2",curso:"Música en el Siglo XX",codigo:"403348820",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"2",curso:"Curso Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"2",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Lecto-Escritura Intermedia",codigo:"403348821",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Electivo Instrumento Complementario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"12",pre1:"0"},
{ periodo:"3",curso:"Armonía Contemporánea",codigo:"403348822",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"3",curso:"Música en Colombia",codigo:"403348823",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"3",curso:"Curso Componente Formación Social Solidario",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"3",curso:"Prestación Servicio Social unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Edición Musical",codigo:"403348824",creditos:"1",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"4",curso:"Lecto-Escritura Superior",codigo:"403348825",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"4",curso:"Electivo Instrumento Complementario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"12",pre1:"0"},
{ periodo:"4",curso:"Teoría de la Música Modal",codigo:"403348826",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"4",curso:"Diseño de Proyectos Sociales",codigo:"400002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},

{ periodo:"5",curso:"Entrenamiento Auditivo Básico e Intermedio",codigo:"403348827",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"5",curso:"Electivo Instrumento Complementario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"12",pre1:"0"},
{ periodo:"5",curso:"Instrumentación",codigo:"410016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"5",curso:"Morfología",codigo:"410018",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"5",curso:"Curso Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"6",curso:"Entrenamiento Auditivo Superior",codigo:"403348828",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"6",curso:"Fundamentos de Producción Musical",codigo:"410019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Principios de la Composición",codigo:"403348829",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Cibercultura",codigo:"403037",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Prosocialidad",codigo:"403010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"7",curso:"Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Profundización",codigo:"*",creditos:"6",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Investigación de Procesos Artísticos – Música",codigo:"404106979",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Proyecto de Grado",codigo:"410036",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
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



$scope.pro1 = '<p class="tit3 h5">Líneas de Profundización</p>'+
'<p class="tit3 h5">Línea de Profundización I: Composición y Arreglos musicales</p>'+
'<ul>'+
'<li>Arreglos Musicales - <strong>Código: </strong>410024 - <strong>Créditos: </strong>3</li>' +
'<li>Técnicas Contrapuntísticas - <strong>Código: </strong>410020 - <strong>Créditos: </strong>6</li>' +
'<li>Orquestación - <strong>Código: </strong>410021 - <strong>Créditos: </strong>3</li>'+
'<li>Intervención Compositiva - <strong>Código: </strong>410023 - <strong>Créditos: </strong>3</li>'+
'<li>Fundamentos de Composición - <strong>Código: </strong>410025 - <strong>Créditos: </strong>3</li>'+
'<li>Análisis Musical - <strong>Código: </strong>410022 - <strong>Créditos: </strong>3</li>'+
'<li>Proyecto de Composición Musical - <strong>Código: </strong>410026 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de Profundización II: Producción musical</p>'+
'<ul>'+
'<li>Procesos de Grabación - <strong>Código: </strong>410028 - <strong>Créditos: </strong>3</li>' +
'<li>Daw, Midi, Secuencia Samplers - <strong>Código: </strong>403348831 - <strong>Créditos: </strong>3</li>' +
'<li>Industria de la Música - <strong>Código: </strong>410032 - <strong>Créditos: </strong>3</li>'+
'<li>Procesos de Mezcla - <strong>Código: </strong>403348830 - <strong>Créditos: </strong>6</li>'+
'<li>Taller Colectivo de Producción - <strong>Código: </strong>410031 - <strong>Créditos: </strong>3</li>'+
'<li>Sonido y Medios de Comunicación - <strong>Código: </strong>410030 - <strong>Créditos: </strong>3</li>'+
'<li>Proyecto de Producción - <strong>Código: </strong>410033 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  De la línea de profundización que elija, deberá aprobar la totalidad de 3 creditos de los cursos que la componen.</p>';


$scope.bas01 = '<p class="tit3 h5">Cursos Formación Social Solidaria</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>'+
'<ul>';

$scope.bas02 = '<p class="tit3 h5">Cursos Formación Complementaria</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>'+
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>'+
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>'+
'<li>Acondicionamiento Físico y Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>'+
'<li>Cátedra de Alfabetización Musical - <strong>Código: </strong>404107147 - <strong>Créditos: </strong>1</li>'+
'<li>Apreciación de las Imágenes del Arte - <strong>Código: </strong>404086996 - <strong>Créditos: </strong>1</li>'+
'<ul>';

$scope.bas03 = '<p class="tit3 h5">Cursos Electivos Instrumento Complementario Piano</p>'+
'<ul>'+
'<li>Fundamentos Técnicos Interpretación del Piano - <strong>Código: </strong>410007 - <strong>Créditos: </strong>3</li>'+
'<li>Repertorio Característico de la Literatura Pianística - <strong>Código: </strong>410008 - <strong>Créditos: </strong>3</li>'+
'<li>Piano Complementario - <strong>Código: </strong>410009 - <strong>Créditos: </strong>3</li>'+
'<li>Piano Aplicado - <strong>Código: </strong>403348818 - <strong>Créditos: </strong>3</li>'+
'<li>Piano Aplicado Profundizaciones - <strong>Código: </strong>403348819 - <strong>Créditos: </strong>3</li>'+
'<ul>';

$scope.bas04 = '<p class="tit3 h5">Cursos Electivos Instrumento Complementario Guitarra</p>'+
'<ul>'+
'<li>Técnicas Básicas de Interpretación de la Guitarra - <strong>Código: </strong>403348717 - <strong>Créditos: </strong>3</li>'+
'<li>Repertorio Característico Guitarra - <strong>Código: </strong>403348814 - <strong>Créditos: </strong>3</li>'+
'<li>Guitarra Complementario - <strong>Código: </strong>403348815 - <strong>Créditos: </strong>3</li>'+
'<li>Guitarra Aplicada - <strong>Código: </strong>403348816 - <strong>Créditos: </strong>3</li>'+
'<li>Guitarra Aplicado a Profundizaciones - <strong>Código: </strong>403348817 - <strong>Créditos: </strong>3</li>'+
'<ul>';


});

})();
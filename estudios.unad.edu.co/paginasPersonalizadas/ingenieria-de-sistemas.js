(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a la Ingeniería de Sistemas",codigo:"90013",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["90013"] },
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico Matemático", codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo Interdisciplinar Básico Común I",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"1",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Teoría de Sistemas en las Organizaciones",codigo:"204016",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["90013"] },
{ periodo:"2",curso:"Cálculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"2",curso:"Fundamentos de Programación",codigo:"213022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213022"] },
{ periodo:"2",curso:"Matemáticas Discretas",codigo:"204041",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"3",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Álgebra Lineal",codigo:"208046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208046"] },
{ periodo:"3",curso:"Programación",codigo:"213023",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213022"] },
{ periodo:"3",curso:"Arquitectura de Computadores",codigo:"202016893",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202016893"] },
{ periodo:"3",curso:"Estadística Descriptiva",codigo:"204040",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["204040"] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"4",curso:"Análisis y Especificación de Requerimientos",codigo:"202016894",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90013","202016894"] },
{ periodo:"4",curso:"Cálculo Integral",codigo:"100411",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"4",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208046"] },
{ periodo:"4",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Probabilidad",codigo:"100402",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["204040"] },
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"5",curso:"Diseño de Software",codigo:"202016897",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90013"] },
{ periodo:"5",curso:"Diseño de Bases de Datos",codigo:"202016899",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202016894"] },
{ periodo:"5",curso:"Estructura de Datos",codigo:"301305",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213022"] },
{ periodo:"5",curso:"Sistemas Operativos",codigo:"202016895",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202016893"] },
{ periodo:"5",curso:"Proyecto de Ingeniería I",codigo:"202337120",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202337120"] },
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"6",curso:"Verificación y Validación de Software",codigo:"202016900",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90013"] },
{ periodo:"6",curso:"Bases de Datos",codigo:"202016896",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202016894"] },
{ periodo:"6",curso:"Electivo Disciplinar Específico I",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"6",curso:"Redes y Comunicaciones",codigo:"202016898",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202016893"] },
{ periodo:"6",curso:"Formulación y Evaluación de Proyectos de Ing.",codigo:"202337119",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202337120"] },
{ periodo:"6",curso:"Electivo Interdisciplinar Básico Común II",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"7",curso:"Calidad de Software",codigo:"202016903",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90013"] },
{ periodo:"7",curso:"Administración de Bases de Datos",codigo:"202016902",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202016894"] },
{ periodo:"7",curso:"Electivo Disciplinar Específico II",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"7",curso:"Electivo Formación Complementaria I",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Proyecto de Ingeniería II",codigo:"202337121",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202337120"] },
{ periodo:"7",curso:"Arquitectura Empresarial",codigo:"202016901",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"8",curso:"Electivo Disciplinar Común I",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo Formación Complementaria II",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo Disciplinar Específico III",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"8",curso:"Information Security",codigo:"202016905",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202016893"] },
{ periodo:"8",curso:"Emprendimiento de Base Tecnológica",codigo:"202016906",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Gestión de TI",codigo:"202016904",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"9",curso:"Electivo Disciplinar Común II",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo Formación Complementaria III",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo Disciplinar Específico IV",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"9",curso:"Proyecto de Grado",codigo:"202016907",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202337120"] }
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
            materia.showArrow = false;
        }
    }


    // Establecer el curso seleccionado
    $scope.selectedCurso = curso;
    $scope.verinfo = true;

};

// Función para obtener color según pre
$scope.getColorByPre = function (preValue) {
   const colorMap = {
    '90013': '#d85c29',  
    '100410': '#003e60',
	'213022': '#03995F',  
    '900001': '#67b6b2', 
    '208046': '#e9b435',
    '202016893': '#842e2c',
	'204040': '#892b7d',  
    '202016894': '#482999',  
	'202337120': '#6CDF70',  
	'*': '#a72e47', 
	
// Colores permitidos: #d85c29 #003e60 #41839d #67b6b2 #892b7d #842e2c #e9b435 #a72e47 #1690E0 #6CDF70 #482999 #03995F

};
    return colorMap[preValue] || 'black';
};

$scope.processPrerrequisitos = function() {
    for (const periodo in $scope.curriculum) {
        const materias = $scope.curriculum[periodo];
        for (const curso of materias) {
            if (curso.prerrequisitos && curso.prerrequisitos.length > 0) {
                curso.preColors = {}; // Initialize preColors here
                curso.prerrequisitos.forEach(preId => {
                    const color = $scope.getColorByPre(preId);
                    curso.preColors[preId] = color;
                    curso.showArrow = true; // If you still need this
                });
            }
        }
    }
};


$scope.processPrerrequisitos(); // Llamar a la función al inicio	
	
//estilo malla	  
  
$scope.getStyle = function(curso) {
    var clasificacionFinal = curso.clasificacion1 || curso.clasificacion;

    var styles = {
        'border-left': clasificacionFinal === 'Obligatorio' ? '4px solid #282828' :
                       clasificacionFinal === 'Electiva' ? '4px solid rgb(103, 182, 178)' :
                       clasificacionFinal === 'Componente Práctico' ? '4px solid #45C045' : ''
    };

    if (clasificacionFinal === 'Electiva') {
        styles['background-color'] = 'rgb(103, 182, 178)'; // Fondo para cursos Electiva
    } else if (clasificacionFinal === 'Componente Práctico') {
        styles['background-color'] = '#C8FACC'; 
    }

    if (curso === $scope.selectedCurso) {
        styles['background-color'] = '#bcbebf'; // Fondo negro
        styles['color'] = '#333'; // Letras blancas
    }

    return styles;
};
 

//Electiva Interdisciplinar Básico Común

$scope.bas01 = '<p class="lateral1">Electiva Interdisciplinar Básico Común</p>' +
'<ul>' +
  '<li>Curso: Algebra, Trigonometría y Geom. Analítica - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Contabilidad y Costos - <strong>Código: </strong>212018 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Teoría de las decisiones - <strong>Código: </strong>212066 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Biología - <strong>Código: </strong>201101 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Excel Avanzado - <strong>Código: </strong>212059 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Inferencia Estadística - <strong>Código: </strong>212064 - <strong>Créditos: </strong>3</li>' +
'</ul>';


// Electivo Disciplinar Específico

$scope.bas02 = '<p class="lateral1">Electivo Disciplinar Específico</p>' +

'<p class="lateral1">Línea de profundización I: Sistemas de Información</p>' +
'<ul>' +
  '<li>Curso: Análisis de Datos - <strong>Código: </strong>202016908 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Servicios en la Nube - <strong>Código: </strong>202016910 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Social media - <strong>Código: </strong>202016909 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Big Data - <strong>Código: </strong>202016911 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de profundización II: Tecnologías de Información</p>' +
'<ul>' +
  '<li>Curso: Realidad Virtual - <strong>Código: </strong>202016912 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Computación Distribuida - <strong>Código: </strong>202016914 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Bases de datos Distribuidas - <strong>Código: </strong>202016913 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Internet de las Cosas - <strong>Código: </strong>202016915 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de profundización III: Ingeniería de Software</p>' +
'<ul>' +
  '<li>Curso: Interacción Humano Computador - <strong>Código: </strong>202016916 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Diseño Centrado en el Usuario - <strong>Código: </strong>202016917 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Evaluación de Experiencia de Usuario - <strong>Código: </strong>202016918 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Diseño Accesible - <strong>Código: </strong>202016919 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de profundización IV: Gestión de Proyectos</p>' +
'<ul>' +
  '<li>Curso: Planificación, Program. y Control de Proyectos - <strong>Código: </strong>212055 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Metodologías de Gestión de Proyectos - <strong>Código: </strong>212056 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Gestión de Alcance Tiempo y Costos - <strong>Código: </strong>212058 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Herramientas y Software para Gestión de Proyectos - <strong>Código: </strong>212057 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p><strong>Nota:</strong> Para los cursos Electivo Disciplinar Específico I, II, III y IV, el estudiante debe seleccionar una de las Líneas de profundización y matricular los cursos de esa línea.</p>';



//Electivo Formación Complementaria

$scope.bas03 = '<p class="lateral1">Electivo Formación Complementaria</p>' +
'<ul>' +
  '<li>Curso: Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Actividad Física para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Discapacidad y Sexualidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Creatividad para el Emprendimiento - <strong>Código: </strong>80018 - <strong>Créditos: </strong>2</li>' +
'</ul>';


//Electivo Disciplinar Común

$scope.bas04 = '<p class="lateral1">Electivo Disciplinar Común</p>' +
'<ul>' +
  '<li>Curso: Introducción a los Metadatos - <strong>Código: </strong>204031 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Tecnologías ETL - <strong>Código: </strong>204032 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: BPM con TI (Gestión de procesos Tecnológicos con T.I) - <strong>Código: </strong>212063 - <strong>Créditos: </strong>3</li>' +
'</ul>';

});

})();
(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {

$scope.mt2 = [
{ periodo:"1",curso:"Introducción a la Automatización Industrial",codigo:"202436775",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"1",curso:"Catedra unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias comunicativas",codigo:"50010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo Complementario I",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo Interdisciplinar Básico Común I",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"2",curso:"Análisis de Circuitos",codigo:"202446761",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"2",curso:"Algoritmos y Programación",codigo:"202446762",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"2",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"2",curso:"Cálculo Univariado",codigo:"202446763",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["202446763"] },
{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"434208",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electivo Disciplinar Común",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Prestación de Servicio Social Unadista",codigo:"*",creditos:"0",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Circuitos Electrónicos",codigo:"202436776",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775","243007"] },
{ periodo:"3",curso:"Microprocesadores y Microcontroladores",codigo:"309696",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"3",curso:"Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202446763"] },
{ periodo:"3",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Electivo Complementario II",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Electivo Disciplinar Específico I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Comunicaciones Industriales",codigo:"208021",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"4",curso:"Automatización Industrial",codigo:"299013",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"4",curso:"Control Numérico Computarizado – CNC",codigo:"243008",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"4",curso:"Electivo Disciplinar Específico II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Proyecto de Gestión Tecnológica Fase I",codigo:"202446765",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202446765"] },
{ periodo:"4",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"4",curso:"Electivo Interdisciplinar Básico Común II",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Autómatas Programables",codigo:"243007",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243007"] },
{ periodo:"5",curso:"Comunicaciones Industriales Avanzadas",codigo:"203047",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202436775"] },
{ periodo:"5",curso:"Robótica Industrial",codigo:"202436779",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Disciplinar Específico III",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Proyecto de Gestión Tecnológica Fase II",codigo:"202436766",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202446765"] },
{ periodo:"5",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] }
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
    '202436775': '#d85c29',  
    '202446763': '#003e60',
	'243007': '#03995F',  
    '202446765': '#e9b435', 
    '900001': '#892b7d',
    '243004': '#842e2c',
	'243006': '#e9b435',  
    
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
 
//Prestación de Servicio Social Unadista
$scope.SSU = '<p class="lateral1">Prestación de Servicio Social Unadista</p>'+
'<p><strong>Nota: </strong>  La prestación del Servicio Social Unadista, es un requisito de grado y está conformada por la Cátedra Región y la Cátedra Social Solidaria, por lo cual se sugiere que el estudiante la desarrolle una vez apruebe el curso Cátedra Unadista.</p>';

//Interdisciplinares Básicos Cómunes
$scope.bas01 = '<p class="lateral1">Electivo Interdisciplinar Básico Común I</p>'+
'<ul>'+
'<li>Algebra, Trigonometría y Geometría Analítica - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de Matemáticas - <strong>Código: </strong>20612 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p class="lateral1">Electivo Interdisciplinar Básico Común II</p>'+
'<ul>'+
'<li>Planeación Prospectiva y Estratégica - <strong>Código: </strong>107011 - <strong>Créditos: </strong>3</li>'+
'<li>Organización Asociativa - <strong>Código: </strong>102953 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Disciplinares Común
$scope.bas02 = '<p class="lateral1">Disciplinares Común</p>'+
'<ul>'+
'<li>Excel Avanzado - <strong>Código: </strong>212059 - <strong>Créditos: </strong>3</li>' +
'<li>IoT – Conectando las Cosas - <strong>Código: </strong>202446764 - <strong>Créditos: </strong>3</li>' +
'<li>Biología - <strong>Código: </strong>201101 - <strong>Créditos: </strong>3</li>'+
'<li>Contabilidad y Costos - <strong>Código: </strong>202018 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


//Disciplinares Específicos
$scope.bas03 = '<p class="lateral1">Disciplinares Específicos</p>'+
'<ul>'+
'<li>Sistemas Hidroneumáticos - <strong>Código: </strong>243011 - <strong>Créditos: </strong>3</li>' +
'<li>Detección y Diag. de Fallas En Sist. Industriales - <strong>Código: </strong>243012 - <strong>Créditos: </strong>3</li>' +
'<li>Sist. de Control de Máquinas Eléctricas - <strong>Código: </strong>243013 - <strong>Créditos: </strong>3</li>'+
'<li>Sist. de Intrum. y Control de Proc. Industriales - <strong>Código: </strong>243014 - <strong>Créditos: </strong>3</li>'+
'<li>Introducción a la Inteligencia Artificial - <strong>Código: </strong>202436778 - <strong>Créditos: </strong>3</li>'+
'<li>Introducción a la Analítica de Datos - <strong>Código: </strong>202436777 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Complementarios
$scope.bas04 = '<p class="lateral1">Electivo Complementario I</p>'+
'<ul>'+
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>'+
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


$scope.bas06 = '<p class="lateral1">Electivo Complementario II</p>'+
'<ul>'+
'<li>Actividad Física y para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>' +
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>'+
'<li>Sexualidad y Discapacidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>'+
'<li>Pensamiento Emprendedor - <strong>Código: </strong>80019 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

	  
});

})();




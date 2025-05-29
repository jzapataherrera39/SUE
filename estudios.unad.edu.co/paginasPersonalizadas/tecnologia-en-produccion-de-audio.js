(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2= [
{ periodo:"1",curso:"Cátedra Unadista", codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Introducción a la Tecnología en Producción de Audio",codigo:"213001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Entrenamiento Auditivo",codigo:"208031",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208031"] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"50010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Álgebra, Trigonometría y Geometría Analítica",codigo:"301301",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electivo Interdisciplinar Básico Común",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos del Sonido",codigo:"213003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Grabación",codigo:"213006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208031"] },
{ periodo:"2",curso:"Audio Digital",codigo:"213005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"3",curso:"Electivo Disciplinar Común", codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Sistemas de Refuerzo Sonoro",codigo:"213008",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Edición y Mezcla",codigo:"213009",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208031"] },
{ periodo:"3",curso:"Electivo Disciplinar Específico I", codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Fundamentos y Generalidades de Investigación", codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"4",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"4",curso:"Diseño Sonoro para Audiovisuales",codigo:"203338644",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208031"] },
{ periodo:"4",curso:"Masterización",codigo:"213012",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208031"] },
{ periodo:"4",curso:"Electivo Disciplinar Específico II", codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Proyecto de Grado", codigo:"213010",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Prácticas Integrales",codigo:"213013",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208031","900001"] },
{ periodo:"5",curso:"Diseño sonoro para Videojuegos",codigo:"213014",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208031"] },
{ periodo:"5",curso:"Electivos Complementarios", codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Disciplinar Específico III", codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: ["208031"] }
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
    '208031': '#d85c29',  
    '900001': '#003e60',
	'150001': '#03995F',  
    '302697748': '#67b6b2', 
    '302818466': '#892b7d',
    '302817911': '#842e2c',
	'302818468': '#e9b435',  
    
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
 

$scope.bas0 = '<p class="lateral1">Electivos Complementarios</p>'+
'<ul>'+
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
'<li>Actividad física y para la salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>'+
'<li>Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';
 
$scope.bas01 = '<p class="lateral1">Electivo Interdisciplinar Básico Común</p>'+
'<ul>'+
'<li>Emprendimiento Solidario - <strong>Código: </strong>105020 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

$scope.bas02 = '<p class="lateral1">Electivo Disciplinar Común</p>'+
'<ul>'+
'<li>Diseño Gráfico Digital - <strong>Código: </strong>213017 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

$scope.bas03 = '<p class="lateral1">Electivo Disciplinar Específico</p>'+
'<ul>'+
'<li>Acústica Ambiental - <strong>Código: </strong>208067 - <strong>Créditos: </strong>3</li>' +
'<li>Sonido en Vivo - <strong>Código: </strong>213011 - <strong>Créditos: </strong>3</li>' +
'<li>Audio Inmersivo - <strong>Código: </strong>203338645 - <strong>Créditos: </strong>3</li>'+
'<li>Producción Audiovisual - <strong>Código: </strong>213019 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

});

})();
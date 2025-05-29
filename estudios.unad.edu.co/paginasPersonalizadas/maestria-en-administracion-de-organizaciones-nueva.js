(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Pensamiento Estratégico Complejo y Gestión del Business Case",codigo:"107061",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Gobierno Corporativo y Sostenibilidad Organizacional",codigo:"107062",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Administración de Operaciones y Cadenas Globales de Valor", codigo:"107063",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Dirección de Marketing Integral",codigo:"107065",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Gestión Financiera y Mercado de Capitales",codigo:"107064",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Sistemas de Información para la Gestión de las Decisiones.",codigo:"107066",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Green Project Management",codigo:"107068",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Pensamiento Disruptivo para el Emprendimiento y el Desarrollo Humano",codigo:"107069",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"3",curso:"Seminario de Investigación",codigo:"107067",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Gestión del Conocimiento y la Innovación",codigo:"107070",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Métodos Cuantitativos y Cualitativos para los Negocios",codigo:"107071",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Electivo de Profundización 1",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Electivo de Profundización 2",codigo:"*",creditos:"4",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo de Profundización 3",codigo:"*",creditos:"4",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] }
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
    '202086787': '#d85c29',  
    '302817910': '#003e60',
	'302817912': '#41839d',  
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
 


//Línea de profundización 1 - Innovación Sustentable
$scope.bas01 = '<p class="lateral1">Línea de profundización 1 - Innovación Sostenible</p>'+
'<ul>'+
'<li>Desarrollo de habilidades directivas - <strong>Código: </strong>107072 - <strong>Créditos: </strong>3</li>' +
'<li>Entornos virtuales para el desarrollo de organizaciones inteligentes - <strong>Código: </strong>107073 - <strong>Créditos: </strong>3</li>' +
'<li>HR & people analityc  - <strong>Código: </strong>103098219 - <strong>Créditos: </strong>3</li>'+
'<li>Inteligencia estratégica - <strong>Código: </strong>102988010 - <strong>Créditos: </strong>3</li>'+
'<li>Negocios electrónicos e integración regional - <strong>Código: </strong>107076 - <strong>Créditos: </strong>4</li>'+
'</ul>'+
'<hr>'+
'<p class="lateral1">Línea de profundización 2 - Estrategias para la competitividad organizacional</p>'+
'<ul>'+
'<li>Gestión de la crisis y continuidad del negocio - <strong>Código: </strong>107077 - <strong>Créditos: </strong>3</li>' +
'<li>Técnicas y modelos de gestión organizacional - <strong>Código: </strong>107078 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de la reputación corporativa y perdurabilidad organizacional - <strong>Código: </strong>107079 - <strong>Créditos: </strong>4</li>'+
'<li>Herramientas y técnicas de la prospectiva organizacional y estratégica - <strong>Código: </strong>107080 - <strong>Créditos: </strong>4</li>'+
'<li>Smart data, machine learning y visualización de datos - <strong>Código: </strong>103098184 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  El estudiante del programa de posgrado debe matricular los cursos electivos correspondientes a 11 créditos, de acuerdo con la línea de profundización que escoja.</p>';


$scope.especializacionelectiva = [
{ periodo:"7",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"7",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"7",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"7",curso:"Inglés B2",codigo:"900004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0"}
];

	  
});

})();
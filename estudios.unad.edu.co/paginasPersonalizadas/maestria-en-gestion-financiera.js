(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Geopolítica y Economía Financiera",codigo:"102106858",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Gerencia Financiera",codigo:"102106859",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Métodos Cuantitativos y Estadísticos", codigo:"102106860",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo 1 de Profundización",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Desarrollo de Habilidades Directivas",codigo:"107072",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Finanzas Corporativas",codigo:"102106863",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Finanzas Social Solidaria",codigo:"102106864",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electivo 2 de Profundización",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Finanzas Internacionales y Mercados Financieros Globales",codigo:"102106862",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Valoración de Activos Financieros",codigo:"102106865",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Seminario de Investigación",codigo:"102106874",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Electivo 3 de Profundización",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Legislación y Regulación Financiera Local y Global",codigo:"102106861",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Gestión del Riesgo",codigo:"102106866",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo 4 de Profundización",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '302817909': '#d85c29',  
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
 



//Línea de profundización 1 - Gestión Integral
$scope.bas01 = '<p class="lateral1">Línea de profundización 1 - Gestión Integral</P>'+
'<ul>'+
'<li>Ing Economica Aplicada a las Finanzas - <strong>Código: </strong>102106867 - <strong>Créditos: </strong>3</li>' +
'<li>Técnicas y Modelos de Gestión Organ - <strong>Código: </strong>107078 - <strong>Créditos: </strong>3</li>' +
'<li>Sistemas de Informac Gestión Decisiones - <strong>Código: </strong>107066 - <strong>Créditos: </strong>3</li>'+
'<li>Gobierno Corporativo y Sostenibilidad Org - <strong>Código: </strong>107062 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p class="lateral1">Línea de profundización 2 - Finanzas Corporativas</P>'+
'<ul>'+
'<li>Valoración de Empresas y Banca de Invers - <strong>Código: </strong>102106868 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión para las Finanzas Públicas - <strong>Código: </strong>102106869 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión Fra Proyectos de Inversión - <strong>Código: </strong>102106870 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p class="lateral1">Línea de profundización 3 - Mercados de Capitales</P>'+
'<ul>'+
'<li>Gerencia Financiera Internacional - <strong>Código: </strong>102106871 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de Portafolios de Inversión - <strong>Código: </strong>102106872 - <strong>Créditos: </strong>3</li>' +
'<li>Valoración de Derivados Financieros - <strong>Código: </strong>102106873 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Los estudiantes pueden elegir libremente cuáles son los cursos electivos que desean matricular</p>';


$scope.especializacionelectiva = [
{ periodo:"7",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"3"},
{ periodo:"7",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"3"},
{ periodo:"7",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"3"}
];


	  
});

})();
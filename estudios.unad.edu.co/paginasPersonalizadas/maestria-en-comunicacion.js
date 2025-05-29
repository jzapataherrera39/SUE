(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Gestión de procesos de Comunicación",codigo:"402737727",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402737727"] },
{ periodo:"1",curso:"Ciudadanías Comunicativas",codigo:"406001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["406001"] },
{ periodo:"1",curso:"Educomunicación", codigo:"406005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["406005"] },
{ periodo:"1",curso:"Mediación cultural",codigo:"406003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["406003"] },


{ periodo:"2",curso:"Formulación de proyectos",codigo:"402737728",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402737727","402737728"] },
{ periodo:"2",curso:"Etnografía (posgrado)",codigo:"406018",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electiva 1",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Electiva 2",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Mediación y Práctica Investigativa",codigo:"406012",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402737727","402737728"] },
{ periodo:"3",curso:"Gestión de Ciudadanías Comunicativas",codigo:"406002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["406001"] },
{ periodo:"3",curso:"Gestión de Educomunicación",codigo:"406006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["406005"] },
{ periodo:"3",curso:"Gestión de la Mediación Cultural",codigo:"406004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["406003"] },


{ periodo:"4",curso:"Redacción de textos científicos",codigo:"402737729",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402737727"] },
{ periodo:"4",curso:"Comunicación de saberes",codigo:"402737730",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["402737727"] },
{ periodo:"4",curso:"Electiva 3",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva 4",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] }
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
    '402737727': '#d85c29',  
    '406003': '#003e60',
	'406005': '#03995F',  
    '406001': '#67b6b2', 
    '402737728': '#892b7d',
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
 


//Electiva 1 Componente de Ciencias Básicas
$scope.bas01 = '<p class="lateral1">Formación Electiva en Gestión de la Comunicación</p>'+
'<ul>'+
'<li>Diagnóstico de procesos de comunicación - <strong>Código: </strong>406009 - <strong>Créditos: </strong>3</li>' +
'<li>Planificación de la comunicación - <strong>Código: </strong>406008 - <strong>Créditos: </strong>3</li>' +
'<li>Estrategias de comunicación - <strong>Código: </strong>406010 - <strong>Créditos: </strong>3</li>'+
'<li>Gerencia, Liderazgo y Responsabilidad Social - <strong>Código: </strong>302117186 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Formación Electiva en Comunicación y Narrativas</p>'+
'<ul>'+
'<li>Comunicación digital - <strong>Código: </strong>402737731 - <strong>Créditos: </strong>3</li>'+
'<li>Estrategias digitales de comunicación - <strong>Código: </strong>402737732 - <strong>Créditos: </strong>3</li>'+
'<li>Nuevas narrativas digitales - <strong>Código: </strong>402737733 - <strong>Créditos: </strong>3</li>'+
'<li>Comunicación transmedia - <strong>Código: </strong>402737734 - <strong>Créditos: </strong>3</li>'+
'<li>Gerencia, Liderazgo y Responsabilidad Social - <strong>Código: </strong>302117186 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Electiva Interdisciplinar</p>'+
'<ul>'+
'<li>Conservadurismo y liberalismo - <strong>Código: </strong>405002 - <strong>Créditos: </strong>3</li>'+
'<li>Formulación de Políticas Públicas - <strong>Código: </strong>405007 - <strong>Créditos: </strong>3</li>'+
'<li>Seminario de profundización - <strong>Código: </strong>409017 - <strong>Créditos: </strong>3</li>'+
'<li>Seminario de profundización II - <strong>Código: </strong>409019 - <strong>Créditos: </strong>3</li>'+
'<li>Gerencia, Liderazgo y Responsabilidad Social - <strong>Código: </strong>302117186 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  El estudiante debe completar un total de 11 créditos electivos, por lo tanto, está en libertad de elegir créditos de una misma línea o combinar créditos de diferentes líneas de formación electiva según sus necesidades.</p>';

	  
});

})();








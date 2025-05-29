(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Seminario de educación y pedagogía",codigo:"522001",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Calidad equidad e inclusión",codigo:"522005",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Seminario de investigación en educación I",codigo:"519003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["519003"] },
{ periodo:"1",curso:"Curso de línea de profundización", codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"2",curso:"Didáctica",codigo:"522002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Currículo e innovación",codigo:"522003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Seminario de investigación en educación II",codigo:"519006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["519003"] },
{ periodo:"2",curso:"Curso de línea de profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Evaluación",codigo:"522004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Electiva I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Seminario de investigación en educación III",codigo:"519009",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["519003"] },
{ periodo:"3",curso:"Curso de línea de profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Electiva II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Seminario permanente de educación para todos",codigo:"	522014",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",clasificacion1:"nota", prerrequisitos: [] },
{ periodo:"4",curso:"Seminario de investigación en educación IV",codigo:"519011",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["519003"] },
{ periodo:"4",curso:"Curso de línea de profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] }
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
    '519003': '#d85c29',  
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
                       clasificacionFinal === 'nota' ? '4px solid #6CDF70' : ''
    };

    if (clasificacionFinal === 'Electiva') {
        styles['background-color'] = 'rgb(103, 182, 178)'; // Fondo para cursos Electiva
    } else if (clasificacionFinal === 'nota') {
        styles['background-color'] = '#6CDF70'; 
    }

    if (curso === $scope.selectedCurso) {
        styles['background-color'] = '#bcbebf'; // Fondo negro
        styles['color'] = '#333'; // Letras blancas
    }

    return styles;
};
 


//El seminario permanente de Educación para Todos
$scope.vnota= '<hr><p><strong>Nota: </strong>  * El <strong>Seminario permanente de educación para todos</strong> se inscribe una sola vez durante toda la formación por su carácter transversal, puede tomarlo en cualquiera de los 4 periodos académicos y es requisito de grado.</p>';


//Electiva 1 Componente de Ciencias Básicas
$scope.bas01 = '<p class="lateral1">Línea de profundización 1 - en Aprendizaje y Sociedad del Conocimiento</p>'+
'<ul>'+
'<li>Calidad del aprendizaje - <strong>Código: </strong>522009 - <strong>Créditos: </strong>2</li>' +
'<li>Globalización, aprendizaje y sociedad del conocimiento - <strong>Código: </strong>522007 - <strong>Créditos: </strong>3</li>' +
'<li>Diseño de ambientes  de aprendizaje - <strong>Código: </strong>522008 - <strong>Créditos: </strong>3</li>'+
'<li>Perspectivas y tendencias del aprendizaje - <strong>Código: </strong>522006 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Línea de profundización 2 - en Educación Tecnología e Innovación</p>'+
'<ul>'+
'<li>Innovación (en y con) tecnología y  calidad educativa - <strong>Código: </strong>522013 - <strong>Créditos: </strong>2</li>' +
'<li>Perspectivas, tendencias  y problemáticas  de la educación en  (y con) tecnología - <strong>Código: </strong>522010 - <strong>Créditos: </strong>3</li>' +
'<li>Educación y desarrollo del pensamiento tecnológico - <strong>Código: </strong>522011 - <strong>Créditos: </strong>3</li>'+
'<li>iseño e innovación  en educación en  (y con) tecnología - <strong>Código: </strong>522012 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> De la línea(s) de profundización que el estudiante elija deberá aprobar la totalidad de 11 créditos académicos con el fin de cumplir con el requisito formativo del número de créditos electivos a cursar.</p>';

//Electiva
$scope.basico3 = '<p class="lateral1">Electivas</p>'+
'<ul>'+
'<li>Disrupción Digital y su Impacto en la Educación - <strong>Código: </strong>502307063 - <strong>Créditos: </strong>3</li>' +
'<li>Aprendizaje Rizomático - <strong>Código: </strong>502307060 - <strong>Créditos: </strong>3</li>' +
'<li>Inteligencia Artificial Distribuida y su Impacto en la Educación - <strong>Código: </strong>502307061 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

	  
});

})();



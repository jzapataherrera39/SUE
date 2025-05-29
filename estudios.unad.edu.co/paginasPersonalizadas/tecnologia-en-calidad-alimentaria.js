(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [

{ periodo:"1",curso:"Catedra unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },
{ periodo:"1",curso:"Introducción a la tecnología en calidad alimentaria",codigo:"232003",creditos:"2",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias comunicativas (Componente Tecnología y Comunicación I)", codigo:"40003",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento lógico y matemático (Componente en Ciencias Básicas)",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento (Componente Tecnología y Comunicación II)",codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Electiva formación interdisciplinar básica común",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"2",curso:"Prestación de Servicio Social Unadista",codigo:"*",creditos:"0",tipo:"-",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },
{ periodo:"2",curso:"Cálculo diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Química general",codigo:"201102",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"2",curso:"Estadística y probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Biología",codigo:"201101",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"3",curso:"Ética y ciudadanía (Componente Social Solidario)",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Física General  ",codigo:"100413",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Química orgánica",codigo:"100416",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"3",curso:"Análisis y Control de calidad de alimentos",codigo:"216001",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Microbiología de Alimentos",codigo:"211624",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"4",curso:"Fundamentos y Generalidades de la Investigación (Componente Investigativo)",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Balance de Materia y Energía",codigo:"301103",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Bioquímica",codigo:"212020",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"4",curso:"Inocuidad Alimentaria",codigo:"232004",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva formación disciplinar común",codigo:"*",creditos:"3",tipo:"Teórico / Teórico - Práctico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva formación disciplinar especifica",codigo:"*",creditos:"3",tipo:"Teórico / Teórico - Práctico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Sistemas de auditorias",codigo:"232001",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Tecnología de productos de origen vegetal",codigo:"232008",creditos:"4",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["232008"] },
{ periodo:"5",curso:"Toxicología alimentaría",codigo:"217001",creditos:"2",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"5",curso:"Evaluación sensorial",codigo:"301118",creditos:"2",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva formación disciplinar especifica",codigo:"*",creditos:"2",tipo:"Teórico / Teórico - Práctico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva formación disciplinar común",codigo:"*",creditos:"3",tipo:"Teórico / Teórico - Práctico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva complementaria",codigo:"*",creditos:"2",tipo:"Teórico / Teórico - Práctico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"6",curso:"Análisis de riesgos en alimentos",codigo:"232007",creditos:"2",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Tecnología de productos de origen animal",codigo:"232002",creditos:"4",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["232008"] },
{ periodo:"6",curso:"Sistemas de calidad y seguridad de alimentos",codigo:"232018",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Trabajo de grado",codigo:"232020",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva formación disciplinar especifica",codigo:"*",creditos:"2",tipo:"Teórico / Teórico - Práctico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva formación interdisciplinar básica común",codigo:"*",creditos:"2",tipo:"Teórico / Teórico - Práctico / Práctico",clasificacion:"Electiva", prerrequisitos: [] }
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
    '80017': '#d85c29',  
    '201102': '#003e60',
	'900001': '#e9b435',  
    '232008': '#03995F', 
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

//Electiva formación interdisciplinar básica común
$scope.bas01 = '<p class="lateral1">Electiva formación interdisciplinar básica común</p>'+
'<ul>'+
'<li >Algebra, trigonometría y geometría - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>' +
'<li >Fundamentos de administración - <strong>Código: </strong>100500 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


//Electiva formación disciplinar común
$scope.bas02 = '<p class="lateral1">Electiva formación disciplinar común</p>'+
'<ul>'+
'<li >Química analítica e instrumental - <strong>Código: </strong>301102 - <strong>Créditos: </strong>3</li>' +
'<li >Química Ambiental - <strong>Código: </strong>401549 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Electiva complementaria
$scope.bas03 = '<p class="lateral1">Electiva complementaria</p>'+
'<ul>'+
'<li >Proyecto de vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Electiva formación disciplinar especifica
$scope.bas04 = '<p class="lateral1">Electiva formación disciplinar especifica</p>'+
'<p class="lateral1">Línea de Profundización en Calidad</p>'+
'<ul>'+
'<li >Conservación de alimentos - <strong>Código: </strong>232005 - <strong>Créditos: </strong>3</li>' +
'<li >Sistemas de gestión ambiental - <strong>Código: </strong>202025 - <strong>Créditos: </strong>2</li>' +
'<li >Sanidad y legislación alimentaría - <strong>Código: </strong>232014 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p class="lateral1">Línea de  Profundización en Inocuidad</p>'+
'<ul>'+
'<li >Alimentación y Nutrición - <strong>Código: </strong>232006 - <strong>Créditos: </strong>3</li>' +
'<li >Planeación alimentaria y nutricional - <strong>Código: </strong>301015 - <strong>Créditos: </strong>2</li>' +
'<li >Salud ocupacional en la industria de alimentos - <strong>Código: </strong>302060 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

	  
});

})();


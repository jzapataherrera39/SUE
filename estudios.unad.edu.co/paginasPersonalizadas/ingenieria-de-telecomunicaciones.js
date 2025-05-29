(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Introducción a la Ingeniería de Telecomunicaciones",codigo:"202087709",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo Componente en Ciencias Básicas",codigo:"",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"2",curso:"Cálculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410","208019"] },
{ periodo:"2",curso:"Álgebra Lineal",codigo:"208046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos de Programación",codigo:"213022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"2",curso:"Análisis de Circuitos",codigo:"243003",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"3",curso:"Cálculo Integral",codigo:"100411",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410","100411"] },
{ periodo:"3",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208019"] },
{ periodo:"3",curso:"Software para Ingeniería",codigo:"203036",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"3",curso:"Electrónica Análoga",codigo:"243006",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"3",curso:"Electivo de Formación Complementaria",codigo:"",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"4",curso:"Ecuaciones Diferenciales",codigo:"100412",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"4",curso:"Electromagnetismo",codigo:"201424",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208019"] },
{ periodo:"4",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"4",curso:"Electrónica Digital",codigo:"243004",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"4",curso:"Señales y Sistemas",codigo:"203042",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100411"] },
{ periodo:"4",curso:"Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"5",curso:"Cálculo Multivariado",codigo:"203057",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"5",curso:"Fundamentos de Redes",codigo:"2150506",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["2150506"] },
{ periodo:"5",curso:"Proyecto de Ingeniería I",codigo:"202337120",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Microprocesadores y Microcontroladores",codigo:"309696",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"5",curso:"Sistemas de Comunicación",codigo:"202087710",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100411"] },
{ periodo:"5",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },


{ periodo:"6",curso:"Principios de Enrutamiento",codigo:"2150507",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["2150506"] },
{ periodo:"6",curso:"Electromagnetic Theory and Waves",codigo:"202087724",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208019"] },
{ periodo:"6",curso:"Formulación y Ev. de Proyectos de Ingeniería",codigo:"212015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"6",curso:"Electivo Disciplinar Común I",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electivo Disciplinar Específico I",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["100411"] },
{ periodo:"6",curso:"Ingles B1+",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },


{ periodo:"7",curso:"Tecnologías Emergentes en Lan y Wan",codigo:"202087711",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["2150506"] },
{ periodo:"7",curso:"Antenas y propagación",codigo:"208019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["208019"] },
{ periodo:"7",curso:"Proyecto de Ingeniería II",codigo:"202337121",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"7",curso:"IoT",codigo:"202087712",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"7",curso:"Electivo Disciplinar Específico II",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["100411"] },
{ periodo:"7",curso:"Electivo Disciplinar Común II",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"8",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Gestión de Redes",codigo:"202087713",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo de Formación Complementaria II",codigo:"",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo Componente Investigativo",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo Disciplinar Específico III",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["100411"] },
{ periodo:"8",curso:"Electivo Disciplinar Común III",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"9",curso:"Emprendimiento Solidario",codigo:"105020",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Legislación TIC",codigo:"202087714",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Proyecto de Grado",codigo:"202087715",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"9",curso:"Seguridad en Redes de Datos",codigo:"202087716",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo Disciplinar Específico IV",codigo:"",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["100411"] },

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
    '200611': '#d85c29',  
    '100410': '#003e60',
   	'208019': '#03995F',  
    '243003': '#67b6b2', 
    '900001': '#e9b435',
    '100411': '#842e2c',
	  '150001': '#892b7d',  
    '2150506': '#1690E0',  
  	 
	
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


// Electivo Disciplinar Específico

$scope.basico1 = '<p class="lateral1">Electivo Disciplinar Específico</p>' +

'<p class="lateral1">Línea De Profundización I: Comunicaciones Inalámbricas</p>' +
'<ul>' +
  '<li>Curso: Gestión Y Optimización del Espectro - <strong>Código: </strong>202087717 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Redes Inalámbricas - <strong>Código: </strong>202087718 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Microondas - <strong>Código: </strong>208018 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Mobile and Satellite Communications - <strong>Código: </strong>202087719 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea De Profundización II: Comunicaciones Soportadas En Medios Guiados</p>' +
'<ul>' +
  '<li>Curso: Redes de Acceso Cableadas - <strong>Código: </strong>202087720 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Conmutación - <strong>Código: </strong>208053 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Comunicaciones Ópticas - <strong>Código: </strong>202087721 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Advanced Transmission Systems - <strong>Código: </strong>202087722 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea De Profundización III: Conectividad IoT Para El Desarrollo Sostenible</p>' +
'<ul>' +
  '<li>Curso: Ingeniería De Datos - <strong>Código: </strong>202037699 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Applied Artificial Intelligence - <strong>Código: </strong>202037703 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Comunicaciones Industriales Avanzadas - <strong>Código: </strong>203047 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Ciudades Inteligentes Y Sostenibles - <strong>Código: </strong>202087723 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>'+
'<p><strong>Nota: </strong> El estudiante podrá escoger 1 línea de profundización de acuerdo a sus intereses de formación para dar cumplimiento a los 12 créditos electivos establecidos en la malla curricular.</p>';



//Electivo Componente Disciplinar Común

$scope.basico2 = '<p class="lateral1">Electivo Componente Disciplinar Común</p>' +
'<ul>' +
  '<li>Curso: Linux - <strong>Código: </strong>250550 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Ingeniería Económica - <strong>Código: </strong>212067 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Planificación, Programación y Control de Proy. - <strong>Código: </strong>212055 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Procesamiento Digital- <strong>Código: </strong>202037702 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Programación - <strong>Código: </strong>213023 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Lenguajes Interpretados - <strong>Código: </strong>202037696 - <strong>Créditos: </strong>3</li>' +
'</ul>';

//Componente en Ciencias Básicas

$scope.basico3 = '<p class="lateral1">Componente en Ciencias Básicas</p>' +
'<ul>' +
  '<li>Curso: Electricidad y Electromagnetismo - <strong>Código: </strong>2150502 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Álgebra Trigonometría y Geometría Analítica - <strong>Código: </strong>301301- <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Fundamentos en Ciencias Naturales - <strong>Código: </strong>202087725 - <strong>Créditos: </strong>3</li>' +
'</ul>';

//Componente Investigativo

$scope.bas01 = '<p class="lateral1">Componente Investigativo</p>' +
'<ul>' +
  '<li>Curso: Metodología y Técnicas de Investigación - <strong>Código: </strong>551059 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Investigación Cuantitativa - <strong>Código: </strong>206049- <strong>Créditos: </strong>3</li>' +
'</ul>';

//Electivo Formación Complementaria

$scope.bas02 = '<p class="lateral1">Electivo Formación Complementaria</p>' +
'<ul>' +
  '<li>Curso: Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Actividad Física para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Discapacidad y Sexualidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: La Persona Como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Creatividad para el Emprendimiento - <strong>Código: </strong>80018 - <strong>Créditos: </strong>2</li>' +
  '<li>Curso: Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Protocolo- <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Pensamiento Emprendedor - <strong>Código: </strong>80019 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'</ul>';


});

})();
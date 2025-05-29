(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {

  $scope.mt2 = [
{ periodo:"1",curso:"Álgebra, Trigonometría y Geometría Analítica",codigo:"301301",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico Matemático",codigo:"200611",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"1",curso:"Introducción a la Ingeniería",codigo:"212014",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014"] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200610"] },
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },

{ periodo:"2",curso:"Cálculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"2",curso:"Electivo Interdisciplinar Básico Común",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Algebra Lineal",codigo:"208046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"2",curso:"Fundamentos de Informática y Redes",codigo:"213016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014"] },
{ periodo:"2",curso:"Fundamentos de Arte y Diseño",codigo:"213015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200610"] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },

{ periodo:"3",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"3",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"3",curso:"Fundamentos de Programación",codigo:"213022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"3",curso:"Guion y Diseño Multimedia",codigo:"213018",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014","213018"] },
{ periodo:"3",curso:"Diseño Gráfico Digital",codigo:"213017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200610"] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },

{ periodo:"4",curso:"Cálculo Integral",codigo:"100411",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"4",curso:"Proyecto de Ingeniería I",codigo:"212020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"4",curso:"Programación",codigo:"213023",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200611","213023"] },
{ periodo:"4",curso:"Requerimientos y Modelado Multimedia",codigo:"213021",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014"] },
{ periodo:"4",curso:"Producción Audiovisual",codigo:"213019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213018","213019"] },
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },

{ periodo:"5",curso:"Cálculo Multivariado",codigo:"203057",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"5",curso:"Ingeniería Económica",codigo:"212067",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Programación Web",codigo:"213025",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"5",curso:"Bases de Datos Multimedia",codigo:"213024",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213023"] },
{ periodo:"5",curso:"Diseño y Animación 2D",codigo:"213020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213018"] },
{ periodo:"5",curso:"English Composition II",codigo:"COM-121",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },

{ periodo:"6",curso:"Matemáticas Discretas",codigo:"204041",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"6",curso:"Form. y Ev. de Proyectos de Ingeniería",codigo:"212015",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"6",curso:"Electivo Disciplinar Específico (I)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"6",curso:"Diseño Sonoro Multimedia",codigo:"213031",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213019"] },
{ periodo:"6",curso:"Modelado por Computadora",codigo:"213028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213018"] },
{ periodo:"6",curso:"Multimedia Project Management",codigo:"213032",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["80017"] },

{ periodo:"7",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Proyecto de Ingeniería II",codigo:"212027",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"7",curso:"Electivo Disciplinar Específico (II)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"7",curso:"Programación para Videojuegos",codigo:"213027",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213023"] },
{ periodo:"7",curso:"Diseño y Animación 3D",codigo:"213029",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213018"] },
{ periodo:"7",curso:"Diseño Interactivo",codigo:"213030",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213019","213030"] },

{ periodo:"8",curso:"Electivo de Formación Complementaria",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Seminario de Investigación",codigo:"100108",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"8",curso:"Electivo Disciplinar Específico (III)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"8",curso:"Electivo Interdisciplinar Básico Común",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Aplicaciones Multimedia",codigo:"213026",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213019"] },

{ periodo:"9",curso:"Electivo de Formación Complementaria",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Trabajo de Grado",codigo:"213035",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"9",curso:"Electivo Disciplinar Específico (IV)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"9",curso:"Validación y Verificación Multimedia",codigo:"213033",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213030"] },
{ periodo:"9",curso:"Seguridad Informática",codigo:"213034",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213019"] },

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
    '301301': '#67b6b2',  
    '200611': '#003e60',
	  '212014': '#03995F',  
    '200610': '#842e2c', 
    '80017': '#41839d',
    '213018': '#e9b435',
	  '213023': '#1690E0',  
    '213019': '#6CDF70',  
    '150001': '#a72e47',  
    '*': '#892b7d',  
    '213030': '#d85c29',  
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
 
//Electivo Disciplinar Específico


//Electivo Disciplinar Específico (I)
$scope.basico1 = '<p class="tit3 h5">Electivos Disciplinares Específicos</p>' +
'<p class="lateral1">Línea de profundización I: Marketing Multimedia</p>'+
'<ul>' +
'<li><strong>Curso: </strong> Marketing Multimedia - <strong>Código: </strong>213036 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Plan de Marketing Multimedia - <strong>Código: </strong>213037 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Marketing en Buscadores Web - <strong>Código: </strong>213038 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Social Media - <strong>Código: </strong>213039 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<p class="lateral1">Línea de profundización II: Videojuegos</p>'+
'<ul>' +
'<li><strong>Curso: </strong> Creación de Entornos y Personajes - <strong>Código: </strong>213040 - <strong>Créditos: </strong>3</li>'+
'<li><strong>Curso: </strong> Videogames Optimization - <strong>Código: </strong>213042 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Videojuegos Online y Multiplayer - <strong>Código: </strong>213041 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Realidad Virtual - <strong>Código: </strong>213043 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<p class="lateral1">Línea de profundización III: Gestión de Proyectos Multimedia</p>'+
'<ul>' +
'<li><strong>Curso: </strong> Plan de Negocios Multimedia - <strong>Código: </strong>213044 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Gestión de Desarrollo Multimedia - <strong>Código: </strong>213045 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Gerencia de Proyectos Multimedia - <strong>Código: </strong>213047 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong> Risk Management and Quality - <strong>Código: </strong>213046 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>'+
'<p><strong>Nota: </strong> El estudiante podrá escoger 1 línea de profundización de acuerdo a sus intereses de formación para dar cumplimiento a los 12 créditos electivos establecidos en la malla curricular.</p>';




//Electivo Interdisciplinar Básico Común

$scope.basico2 = '<p class="tit3 h5">Electivo Interdisciplinar Básico Común</p>' +
  '<p class="lateral1">Escuela de Educación</p>'+
'<ul>'+
    '<li><strong>Curso: </strong> Didáctica - <strong>Código: </strong>401305 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong> Educación inclusiva en ambientes de aprendizaje - <strong>Código: </strong>50011 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<p class="lateral1">Escuela de Ciencias Sociales, Artes y Humanidades</p>'+
'<ul>'+
    '<li><strong>Curso: </strong> Video - <strong>Código: </strong>408017 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong> Arte Interactivo - <strong>Código: </strong>408025 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>';


//Electivo de Formación Complementaria I

$scope.basico3 = '<p class="tit3 h5">Electivo de Formación Complementaria</p>' +
  '<ul>' +
    '<li><strong>Curso: </strong> Social Media - <strong>Código: </strong>213039 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong> Videogames Optimization - <strong>Código: </strong>213042 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong> Risk Management and Quality - <strong>Código: </strong>213046 - <strong>Créditos: </strong>3</li>' +
  '</ul>' +
  '<hr>';
});

})();
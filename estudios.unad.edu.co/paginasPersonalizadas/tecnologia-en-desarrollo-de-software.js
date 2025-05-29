(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción al Desarrollo de Software",codigo:"204017",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"1",curso:"Pensamiento Lógico Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Cátedra Unadista", codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo Interdisciplinar Básico Común I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"2",curso:"Algoritmos y Programación",codigo:"202047920",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"2",curso:"Teoría de Sistemas en las Organizaciones",codigo:"204016",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"2",curso:"Matemáticas Discretas",codigo:"204041",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Estadística Descriptiva",codigo:"204040",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },


{ periodo:"3",curso:"Programación Avanzada",codigo:"202047919",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["204017","202047919"] },
{ periodo:"3",curso:"Álgebra Lineal",codigo:"208046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Análisis de Requisitos",codigo:"204019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"3",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Electivo Disciplinar Específico I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },


{ periodo:"4",curso:"Interacción Humano Computador",codigo:"202016916",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"4",curso:"Desarrollo de Aplicaciones para la Web",codigo:"202047916",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"4",curso:"Modelado y Administración de Bases de Datos",codigo:"202047921",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"4",curso:"Modelado de Procesos",codigo:"202047918",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["204017"] },
{ periodo:"4",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"4",curso:"Electivo Disciplinar Específico II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },


{ periodo:"5",curso:"Desarrollo de Aplicaciones para Móvil",codigo:"202047917",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["202047919"] },
{ periodo:"5",curso:"Documentation and Techniques of Software Test",codigo:"204027",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",prerrequisitos: ["202047919"] },
{ periodo:"5",curso:"Electivo Formación Complementaria I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Disciplinar Común I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Trabajo de Grado",codigo:"202047922",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Electivo Disciplinar Específico III",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
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
    '204017': '#d85c29',  
    '900001': '#003e60',
	'202047919': '#03995F',  
    '*': '#a72e47', 
    '150001': '#e9b435',
    '302817911': '#842e2c',
	'302818468': '#41839d',  
    
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
 

 

//Electivo Interdisciplinar Básico Común I
$scope.basico = '<p class="lateral1">Electivo Interdisciplinar Básico Común</p>'+
'<ul>'+
'<li>Algebra, Trigonometría y Geometria Analítica - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>' +
'<li>Biología - <strong>Código: </strong>201101 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de Economía - <strong>Código: </strong>105001 - <strong>Créditos: </strong>3</li>'+
'<li>Pensamiento Administrativo - <strong>Código: </strong>112002 - <strong>Créditos: </strong>3</v>'+
'<li>Contabilidad Financiera Básica - <strong>Código: </strong>106003 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo.</p>';

//Electivo Disciplinar Común I
$scope.basico1 = '<p class="lateral1">Electivo Disciplinar Común</p>'+
'<ul>'+
'<li>Excel Avanzado - <strong>Código: </strong>212059 - <strong>Créditos: </strong>3</li>' +
'<li>Metodología de Gestión de Proyectos - <strong>Código: </strong>212056 - <strong>Créditos: </strong>3</li>' +
'<li>Herramientas y Software para Gestión de Proyecto - <strong>Código: </strong>212057 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo.</p>';



//Electivo Formación Complementaria I
$scope.basico2 ='<p class="lateral1">Electivo Formación Complementaria</p>'+
'<ul>'+
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
'<li>Actividad Física para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>'+
'<li>La Persona como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>'+
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>'+
'<li>Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>'+
'<li>Discapacidad y Sexualidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>'+
'<li>Creatividad para el Emprendimiento - <strong>Código: </strong>80018 - <strong>Créditos: </strong>2</li>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>2</li>'+
'<li>Generación de Ideas de Negocio - <strong>Código: </strong>110013 - <strong>Créditos: </strong>3</li>'+
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo.</p>';


//Electivo Disciplinar Específico 
$scope.basico3 ='<p class="lateral1">Línea de profundización I: metodologías de desarrollo de software</p>'+
'<ul>'+
'<li>Desarrollo De Software Seguro - <strong>Código: </strong>202047923 - <strong>Créditos: </strong>3</li>' +
'<li>Metodologías Ágiles - <strong>Código: </strong>202047924 - <strong>Créditos: </strong>3</li>' +
'<li>Metodologías Orientadas a la Innovación - <strong>Código: </strong>202047925 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Línea de profundización II: gestión de datos</p>'+
'<ul>'+
'<li>Gobierno de Datos - <strong>Código: </strong>202047926 - <strong>Créditos: </strong>3</li>' +
'<li>Introducción a los Metadatos - <strong>Código: </strong>204031 - <strong>Créditos: </strong>3</li>' +
'<li>Tecnologías ETL - <strong>Código: </strong>204032 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Línea de profundización III: desarrollo productivo de software</p>'+
'<ul>'+
'<li>Desarrollo Low Code - <strong>Código: </strong>202047927 - <strong>Créditos: </strong>3</li>' +
'<li>Framework para el Desarrollo Web - <strong>Código: </strong>202047928 - <strong>Créditos: </strong>3</li>' +
'<li>Framework para el Desarrollo Aplicaciones Móviles - <strong>Código: </strong>202047929 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Líneas de Profundización: El estudiante debe escoger una línea de profundización y cursar y aprobar los tres cursos que la componen. Por ejemplo, si selecciona la línea de METODOLOGÍAS DE DESARROLLO DE SOFTWARE, debe cursar: Desarrollo de software seguro, Metodologías ágiles y Metodologías orientadas a la innovación. Son requisitos de grado la aprobación de una opción de grado y la presentación de la prueba de Estado.</p>';


});
})();









  






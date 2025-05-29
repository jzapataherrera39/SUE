(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Química General",codigo:"201102",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"1",curso:"Álgebra, Trigonometría y Geometría Analítica",codigo:"301301",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas", codigo:"50010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Introducción a la Problemática y Estudio del Ambiente",codigo:"358001",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Química Inorgánica",codigo:"358005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Cálculo Diferencial",codigo:"30176",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"2",curso:"Preparación y Análisis de Muestras de Agua",codigo:"358004",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["358004"] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electiva Campo de Formación Complementario",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Química Orgánica",codigo:"300047",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"3",curso:"Caracterización de Contaminantes Atmosférico",codigo:"358007",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Sistemas de Abastecimiento de Agua",codigo:"358002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100413"] },
{ periodo:"3",curso:"Estadística y Probabilidad",codigo:"100105",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Electiva Componente TIC",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Ordenamiento Territorial",codigo:"303042",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Sistemas de Tratamiento de Aguas Residuales",codigo:"358003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["358004"] },
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"4",curso:"Termodinámica",codigo:"201015",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100413"] },
{ periodo:"4",curso:"Biología Ambiental",codigo:"358006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["358006"] },
{ periodo:"4",curso:"Electiva Disciplinar Específica",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Saneamiento Ambiental Urbano y Rural",codigo:"303044",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Educación Ambiental",codigo:"358028",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva Campo de Formación Complementario",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Inglés B2",codigo:"900004",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"5",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Microbiología Ambiental",codigo:"358010",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["358006"] },
{ periodo:"5",curso:"Electiva Disciplinar Específica",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
 
{ periodo:"6",curso:"Sistemas de Tratamiento y Disposición Final de Residuos Sólidos",codigo:"358012",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Higiene y Seguridad Laboral",codigo:"303040",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Salud Pública",codigo:"303041",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Prestación Servicio Social Unadista (Requisito de grado)",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Opción de Grado",codigo:"303043",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"6",curso:"Control de la Contaminación de Alimentos",codigo:"303039",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["358006"] },
{ periodo:"6",curso:"Electiva Campo de Formación Complementario",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '201102': '#d85c29',  
    '301301': '#003e60',
	'358004': '#03995F',  
    '900001': '#67b6b2', 
    '100413': '#892b7d',
    '358006': '#842e2c',
	'150001': '#e9b435',  
    
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


//Electivos Interdisciplinares Común
$scope.bas01 = '<p class="lateral1">Electivas Formación Interdisciplinar Básica Común</p>'+
'<ul>'+
'<li>Excel Avanzado - <strong>Código: </strong>212059 - <strong>Créditos: </strong>3</li>' +
'<li>Introducción a la Programación - <strong>Código: </strong>301304 - <strong>Créditos: </strong>3</li>' +
'<li>Cibercultura - <strong>Código: </strong>403037 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Cursos Electivos del Componente Disciplinar Específico
$scope.bas02 = '<p class="lateral1">Electivas del Componente Disciplinar Específico</p>'+
'<hr>' +
'<p class="lateral1">Recurso Hídrico</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Manejo de Aguas Residuales en Pequeñas Comunidades - <strong>Código: </strong>358041 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Manejo de Aguas Subterraneas - <strong>Código: </strong>358042 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="lateral1">Calidad de Aire</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Caracterización de Fenómenos Meteorológicos - <strong>Código: </strong>358026 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Control y Medición de Ruido - <strong>Código: </strong>358058 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="lateral1">Recurso Suelo</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Procesos de Biorremediación - <strong>Código: </strong>358025 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Manejo y Conservación de Suelos - <strong>Código: </strong>30160 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>Solo se debe seleccionar un curso (1) electivo</p>';

//Electivo Formación Complementaria
$scope.bas03 = '<p class="lateral1">Electivo Formación Complementaria</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La Persona como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Pedagogía y Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<li>Actividad Física y para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>3</li>' +
'<li>Pensamiento Emprendedor - <strong>Código: </strong>80019 - <strong>Créditos: </strong>1</li>' +
'<li>Creatividad para el Emprendimiento - <strong>Código: </strong>80018 - <strong>Créditos: </strong>2</li>' +
'<li>Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
'<li>Sexualidad y Discapacidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>' +
'<li>Hoja de Vida - <strong>Código: </strong>300040 - <strong>Créditos: </strong>1</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';



});

})();
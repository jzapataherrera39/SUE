(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Cátedra Unadista​",codigo:"80017​",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Fundamentos de Seguridad y Salud en el Trabajo",codigo:"153001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento lógico y matemático​", codigo:"200611​",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y Ciudadanía​",codigo:"40001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Biología celular y molecular​​",codigo:"151009​",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento​",codigo:"200610​",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Inglés A1​",codigo:"900001​",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Morfofisiología​",codigo:"401503",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Telesalud​​",codigo:"15001​",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Curso Electivo Componente Tecnologías de la Información y comunicación",codigo:"*",creditos:"3",tipo:"Metodológia",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos de Salud Pública​​",codigo:"153002​",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Curso Electivo Componente Económico Administrativo",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Fundamentos y generalidades de investigación​",codigo:"150001​",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Bioética​",codigo:"151001​",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Administración en salud​",codigo:"153026​",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Medicina preventiva y del trabajo​​",codigo:"153004​",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Electivo Disciplinar Común I",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Vigilancia Epidemiológica​",codigo:"153003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Condiciones de seguridad I​",codigo:"153008",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["153008"] },
{ periodo:"4",curso:"Condiciones de la tarea I​",codigo:"153006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["153006"] },
{ periodo:"4",curso:"Condiciones del Ambiente de Trabajo​",codigo:"153005",creditos:"3",tipo:"Metodológia",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo Disciplinar Común II",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo Disciplinar Específico I",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Condiciones de la organización del trabajo​​",codigo:"153010​",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Condiciones de seguridad II​​",codigo:"153009",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["153008"] },
{ periodo:"5",curso:"Condiciones de la Tarea II",codigo:"153007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["153006"] },
{ periodo:"5",curso:"Electivo de Formación Complementaria I",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Disciplinar Específico II",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"6",curso:"Trabajo de Grado​​",codigo:"153012",creditos:"3",tipo:"M",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Práctica Profesional",codigo:"153011​",creditos:"5",tipo:"P",clasificacion:"Obligatorio", prerrequisitos: ["153008"] },
{ periodo:"6",curso:"Electivo de Formación Complementaria II",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electivo Disciplinar Específico III",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electivo Disciplinar Específico IV",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '900001': '#d85c29',  
    '153008': '#003e60',
	'153006': '#03995F',  
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
  
  
//Electiva disciplinar comun
$scope.basico1 = '<p class="lateral1">Electiva disciplinar común</p>'+
'<ul>'+
'<li>Terapias Naturales - <strong>Código: </strong>151050 <strong>Créditos: </strong>3</li>' +
'<li>Bioseguridad - <strong>Código: </strong>151054 - <strong>Créditos: </strong>3</li>'+
'<li>Cuidados Básicos de Enfermería - <strong>Código: </strong>151057 - <strong>Créditos: </strong>3</li>'+
'<li>Atención Psicosocial y salud Integral a victimas - <strong>Código: </strong>151053 - <strong>Créditos: </strong>3</li>'+
'<li>Primer Respondiente - <strong>Código: </strong>151055 - <strong>Créditos: </strong>3</li>'+
'<li>Educación para la Salud - <strong>Código: </strong>151056 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


//ELECTIVA COMPONENTE INTERDISCIPLINARBÁSICO COMÚN
//Componente Tecnologías de la información y comunicación 
$scope.basico2 = '<p class="lateral1">Componente Tecnologías de la información y comunicación</p>'+
'<ul>'+
'<li>Competencias Comunicativas - <strong>Código: </strong>50010 <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//componente Económico administrativo
$scope.basico3 = '<p class="lateral1">Componente Económico administrativo</p>'+
'<ul>'+
'<li>Fundamentos en Gestión Integral - <strong>Código: </strong>112001 <strong>Créditos: </strong>3</li>' +
'<li>Responsabilidad Social Empresarial - <strong>Código: </strong>120002l <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento Solidario - <strong>Código: </strong>105020 <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


//ELECTIVA DISCIPLINAR ESPECÍFICA
//Línea de Profundización I: Promoción de la salud y calidad de vida en el trabajo
$scope.basico4 = '<p class="lateral1">Línea de Profundización I: Promoción de la salud y calidad de vida en el trabajo</p>'+
'<ul>'+
'<li>Equidad en los servicios de Salud - <strong>Código: </strong>153013 <strong>Créditos: </strong>3</li>' +
'<li>Legislación en Riesgos Laborales - <strong>Código: </strong>153017 <strong>Créditos: </strong>3</li>' +
'<li>Promoción de la Salud y Calidad de vida en el Trabajo - <strong>Código: </strong>153014 <strong>Créditos: </strong>3</li>' +
'<li>Formulación y evaluación de proyecto en seguridad y salud en el trabajo - <strong>Código: </strong>153016 <strong>Créditos: </strong>3</li>' +
'<li>Entornos de Trabajo Saludable - <strong>Código: </strong>153015 <strong>Créditos: </strong>3</li>' +
'<li>Participación social, comunitaria y ciudadana - <strong>Código: </strong>153018 <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p class="lateral1">Línea de Profundización II: Gestión de la Seguridad y Salud en el Trabajo</p>'+
'<ul>'+
'<li>Costos y presupuestos - <strong>Código: </strong>153022 <strong>Créditos: </strong>3</li>' +
'<li>Gestión Ambiental - <strong>Código: </strong>153020 <strong>Créditos: </strong>3</li>' +
'<li>Psicología Organizacional - <strong>Código: </strong>153023 <strong>Créditos: </strong>3</li>' +
'<li>Garantía de calidad del sistema de Gestión de Riesgos Laborales - <strong>Código: </strong>153019 <strong>Créditos: </strong>3</li>' +
'<li>Sistemas Integrados de Gestión - <strong>Código: </strong>153024 <strong>Créditos: </strong>3</li>' +
'<li>Ergonomía - <strong>Código: </strong>153021 <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar una línea de profundización</p>';


//ELECTIVAS DE FORMACIÓN COMPLEMENTARIA
$scope.basico5 = '<p class="lateral1">Electivas Formación Complementaria</p>'+
'<ul>'+
'<li>Actividad física y para la salud - <strong>Código: </strong>80020 <strong>Créditos: </strong>2</li>' +
'<li>Salud oral - <strong>Código: </strong>80003 <strong>Créditos: </strong>2</li>' +
'<li>Proyecto de vida - <strong>Código: </strong>80002 <strong>Créditos: </strong>2</li>' +
'<li>La persona como ser trascendente - <strong>Código: </strong>80004 <strong>Créditos: </strong>2</li>' +
'<li>Danza - <strong>Código: </strong>80012 <strong>Créditos: </strong>2</li>' +
'<li>Discapacidad y sexualidad - <strong>Código: </strong>80011 <strong>Créditos: </strong>2</li>' +
'<li><strong>Curso: </strong>Psicología para la solución de conflictos - <strong>Código: </strong>80004 <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';
	  


});

})();





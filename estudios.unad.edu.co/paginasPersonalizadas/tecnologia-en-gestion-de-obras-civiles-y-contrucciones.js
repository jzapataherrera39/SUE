(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {

$scope.mt2 = [

{ periodo:"1",curso:"Competencias comunicativas",codigo:"50010",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Fundamentos de Administración",codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["105015", "211622"] },
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Fundamentos de matemáticas",codigo:"200612",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["*"] },

{ periodo:"2",curso:"Organismos reguladores y legislación aplicable a OCC", codigo:"102457384",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102457384"] },
{ periodo:"2",curso:"Contabilidad financiera básica", codigo:"106003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["105015"] },
{ periodo:"2",curso:"Fundamentos de Economía",codigo:"105001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["211622"] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Ética y ciudadanía",codigo:"40001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["40001"] },	

{ periodo:"3",curso:"Gestión del talento humano	",codigo:"121012",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["102457384"] },
{ periodo:"3",curso:"Estadística y probabilidad",codigo:"211622",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["105015", "211622"] },
{ periodo:"3",curso:"Electiva disciplinar común I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["211622"] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Electivo Componente de Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"3",curso:"Electivo Campo de formación complementaria I",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Costos aplicados a obras de construcción",codigo:"102457386",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102457384","102457386" ] },
{ periodo:"4",curso:"Fundamentos y generalidades de investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["105015"] },
{ periodo:"4",curso:"Electivo Campo de formación complementaria II",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"4",curso:"Electivo Componente Social Solidario",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: ["40001"] },
{ periodo:"4",curso:"Lectura e interpretación de planos",codigo:"102457385",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"5",curso:"Responsabilidad Social Empresarial",codigo:"120002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["102457384"] },
{ periodo:"5",curso:"Presupuestos en las obras de construcción",codigo:"102457387",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102457386" ] },
{ periodo:"5",curso:"Servicio social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo disciplinar especifico I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva disciplinar común II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Campo de formación complementaria III",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"6",curso:"Construcción sustentable",codigo:"103009",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["102457384"] },
{ periodo:"6",curso:"Gestión de interventoria",codigo:"102457388",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102457384"] },
{ periodo:"6",curso:"Diseño y evaluación de proyectos",codigo:"105005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102457384"] },
{ periodo:"6",curso:"Electivo disciplinar especifico II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electivo disciplinar especifico III",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] }
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
    '105015': '#6CDF70',  
    '211622': '#842e2c',  
	'*': '#1690E0',
	'102457384': '#d85c29',
	'900001': '#003e60',
	'102457386': '#e9b435',
	'40001': '#03995F',
    
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


//Electiva disciplinar común I
$scope.bas01 = '<p class="lateral1">Electiva disciplinar común I</p>'+
'<ul>'+
'<li>Habilidades para la toma de decisiones - <strong>Código: </strong>126001 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de negocios internacionales - <strong>Código: </strong>105016 - <strong>Créditos: </strong>3</li>' +
'<li>Pensamiento administrativo - <strong>Código: </strong>112002 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


//Electiva disciplinar común II
$scope.bas02 = '<p class="lateral1">Electiva disciplinar común II</p>'+
'<ul>'+
'<li>Contratación pública y privada - <strong>Código: </strong>101001 - <strong>Créditos: </strong>3</li>' +
'<li>Psicología del trabajo y las organizaciones	 - <strong>Código: </strong>126013 - <strong>Créditos: </strong>3</li>' +
'<li>Finanzas corporativas para la toma de decisiones - <strong>Código: </strong>106011 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Electivo Componente de Ciencias Básicas				
$scope.bas03 = '<p class="lateral1">Electivo Componente de Ciencias Básicas</p>'+
'<ul>'+
'<li>Algebra lineal - <strong>Código: </strong>208046 - <strong>Créditos: </strong>3</li>' +
'<li>Calculo diferencial - <strong>Código: </strong>100410 - <strong>Créditos: </strong>3</li>' +
'<li>Pensamiento lógico y matemático - <strong>Código: </strong>200611 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';
			
//Electivo Campo de formación complementaria	
$scope.bas04 = '<p class="lateral1">Electivo Campo de formación complementaria I</p>'+
'<ul>'+
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

$scope.bas05 = '<p class="lateral1">Electivo Campo de formación complementaria II</p>'+
'<ul>'+
'<li>Proyecto de vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La persona como ser trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Pedagogía para la solución de conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Electivo Componente Social Solidario				
$scope.bas06 = '<p class="lateral1">Electivo Componente Social Solidario</p>'+
'<ul>'+
'<li>Sostenibilidad, Desarrollo y Calidad de vida - <strong>Código: </strong>40413 - <strong>Créditos: </strong>3</li>' +
'<li>Inclusión social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto, comunidad e interacción social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';
				
//Electivo disciplinar especifico				
$scope.bas07 = '<p class="lateral1">Electivo disciplinar especifico</p>'+
'<ul>'+
'<li>Gerencia estratégica de las operaciones - <strong>Código: </strong>126010 - <strong>Créditos: </strong>3</li>' +
'<li>Logística de las operaciones - <strong>Código: </strong>126011 - <strong>Créditos: </strong>3</li>' +
'<li>Sistemas integrados de gestión HSEQ - <strong>Código: </strong>121006 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión y control de procesos en las construcciones - <strong>Código: </strong>102457389 - <strong>Créditos: </strong>3</li>' +
'<li>Infraestructura vial, señalización y equipamiento - <strong>Código: </strong>102457390 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión , manejo y tratamiento de residuos sólidos - <strong>Código: </strong>102457391 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';			


});

})();
(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Fundamentos de Administración",codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["105015"] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },

{ periodo:"2",curso:"Legislación empresarial",codigo:"111001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["111001"] },
{ periodo:"2",curso:"Fundamentos de Economía",codigo:"105001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["105015"] },
{ periodo:"2",curso:"Contabilidad Financiera Básica",codigo:"106003",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: ["106003"] },
{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["40002"] },
{ periodo:"2",curso:"Electivo Componente Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: ["200611"] },

{ periodo:"3",curso:"Gestión del Talento Humano",codigo:"121012",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["111001"] },
{ periodo:"3",curso:"Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["211622"] },
{ periodo:"3",curso:"Análisis de Costos y Presupuestos en la Gestión de Transportes",codigo:"102467397",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["106003"] },
{ periodo:"3",curso:"Gestión integral en la cadena de operaciones de Transportes",codigo:"102467396",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102467396"] },
{ periodo:"3",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Electivo 1 Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Normatividad del Transporte y Seguridad Vial",codigo:"102467399",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["111001"] },
{ periodo:"4",curso:"Electivo 2 Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Transporte Integrado de Pasajeros Nacional e Internacional",codigo:"102467398",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102467396"] },
{ periodo:"4",curso:"Electiva Componente Social Solidario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["40002"] },
{ periodo:"4",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"4",curso:"Electivo 1 Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Sistemas Integrados de Gestión - HSEQ",codigo:"121006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["111001","211622"] },
{ periodo:"5",curso:"Electivo 2 Disciplinar Común",codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Transporte de carga y Distribución Física Internacional",codigo:"102467401",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["102467396"] },
{ periodo:"5",curso:"Electiva 1 Disciplinar Específica",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["102467396"] },
{ periodo:"5",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
 
{ periodo:"6",curso:"Electiva 3 Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva 2 Disciplinar Específica",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva 3 Disciplinar Específica",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Responsabilidad Social Empresarial",codigo:"120002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"6",curso:"Sistemas Inteligentes para la Gestión de Transportes",codigo:"102467402",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] }

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
    '105015': '#d85c29',  
    '200611': '#003e60',
	  '111001': '#03995F',  
    '106003': '#67b6b2', 
    '40002': '#892b7d',
    '211622': '#e9b435',
   	'102467396': '#842e2c',  
    '900001': '#6CDF70',  
    '150001': '#41839d',  
  
    
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
$scope.bas01 = '<p class="lateral1">Electivo Componente Ciencias Básicas</p>'+
'<ul>'+
'<li>Fundamentos de Matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</li>' +
'<li>Algebra Lineal - <strong>Código: </strong>208046 - <strong>Créditos: </strong>3</li>' +
'<li>Algebra, Trigonometría y Geometría - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Se matricula en los periodos 2</p>';

//Electivos Componente Social Solidario
$scope.bas02 = '<p class="lateral1">Electivo Componente Social Solidario</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Se matricula en los periodos 5</p>';

//Electivos Disciplinares Específicos
$scope.bas03 = '<p class="lateral1">Énfasis en Modelos de Optimización para Gestión de Transportes</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Modelos de Optimización de Operaciones Portuarias - <strong>Código: </strong>102467403 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Modelos de Optimización de Operaciones de Transporte Aéreo - <strong>Código: </strong>102467404 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Modelos de Optimización de Transporte Integrado de Pasajeros - <strong>Código: </strong>102467405 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Se matricula en los periodos 5</p>'+
'<hr>' +
'<p class="lateral1">Énfasis en Gestión de Nodos de Conectividad en Transporte</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Gestión de Operaciones de las Terminales de Transportes - <strong>Código: </strong>102467406 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Gestión de Operaciones de Transportes en Centros Logísticos - <strong>Código: </strong>102467407 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Gestión de Operaciones en Puertos y Aeropuertos - <strong>Código: </strong>102467408 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>Se matricula en los periodos 6</p>';

//Electivo Formación Complementaria
$scope.bas04 = '<p class="lateral1">Electivo Formación Complementaria</p>'+
'<ul>'+
'<li>Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Se matricula en los periodos 3 y 4</p>'+
'<hr>'+
'<p class="lateral1">Electivo Formación Complementaria</p>'+
'<ul>'+
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La Persona como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Se matricula en los periodos 5</p>';

//Electivos Disciplinares Común
$scope.bas05 = '<p class="lateral1">Electivos Disciplinares Común</p>'+
'<ul>'+
'<li>Contratación Pública y Privada - <strong>Código: </strong>101001 - <strong>Créditos: </strong>3</li>' +
'<li>Psicología del Trabajo y las Organizaciones - <strong>Código: </strong>126013 - <strong>Créditos: </strong>3</li>' +
'<li>Bienestar Laboral y Organizaciones Saludables - <strong>Código: </strong>126022 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Se matricula en los periodos 4</p>'+
'<hr>' +
'<ul>'+
'<li>Habilidades para la Toma de Decisiones - <strong>Código: </strong>126001 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de Negocios Internacionales - <strong>Código: </strong>105016 - <strong>Créditos: </strong>3</li>' +
'<li>Cooperativismo y Desarrollo Económico - <strong>Código: </strong>120001 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Se matricula en los periodos 6</p>';


});

})();
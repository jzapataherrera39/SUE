(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento lógico y matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"1",curso:"Fundamentos de administración", codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["110003"] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento",codigo:"200610",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias comunicativas",codigo:"50010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Ética y ciudadanía",codigo:"40001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos del sector solidario",codigo:"102667596",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Proceso administrativo",codigo:"110003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["110003"] },
{ periodo:"2",curso:"Fundamentos de economía",codigo:"105001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"3",curso:"Prestación del servicio social Unadista (Requisito de grado)",codigo:"700004",creditos:"0",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Legislación organizaciones solidarias",codigo:"102667597",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Legislación empresarial",codigo:"111001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Contabilidad, costos y presupuestos",codigo:"113001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Gestión del talento humano",codigo:"121012",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Curso formación complementaria 1",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"4",curso:"Electivo Disciplinar común 1",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo componente ciencias básicas – IBC",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: ["200611"] },
{ periodo:"4",curso:"Empresas asociativas en el contexto local y global",codigo:"102667598",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Gestión en procesos de producción y servicios",codigo:"102667599",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva Disciplinar Específica 1",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Curso formación complementaria 2",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Electivo Componente social solidario IBC",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Curso formación complementaria 3",codigo:"*",creditos:"2",tipo:"Teórico / Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Fundamentos y generalidades de investigación",codigo:"150001",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Cooperativismo y desarrollo económico en el contexto globalizado",codigo:"102667601",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Desarrollo sostenible en contextos locales y globales",codigo:"102667604",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"6",curso:"Electivo Disciplinar común 2",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva Disciplinar Específica 2",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Responsabilidad social y empresarial",codigo:"120002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Mercadeo social y empresarial",codigo:"102667600",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva Disciplinar Específica 3",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '200611': '#a72e47',  
    '110003': '#1690E0',
	'900001': '#41839d',  
    
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


//electivas ciencias básicas IBC
 $scope.bas01 = '<p class="lateral1">Electivo componente ciencias básicas – IBC</p>'+
'<ul>'+
'<li>Fundamentos de matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</li>' +
'<li>Algebra lineal - <strong>Código: </strong>208046 - <strong>Créditos: </strong>3</li>' +
'<li>Calculo diferencial - <strong>Código: </strong>100410 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//electivas ciencias solidario IBC
$scope.basico1 = '<p class="lateral1">Electivo Componente social solidario IBC</p>'+
'<ul>'+
'<li>Sostenibilidad, desarrollo y calidad de vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Inclusión social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto, comunidad e interacción social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//enfasis I gestión de empresas y enfasis II gestión de organizaciones solidarias 
$scope.basico2 = 
'<p class="lateral1">Énfasis I Gestión de Empresas</p>'+
'<ul>'+
'<li>Logística de las operaciones - <strong>Código: </strong>126011 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de inventarios y almacenamiento - <strong>Código: </strong>120009 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de procesos de negocios - <strong>Código: </strong>102667603 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Enfasis II Gestión de Organizaciones Solidarias</p>'+
'<ul>'+
'<li>Pensamiento solidario - <strong>Código: </strong>105013 - <strong>Código: </strong>3</li>' +
'<li>Gestión local - <strong>Código: </strong>102954 - <strong>Código: </strong>3</li>' +
'<li>Juntas de acción comunal - <strong>Código: </strong>102667602 - <strong>Código: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> El estudiante debe matricular los cursos electivos correspondientes, de acuerdo con la línea de profundización que escoja.</p>';


//electiva disciplinar comun 1 y 2
$scope.basico3 = '<p class="lateral1">Electiva Disciplinar Común (1 y 2)</p>'+
'<ul>'+
'<li>Generación de ideas de negocio - <strong>Código: </strong>110013 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de la innovación - <strong>Código: </strong>126016 - <strong>Créditos: </strong>3</li>' +
'<li>Sociología organizacional - <strong>Código: </strong>102056 - <strong>Créditos: </strong>3</li>' +
'<li>Comunicación organizacional - <strong>Código: </strong>126023 - <strong>Créditos: </strong>3</li>' +
'<li>Neuroadministración - <strong>Código: </strong>126020 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


//formación complementaria 1
$scope.basico5 = '<p class="lateral1">Curso Formación Complementaria 1</p>'+
'<ul>'+
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//formación complementaria 2
$scope.basico6 =  '<p class="lateral1">Curso Formación Complementaria 2</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Acondicionamiento físico y bienestar - <strong>Créditos: </strong>400004 - <strong>Créditos: </strong>1</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


//formación complementaria 3
$scope.basico7 =  '<p class="lateral1">Curso Formación Complementaria 3</p>'+
'<ul>'+
'<li>Proyecto de vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La persona como ser transecendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Pedagogía para la solución de conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

  
});

})();
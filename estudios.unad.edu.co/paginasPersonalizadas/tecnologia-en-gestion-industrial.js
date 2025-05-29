(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {

$scope.mt2 = [
{ periodo:"1",curso:"Fundamentos en gestión integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112001"] },
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y ciudadanía", codigo:"40001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento lógico y matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento",codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento administrativo",codigo:"112002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112002"] },


{ periodo:"2",curso:"Contabilidad costos y presupuestos",codigo:"113001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Competencias comunicativas",codigo:"50010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Fundamentos de matemáticas",codigo:"200612",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"2",curso:"Formación complementaria",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"3",curso:"Microeconomía",codigo:"112003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112001"] },
{ periodo:"3",curso:"Prestación social del servicio Unadista",codigo:"700004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Estadística descriptiva",codigo:"204040",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"3",curso:"Planeación prospectiva y estratégica",codigo:"111002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112002"] },

{ periodo:"4",curso:"Fundamentos y generalidades de la investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"4",curso:"Diseño y administración de procesos productivos ",codigo:"121013",creditos:"4",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Legislación empresarial",codigo:"111001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Cálculo diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"4",curso:"Electivo",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"5",curso:"Mercadeo e investigación de mercados",codigo:"112003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Sistematización y automatización de la producción",codigo:"102501",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Gestión de la innovación y transferencia tecnológica",codigo:"121003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Sistemas integrados de gestión HSEQ",codigo:"121006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Control estadístico de procesos",codigo:"121001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"6",curso:"Plan de negocios",codigo:"106000",creditos:"4",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"6",curso:"Sistemas de producción sostenible",codigo:"121005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Gestión del talento humano",codigo:"107010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Electivo",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '112001': '#d85c29',  
    '200611': '#003e60',
    '112002': '#03995F',  
    '900001': '#e9b435', 
    '150001': '#892b7d',
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
 


//Formación complementaria
$scope.bas01 = '<p class="lateral1">Formación complementaria</p>'+
'<ul>'+
'<li>Preparación física - <strong>Código: </strong>80001 - <strong>Créditos: </strong>2</li>' +
'<li>Proyecto de vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>Salud oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
'<li>La persona como ser trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Pedagogía para resolución de conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Sexualidad y discapacidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>' +
'<li>Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
'<li>Desarrollo del modelo de negocio - <strong>Código: </strong>110012 - <strong>Créditos: </strong>3</li>' +
'<li>Generación de ideas de negocio - <strong>Código: </strong>110013 - <strong>Créditos: </strong>3</li>' +
'<li>Actividad física y para la salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo.</p>';



//Electivo
$scope.bas02 = '<p class="lateral1">Cursos Electivos</p>'+
'<ul>'+
'<li>Matemática financiera - <strong>Código: </strong>116005 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de riesgos profesionales - <strong>Código: </strong>121008 - <strong>Créditos: </strong>3</li>' +
'<li>Distribución en planta - <strong>Código: </strong>121007 - <strong>Créditos: </strong>3</li>' +
'<li>Diseño de proyectos socialmente responsables - <strong>Código: </strong>116009 - <strong>Créditos: </strong>3</li>' +
'<li>Planeación y desarrollo regional - <strong>Código: </strong>116008 - <strong>Créditos: </strong>3</li>' +
'<li>Logística inversa - <strong>Código: </strong>120007 - <strong>Créditos: </strong>3</li>' +
'<li>Servicio al cliente - <strong>Código: </strong>102609 - <strong>Créditos: </strong>3</li>' +
'<li>Liderazgo, pensamiento creativo e innovador - <strong>Código: </strong>112004 - <strong>Créditos: </strong>3</li>' +
'<li>Contabilidad de costos - <strong>Código: </strong>106009 - <strong>Créditos: </strong>3</li>' +
'<li>Planeación financiera - <strong>Código: </strong>106008 - <strong>Créditos: </strong>3</li>' +
'<li>Legislación comercial y tributaria - <strong>Código: </strong>102011 - <strong>Créditos: </strong>2</li>' +
'<li>Proceso administrativo - <strong>Código: </strong>110003 - <strong>Créditos: </strong>3</li>' +
'<li>Legislación laboral - <strong>Código: </strong>102031 - <strong>Créditos: </strong>2</li>' +
'<li>Mercadeo social - <strong>Código: </strong>112005 - <strong>Créditos: </strong>3</li>' +
'<li>Negociación y ventas - <strong>Código: </strong>110005 - <strong>Créditos: </strong>3</li>' +
'<li>Inteligencia comercial - <strong>Código: </strong>110006 - <strong>Créditos: </strong>3</li>' +
'<li>Comercio y negocios internacionales - <strong>Código: </strong>102023 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión integral de residuos sólidos - <strong>Código: </strong>103010 - <strong>Créditos: </strong>3</li>' +
'<li>Diseño asistido por computador - <strong>Código: </strong>103008 - <strong>Créditos: </strong>3</li>' +
'<li>Organización comunitaria - <strong>Código: </strong>120004 - <strong>Créditos: </strong>3</li>' +
'<li>Cooperativismo y desarrollo económico - <strong>Código: </strong>120001 - <strong>Créditos: </strong>4</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo.</p>';

  
});

})();





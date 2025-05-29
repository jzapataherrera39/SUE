(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a la Ciencia Política",codigo:"252001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252001"] },
{ periodo:"1",curso:"Historia de las Ideas Políticas",codigo:"252002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252001"] },
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo Formación Complementaria", codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"2",curso:"Teoría del Estado",codigo:"252003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252001"] },
{ periodo:"2",curso:"Fundamentos en Economía",codigo:"252004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252004"] },
{ periodo:"2",curso:"Historia y teoría de las Relaciones internacionales",codigo:"252005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252005"] },
{ periodo:"2",curso:"Derecho Constitucional General",codigo:"251004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Pensamiento lógico matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electivo Formación Disciplinar Común Electivo",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Teorías del Poder y territorios",codigo:"252007",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252001"] },
{ periodo:"3",curso:"Historia política, social y económica de Colombia",codigo:"252009",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252004"] },
{ periodo:"3",curso:"Historia y Teoría política Emergente",codigo:"252008",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252005"] },
{ periodo:"3",curso:"Derecho Constitucional Colombiano I",codigo:"251005",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["251005"] },
{ periodo:"3",curso:"Sistemas políticos comparados",codigo:"252006",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252006"] },
{ periodo:"3",curso:"Electivo Formación IBC",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"3",curso:"Electivo Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Administración Pública y gestión local",codigo:"252010",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252010"] },
{ periodo:"4",curso:"Instituciones y Organismos Internacionales",codigo:"252011",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252004"] },
{ periodo:"4",curso:"Investigación en ciencias sociales",codigo:"400001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252005"] },
{ periodo:"4",curso:"Derecho Constitucional Colombiano II",codigo:"251006",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["251005"] },
{ periodo:"4",curso:"Sistema político Colombiano",codigo:"252012",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252006"] },
{ periodo:"4",curso:"Fundamientos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["*"] },
{ periodo:"4",curso:"Electivo Formación Complementaria",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Derecho Administrativo",codigo:"251011",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252010"] },
{ periodo:"5",curso:"Economía Internacional",codigo:"252014",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252004"] },
{ periodo:"5",curso:"Pensamiento latinoamericano y construcción de modelos alternativos de Desarrollo",codigo:"252013",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252005"] },
{ periodo:"5",curso:"Mecanismos alternativos de solución de conflictos",codigo:"251049",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Derechos Humanos",codigo:"251008",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"5",curso:"Electivo Formación IBC",codigo:"**",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: ["**"] },
{ periodo:"5",curso:"Electivo Profundización I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"6",curso:"Gestión de Políticas Públicas",codigo:"404014",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Política económica",codigo:"252017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Economía Colombiana",codigo:"252015",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Sistema electoral y marketing político",codigo:"252016",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Investigar en comunidad",codigo:"404009",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"6",curso:"Electivo Profundización II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["**"] },

{ periodo:"7",curso:"Políticas Públicas Inclusivas y Territorio",codigo:"252020",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Derecho internacional Público",codigo:"252526758",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Ruralidad y desarrollo territorial",codigo:"252019",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Ética Pública, participación y control social territorial",codigo:"252018",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Diseño de proyectos y TICS",codigo:"252526759",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"7",curso:"Electivo Profundización III",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["**"] },
{ periodo:"7",curso:"Electivo Profundización IV",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"8",curso:"Hacienda Pública",codigo:"251019",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Política Exterior Colombiana",codigo:"252021",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo Formación Disciplinar Común Electivo",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Indicadores sociales",codigo:"404013",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Gestión del Ciclo de Proyectos de Cooperación Internacional y Desarrollo",codigo:"252022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Inglés B1+",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"8",curso:"Electivo Profundización V",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["**"] },
{ periodo:"8",curso:"Electivo Profundización VI",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '252001': '#d85c29',  
    '252004': '#003e60',
	  '252005': '#03995F',  
    '251005': '#67b6b2', 
    '252006': '#892b7d',
    '*': '#842e2c',
	  '252010': '#e9b435',  
    '900001': '#41839d',  
    '**': '#6CDF70',  
       
    
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



//Componente de formación disciplinar específico Electivos

$scope.bas01 = '<p class="lateral1">Línea de profundización 1 - Administración Pública y Gobernanza</p>' +
'<ul>' +
'<li>Derecho y Gestión de las Entidades Territoriales - <strong>Código: </strong>252023 - <strong>Créditos: </strong>3</li>' +
'<li>Derecho Ambiental y Desarrollo - <strong>Código: </strong>252024 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión Pública y Contratación estatal - <strong>Código: </strong>252025 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de profundización 2 - Relaciones internacionales. Geopolítica y el Nuevo orden Global</p>' +
'<ul>' +
'<li>Asía, África y Medio Oriente - <strong>Código: </strong>252026 - <strong>Créditos: </strong>3</li>' +
'<li>América (Canadá, Estados Unidos, América Latina) - <strong>Código: </strong>252027 - <strong>Créditos: </strong>3</li>' +
'<li>Europa y la Unión Europea - <strong>Código: </strong>252028 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de profundización 3 - Teoría y análisis político emergente</p>' +
'<ul>' +
'<li>Movimientos Políticos y Nuevos Actores Sociales - <strong>Código: </strong>252029 - <strong>Créditos: </strong>3</li>' +
'<li>Teorías y Construcción de Paz - <strong>Código: </strong>252030 - <strong>Créditos: </strong>3</li>' +
'<li>Género, Política y Derecho - <strong>Código: </strong>252031 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p><strong>Nota:</strong> Seleccionar dos líneas de profundización y matricular los tres cursos que la componen.</p>';


//Electivo 1 Campo de Formación Complementaria

$scope.bas02 = '<p class="lateral1">Electivo 1 - Campo de Formación Complementaria</p>' +
'<ul>' +
'<li>Acondicionamiento Fisico - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Oralidad - <strong>Código: </strong> - <strong>Créditos: </strong>1</li>' +
'</ul>' +
'<hr>' +

'<p><strong>Nota:</strong> Durante toda la carrera debe matricular 3 cursos de estos.</p>';


//Electivo Formación Disciplinar Común

$scope.bas03 = '<p class="lateral1">Electivo - Formación Disciplinar Común</p>' +
'<ul>' +
'<li>Derecho Internacional Humanitario - <strong>Código: </strong>251034 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de Proyectos y TICS - <strong>Código: </strong>252536760 - <strong>Créditos: </strong>3</li>' +
'<li>Migración, Desplazamiento y Refugiados - <strong>Código: </strong>251035 - <strong>Créditos: </strong>3</li>' +
'<li>Government and Democracy - <strong>Código: </strong>450092 - <strong>Créditos: </strong>3</li>' +
'<li>Sociology - <strong>Código: </strong>450075 - <strong>Créditos: </strong>3</li>' +
'<li>Comunidades Etnias y Derecho - <strong>Código: </strong>251033 - <strong>Créditos: </strong>2</li>' +
'</ul>' +
'<hr>' +

'<p><strong>Nota:</strong> Durante toda la carrera debe matricular 5 créditos.</p>';


//Electivo Formación IBC

$scope.bas04 = '<p class="lateral1">Electivo - Formación IBC</p>' +
'<ul>' +
'<li>Sostenibilidad, Desarrollo y Calidad de vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Inclusión social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto, comunidad e interacción social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'<li>Estadística Descriptiva - <strong>Código: </strong>204040 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p><strong>Nota:</strong> Durante toda la carrera debe matricular 6 créditos.</p>';


});

})();
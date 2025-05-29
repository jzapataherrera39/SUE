(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción al Derecho",codigo:"251003",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Historia de las Ideas Políticas",codigo:"252002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Sujetos de Derecho",codigo:"252517815",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", prerrequisitos: ["252517815"] },
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Fundamentos en Gestión Integral", codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Sociología Jurídica",codigo:"251022",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Derecho Constitucional General",codigo:"251004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["251004"] },
{ periodo:"2",curso:"Derechos Humanos",codigo:"251008",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"3",curso:"Filosofía del Derecho",codigo:"251017",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Derecho Constitucional Colombiano I",codigo:"251005",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["251004"] },
{ periodo:"3",curso:"Derechos Patrimoniales",codigo:"252517817",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Derecho Sustantivo Laboral",codigo:"252517816",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Obligaciones Jurídicas",codigo:"252517818",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252517815"] },
{ periodo:"3",curso:"Electivo Interdisciplinar Básico Comun I",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Formación complementaria",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Argumentación e Interpretación Jurídicas",codigo:"252517821",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Derecho Constitucional Colombiano II",codigo:"251006",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["251004"] },
{ periodo:"4",curso:"Derecho Contractual",codigo:"252517819",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Derecho Penal General",codigo:"251010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["251010"] },
{ periodo:"4",curso:"Seguridad Social Integral",codigo:"252517822",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Derecho Probatorio",codigo:"252517820",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo Disciplinar Común I",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"5",curso:"Derecho Procesal General",codigo:"252517825",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252517825","251049","252517834"]  },
{ periodo:"5",curso:"Derecho Administrativo",codigo:"251011",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["251004"] },
{ periodo:"5",curso:"Derecho de Familia y Sucesiones",codigo:"252517823",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Derecho Penal Especial",codigo:"252517824",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["251010"] },
{ periodo:"5",curso:"Electivo Disciplinar Común II",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"6",curso:"Mecanismos Alternativos de Solución de Conflictos",codigo:"251049",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["251049"] },
{ periodo:"6",curso:"Derecho Procesal Laboral",codigo:"251013",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252517834"] },
{ periodo:"6",curso:"Protección Jurídica de la Información",codigo:"253002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Derecho Internacional Público",codigo:"252526758",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Derecho Comercial",codigo:"252517826",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["252517815"] },
{ periodo:"6",curso:"Electivo Disciplinar Específico I",codigo:"*",creditos:"3",tipo:"*",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"7",curso:"Derecho Procesal Penal",codigo:"252517827",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252517825","252517827"] },
{ periodo:"7",curso:"Consultorio Jurídico I (Laboral)",codigo:"252517844",creditos:"6",tipo:"Practico",clasificacion:"Obligatorio", prerrequisitos: ["252517834"] },
{ periodo:"7",curso:"Investigación Jurídica",codigo:"252517828",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Electivo Disciplinar Específico II",codigo:"*",creditos:"3",tipo:"*",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"8",curso:"Derecho Procesal Civil y Agrario",codigo:"252517829",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252517825","252517829"] },
{ periodo:"8",curso:"Consultorio Jurídico II (Penal)",codigo:"252517830",creditos:"6",tipo:"Practico",clasificacion:"Obligatorio", prerrequisitos: ["252517834","252517827"] },
{ periodo:"8",curso:"Electivo Disciplinar Específico III",codigo:"*",creditos:"3",tipo:"*",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Inglés B1+",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"9",curso:"Derecho Procesal Administrativo",codigo:"252517831",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["252517825","252517831"] },
{ periodo:"9",curso:"Consultorio Jurídico III (Privado)",codigo:"252517832",creditos:"6",tipo:"Practico",clasificacion:"Obligatorio", prerrequisitos: ["252517834","252517829"] },
{ periodo:"9",curso:"Electivo Disciplinar Específico IV",codigo:"*",creditos:"2",tipo:"*",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo Disciplinar Específico V",codigo:"*",creditos:"3",tipo:"*",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo Interdisciplinar Básico Comun II",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"10",curso:"Regímenes Disciplinarios",codigo:"252517833",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"10",curso:"Consultorio Jurídico IV (Público)",codigo:"252517834",creditos:"6",tipo:"Practico",clasificacion:"Obligatorio", prerrequisitos: ["252517834","252517831"] },
{ periodo:"10",curso:"Electivo Disciplinar Específico VI",codigo:"*",creditos:"3",tipo:"*",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Electivo Disciplinar Específico VII",codigo:"*",creditos:"3",tipo:"*",clasificacion:"Electiva", prerrequisitos: [] },
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
    '251004': '#d85c29',  
    '252517825': '#003e60',
	'251049': '#892b7d',  
    '252517834': '#67b6b2', 
    '252517827': '#892b7d',
    '252517829': '#842e2c',
	'252517831': '#e9b435',  
    '900001': '#6CDF70', 
	'252517815': '#1690E0',
	'251010': '#842e2c',
	
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
$scope.bas01 =  '<p class="tit3 h5">Formación complementaria</p>'+
'<ul>'+
'<li>Curso: Oralidad- <strong>Código: </strong>252053 - <strong>Créditos: </strong>*</li>'+
'</ul>';

//Electivo Interdisciplinar Básico Comun 
$scope.bas02 =  '<p class="tit3 h5">Electivo Interdisciplinar Básico Comun</p>'+
'<ul>'+
'<li>Curso: Inclusión social- <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Sujeto comunidad e interacción social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Sostenibilidad, desarrollo y calidad de vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p>Nota: </strong>Los cursos electivos están sujetos a oferta académica según las necesidades curriculares.</p>';

//Electivo Disciplinar Común 
$scope.bas03 =  '<p class="tit3 h5">Electivo Disciplinar Común</p>'+
'<ul>'+
'<li>Curso: Hacienda pública - <strong>Código: </strong>251019 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Comunidades etnias y derecho - <strong>Código: </strong>251033 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Derecho internacional humanitario - <strong>Código: </strong>251034 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Introducción a la ciencia política - <strong>Código: </strong>252001 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Teoría del estado - <strong>Código: </strong>252003 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Economía colombiana - <strong>Código: </strong>252015 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Sociology - <strong>Código: </strong>450075 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Government and democracy (elective i) - <strong>Código: </strong>450092 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p>Nota: </strong>Los cursos electivos están sujetos a oferta académica según las necesidades curriculares.</p>';

//Electivo Disciplinar Específico 
$scope.bas04 =  '<p class="tit3 h5">Electivo Disciplinar Específico</p>'+
'<ul>'+
'<li>Curso: Gestión del ciclo de proyectos de cooperación internacional y desarrollo- <strong>Código: </strong>252022 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Derecho y gestion de las entidades territoriales - <strong>Código: </strong>252023 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Derecho ambiental y desarrollo - <strong>Código: </strong>252024 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Género, política y derecho - <strong>Código: </strong>252031 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Diseño de proyectos y tics - <strong>Código: </strong>252526759 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Derecho comparado - <strong>Código: </strong>252517841 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Acciones constitucionales - <strong>Código: </strong>252537675 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Delitos Informáticos - <strong>Código: </strong>252537809 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Expediente electrónico - <strong>Código: </strong>253001 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Contratacion estatal - <strong>Código: </strong>252517836 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Responsabilidad patrimonial del estado - <strong>Código: </strong>251040 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Bienes mercantiles - <strong>Código: </strong>252517838 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Derecho procesal tributario - <strong>Código: </strong>252517837 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Contratos digitales - <strong>Código: </strong>252517840 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Derecho internacional privado - <strong>Código: </strong>252517842 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Derechos de autor - <strong>Código: </strong>252517843 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Contratacion internacional - <strong>Código: </strong>252517839 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Protección al consumidor - <strong>Código: </strong>252537810 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p>Nota: </strong>Los cursos electivos están sujetos a oferta académica según las necesidades curriculares.</p>';


});

})();
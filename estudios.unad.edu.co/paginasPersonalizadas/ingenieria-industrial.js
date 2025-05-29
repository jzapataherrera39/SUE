(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico Matemático", codigo:"200611",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Introducción a la Ingeniería",codigo:"212014",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014"] },
{ periodo:"1",curso:"Electivo Componente Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
//{ periodo:"1",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"2",curso:"Fundamentos de Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Cálculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"2",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electivo Formación Complementaria I",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"3",curso:"Cálculo Integral",codigo:"100411",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"3",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"3",curso:"Álgebra Lineal",codigo:"208046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208046"] },
{ periodo:"3",curso:"Electivo Disciplinar Común I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"3",curso:"Electivo Formación Complementaria II",codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"4",curso:"Ecuaciones Diferenciales",codigo:"100412",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"4",curso:"Física Electrónica",codigo:"100414",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"4",curso:"Programación Lineal",codigo:"100404",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208046"] },
{ periodo:"4",curso:"Contabilidad y Costos",codigo:"212018",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Proyecto de Ingeniería I",codigo:"212020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014"] },
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"5",curso:"Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Gestión Tecnológica",codigo:"212030",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["212030"] },
{ periodo:"5",curso:"Métodos determinísticos",codigo:"102016",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208046"] },
{ periodo:"5",curso:"Ingeniería Económica",codigo:"212067",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Logística y Cadenas de Suministro",codigo:"212029",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Inglés B1+",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"6",curso:"Inferencia Estadística",codigo:"212064",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Valuation and Negotiation of Technology",codigo:"203418676",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["212030"] },
{ periodo:"6",curso:"Métodos Probabilísticos",codigo:"104561",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208046"] },
{ periodo:"6",curso:"Diseño del Trabajo",codigo:"212021",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212021"] },
{ periodo:"6",curso:"Gestión de las Operaciones",codigo:"212028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Form. y Evaluación de Proyectos de Ingeniería",codigo:"212015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"7",curso:"Gestión de Calidad",codigo:"212023",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Emprendimiento Tecnológico",codigo:"203418670",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212030"] },
{ periodo:"7",curso:"Gestión Humana",codigo:"203418669",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Procesos Industriales",codigo:"212022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212021"] },
{ periodo:"7",curso:"Electivo Disciplinar Común II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"7",curso:"Electivo Disciplinar Especifico I",codigo:"**",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["**"] },

{ periodo:"8",curso:"Modelos y Simulación",codigo:"212026",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Práctica Profesional",codigo:"212034",creditos:"2",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo Componente Tecnología y Comunicación",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Diseño de Planta",codigo:"212033",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212021"] },
{ periodo:"8",curso:"Proyecto de Ingeniería II",codigo:"212027",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014"] },
{ periodo:"8",curso:"Electivo Disciplinar Especifico II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["**"] },

{ periodo:"9",curso:"Ingeniería ambiental",codigo:"212031",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Seguridad y Salud en el Trabajo",codigo:"203418671",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Strategic Management",codigo:"212008",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo Disciplinar Común III",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["*"] },
{ periodo:"9",curso:"Trabajo de Grado",codigo:"203418672",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["212014"] },
{ periodo:"9",curso:"Electivo Disciplinar Especifico III",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["**"] },
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
    '212014': '#d85c29',  
    '100410': '#003e60',
	'900001': '#67b6b2',  
    '208046': '#a72e47', 
    '*': '#892b7d',
    '212030': '#03995F',
	'212021': '#e9b435',  
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


//ELECTIVO COMOPONENTE CIENCIAS BASICAS
$scope.bas01 = '<p class="lateral1">Electivo Componente Ciencias Básicas</p>' +
'<ul>' +
'<li>Álgebra, Trigonometría y Geometría Analítica - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>' +
'<li>Biología - <strong>Código: </strong>201101 - <strong>Créditos: </strong>3</li>' +
'<li>Química General - <strong>Código: </strong>212018 - <strong>Créditos: </strong>3</li>' +
'</ul>';

//ELECTIVO COMPONENTE TECNOLOGÍA Y COMUNICACIÓN
$scope.bas02 = '<p class="lateral1">Electivo Componente Tecnología y Comunicación</p>' +
'<ul>' +
'<li>Transformación Digital - <strong>Código: </strong>202497495 - <strong>Créditos: </strong>3</li>' +
'<li>Big Data - <strong>Código: </strong>202016911 - <strong>Créditos: </strong>3</li>' +
'</ul>';

//ELECTIVO COMPONENTE ECONÓMICO ADMINISTRATIVO
$scope.bas03 = '<p class="lateral1">Strategic Management</p>' +
'<ul>' +
'<li>Comercio y Negocio Internacionales - <strong>Código: </strong>102023 - <strong>Créditos: </strong>3</li>' +
'<li>Risk Management - <strong>Código: </strong>203418677 - <strong>Créditos: </strong>3</li>' +
'<li>Marketing - <strong>Código: </strong>218037 - <strong>Créditos: </strong>3</li>' +
'<li>Gerencia Estratégica - <strong>Código: </strong>212053 - <strong>Créditos: </strong>3</li>' +
'</ul>';

//ELECTIVOS DISCIPLINARES ESPECIFICOS
$scope.bas04 = '<p class="lateral1">Electivos Disciplinares Específicos</p>' +

'<p class="lateral1">Línea de Profundización I: Operaciones y Manufactura</p>' +
'<ul>' +
'<li>Lean Six Sigma - <strong>Código: </strong>202497496 - <strong>Créditos: </strong>3</li>' +
'<li>Diseño y análisis de sistemas de manufactura - <strong>Código: </strong>212045 - <strong>Créditos: </strong>3</li>' +
'<li>Automatización y Control de Procesos Industriales - <strong>Código: </strong>203418673 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de Profundización II: Logística y Redes de Valor</p>' +
'<ul>' +
'<li>Supply Chain Management and Logistic - <strong>Código: </strong>228001 - <strong>Créditos: </strong>3</li>' +
'<li>TIC y Gestión de Procesos Logísticos en Redes de Valor - <strong>Código: </strong>228003 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión del Riesgo en Redes de Valor - <strong>Código: </strong>228010 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de Profundización III: Gestión de Proyectos</p>' +
'<ul>' +
'<li>Formulación Integral de Proyectos - <strong>Código: </strong>102437374 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de Proyectos Sostenibles - <strong>Código: </strong>102437376 - <strong>Créditos: </strong>3</li>' +
'<li>Análisis Económico de Proyectos - <strong>Código: </strong>102437380 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea de Profundización IV: Innovación y Gestión Tecnológica</p>' +
'<ul>' +
'<li>Gestión del Conocimiento - <strong>Código: </strong>207027 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de Procesos de Negocios con TI - <strong>Código: </strong>203418674 - <strong>Créditos: </strong>3</li>' +
'<li>Innovation Management - <strong>Código: </strong>203418675 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p><strong>Nota:</strong> Para los cursos Electivo Disciplinar Específico I, II,III y IV, el estudiante debe seleccionar una de las líneas de profundización y matricular los cursos de esa línea. Las líneas de Logística y Redes de Valor y Gestión de Proyectos contienen cursos de posgrado en nivel especialización.</p>';


//Electivo Formación Complementaria
$scope.bas05 = '<p class="lateral1">Electivos Formación Complementaria</p>' +
'<ul>' +
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
'<li>Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
'<li>Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Pensamiento Emprendedor - <strong>Código: </strong>80019 - <strong>Créditos: </strong>1</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'</ul>';

//Electivo Disciplinar Común
$scope.bas06 = '<p class="lateral1">Electivos Componente Disciplinares Comunes</p>' +
'<ul>' +
'<li>Dibujo de Ingeniería - <strong>Código: </strong>212060 - <strong>Créditos: </strong>3</li>' +
'<li>Modelado Digital 3D - <strong>Código: </strong>218013 - <strong>Créditos: </strong>3</li>' +
'<li>Lab View - <strong>Código: </strong>208055 - <strong>Créditos: </strong>3</li>' +
'<li>Materiales para Diseño - <strong>Código: </strong>218012 - <strong>Créditos: </strong>3</li>' +
'<li>Análisis de Datos - <strong>Código: </strong>202016908 - <strong>Créditos: </strong>3</li>' +
'</ul>';



});

})();
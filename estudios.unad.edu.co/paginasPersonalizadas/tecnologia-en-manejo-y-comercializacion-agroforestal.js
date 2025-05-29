(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Algebra, trigonometría y geometría analítica",codigo:"301301",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y ciudadanía", codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Biología (Celular y Molecular)",codigo:"30176",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Introducción a la Tecnología en manejo y comercialización Agroforestal",codigo:"303047507",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Idioma extranjero I (Inglés A1)",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Quimica General",codigo:"201102",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Ecología",codigo:"302277024",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Botánica Económica",codigo:"201710",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201710"] },
{ periodo:"2",curso:"Viveros",codigo:"201614",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electiva Interdisciplinar Básico común (IBC)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Idioma extranjero II (Inglés A2)",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Bioestadística",codigo:"302277045",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Química de suelos",codigo:"302277023",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Agroforestería con cultivos anuales y perennes",codigo:"302277028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201710"] },
{ periodo:"3",curso:"Sanidad Vegetal",codigo:"302277029",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277029"] },
{ periodo:"3",curso:"Electivo Campo Complementario",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Fundamentos en gestión integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112001"] },
{ periodo:"4",curso:"Fundamentos y generalidades de investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"4",curso:"Fotointerpretación y mapificación",codigo:"201722",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Sistemas Silvopastoriles",codigo:"302277030",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201710"] },
{ periodo:"4",curso:"Control biológico",codigo:"302547545",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277029"] },
{ periodo:"4",curso:"Electivo Campo Disciplinar Común (DC)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Mercadeo agropecuario",codigo:"116007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112001"] },
{ periodo:"5",curso:"Trabajo de grado",codigo:"204014",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Legislación aplicada a sistemas agroforestales",codigo:"302277039",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Planificación y manejo de sistemas agroforestales",codigo:"300023",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201710"] },
{ periodo:"5",curso:"Electiva disciplinar especifica (DE)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Campo Complementario",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Negocios y logística comercial",codigo:"302277038",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112001"] },
{ periodo:"6",curso:"Comercio de productos agroforestales",codigo:"302277033",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva disciplinar especifica (DE)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva disciplinar especifica (DE)",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Prestación Servicio Social Unadista (Requisito de grado)",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] }
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
    '201710': '#003e60',
	'302277029': '#e9b435',  
    '112001': '#67b6b2', 
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
 


//Electiva disciplinar especifica (DE)
$scope.bas01 = '<p class="lateral1">Electiva disciplinar especifica (DE)</p>'+
'<p class="lateral1">Sistemas aplicados</p>'+
'<ul>'+
'<li>Manejo y Aprovechamiento de Fauna Silvestre - <strong>Código: </strong>302277040 - <strong>Créditos: </strong>3</li>' +
'<li>Restauración de Ecosistemas - <strong>Código: </strong>302277041 - <strong>Créditos: </strong>3</li>'+
'<li >Manejo Integrado de Enfermedades - <strong>Código: </strong>300029 - <strong>Créditos: </strong>3</li>'+
'<li >Manejo Integrado de Plagas - <strong>Código: </strong>300028 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Instrumentos de gestión del territorio</p>'+
'<ul>'+
'<li >Manejo de Cuencas Hidrográficas - <strong>Código: </strong>303013 - <strong>Créditos: </strong>3</li>' +
'<li >Dasometría - <strong>Código: </strong>302277031 - <strong>Créditos: </strong>3</li>' +
'<li >Seguimiento y evaluación de SAF - <strong>Código: </strong>302277736 - <strong>Créditos: </strong>3</li>'+
'<li >Planificación Territorial - <strong>Código: </strong>201724 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p class="lateral1">Administración y gestión</p>'+
'<ul>'+
'<li >Planificación y desarrollo rural - <strong>Código: </strong> - <strong>Créditos: </strong>3</li>' +
'<li>Optimización de Procesos Agrarios - <strong>Código: </strong>302277044 - <strong>Créditos: </strong>3</li>'+
'<li >Certificación de bosques- <strong>Código: </strong>302277043 - <strong>Créditos: </strong>3</li>'+
'<li >Gestión de Talento Humano - <strong>Código: </strong>121012 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> Se sugiere seleccionar una línea de profundización</p>';


//Electivo Campo Interdisciplinar Básico Común (IBC)
$scope.basico3 = '<p class="lateral1">Electivo Campo Interdisciplinar Básico Común (IBC)</p>'+
'<ul>'+
'<li>Excel Avanzado - <strong>Código: </strong>212059 - <strong>Créditos: </strong>3</li>' +
'<li >Introducción a la Programación- <strong>Código: </strong>301304 - <strong>Créditos: </strong>3</li>' +
'<li >Sostenibilidad, Desarrollo y Calidad - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>'+
'<li >Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Disciplinar común (DC)
$scope.basico4 = '<p class="lateral1">Electivo Campo Disciplinar Común (DC)</p>'+
'<ul>'+
'<li >Educación ambiental - <strong>Código: </strong> - <strong>Créditos: </strong>3</li>' +
'<li >Higiene y seguridad laboral - <strong>Código: </strong> - <strong>Créditos: </strong>3</li>' +
'<li >Riegos y drenajes - <strong>Código: </strong> - <strong>Créditos: </strong>3</li>'+
'<li >Legislación Empresarial - <strong>Código: </strong>111001 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Electivo Campo Complementario
$scope.basico5 = '<p class="lateral1">Electivo Campo Complementario</p>'+
'<ul>'+
'<li >Sociología ambiental - <strong>Código: </strong> - <strong>Créditos: </strong>2</li>' +
'<li >Hoja de vida - <strong>Código: </strong> - <strong>Créditos: </strong>1</li>' +
'<li >La Persona como ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>'+
'<li >Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>2</li>'+
'<li >Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>2</li>'+
'<li >Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>'+
'<li >Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>2</li>'+
'<li >Sexualidad y Discapacidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>'+
'<li >Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>'+
'<li >Creatividad para el Emprendimiento - <strong>Código: </strong>80018 - <strong>Créditos: </strong>2</li>'+
'<li >Pensamiento Emprendedor - <strong>Código: </strong>80019 - <strong>Créditos: </strong>1</li>'+
'<li >Actividad Física y para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';
  

});

})();






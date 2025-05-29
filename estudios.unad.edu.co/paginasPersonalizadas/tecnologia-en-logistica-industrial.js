(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a la Tecnología en Logística Industrial",codigo:"242001",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico Matemático", codigo:"200611",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para gestión del conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"1",curso:"Electivo Componente Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"2",curso:"Calculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"2",curso:"Fundamentos de Supply Chain y logística",codigo:"242003",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["242003"] },
{ periodo:"2",curso:"Sistemas de Transporte",codigo:"212062",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["211622","242007"] },
{ periodo:"2",curso:"Algebra Lineal",codigo:"208046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208046"] },
{ periodo:"2",curso:"Ingles A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Electivo Formación Complementaria I",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"3",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"3",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"3",curso:"Procesos Logísticos de Producción",codigo:"242007",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["242007"] },
{ periodo:"3",curso:"Procesos Logísticos de Aprovisionamiento",codigo:"242004",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["211622"] },
{ periodo:"3",curso:"Programación Lineal",codigo:"100404",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["208046","100404"] },
{ periodo:"3",curso:"Ingles A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Electivo Componente Económico- Administrativo",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"4",curso:"Diseño del Trabajo",codigo:"212021",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Procesos Logísticos de Retorno (Ingles)",codigo:"242008",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["242003"] },
{ periodo:"4",curso:"Contabilidad y Costos",codigo:"212018",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Procesos Logísticos de Distribución",codigo:"242005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100404"] },
{ periodo:"4",curso:"Electivo Disciplinar Específico I",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo Disciplinar Común I",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electivo Formación Complementaria II",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"5",curso:"Diseño de Almacenes y Manejo de Materiales",codigo:"242006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Trabajo de Grado",codigo:"202497501",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Procesos Industriales",codigo:"212022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Disciplinar Específico II",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electivo Disciplinar Común II",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

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
    '100410': '#d85c29',  
    '242003': '#003e60',
    '211622': '#03995F',  
    '242007': '#a72e47', 
    '208046': '#892b7d',
    '900001': '#6CDF70',
	'100404': '#67b6b2',  
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


$scope.SSU = '<p class="lateral1">Servicio Social Unadista</p>'+
'<p><strong>Nota: </strong>  El curso Prestación del servicio social Unadista código 700004 deberá ser cursado y aprobado como requisito de grado institucional según lo estipulado por el acuerdo 080 del 7 de julio de 2015, del Consejo Académico</p>';

$scope.bas01 = '<p class="lateral1">Electivo Componente Ciencias Básicas </p>'+
'<ul>'+
'<li>Química General - <strong>Código: </strong>201102 - <strong>Créditos: </strong>3</li>' +
'<li>Algebra, Trigonometría y geometría Analítica  - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de Matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

$scope.bas02 = '<p class="lateral1">Electivo Disciplinar Especifico</p>'+
'<ul>'+
'<li>Industria 4.0 - <strong>Código: </strong>202497499 - <strong>Créditos: </strong>3</li>'+
'<li>Tendencias disruptivas en la Logística - <strong>Código: </strong>202497498 - <strong>Créditos: </strong>3</li>'+
'<li>Seguridad en la Cadena de Suministro  - <strong>Código: </strong>202497497 - <strong>Créditos: </strong>3</li>'+
'<li>Lean Six Sigma - <strong>Código: </strong>202497496 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

$scope.bas03 = '<p class="lateral1">Electivo Formación Complementaria</p>'+
'<ul>'+
'<li>Emprendimiento - <strong>Código: </strong>212024 - <strong>Créditos: </strong>2</li>'+
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>'+
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>'+
'<li>Pedagogía para la solución de conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

$scope.bas04 = '<p class="lateral1">Electivo Económico Administrativo</p>'+
'<ul>'+
'<li>Comercio y Negocios Internacionales - <strong>Código: </strong>102023 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos en Gestión Integral - <strong>Código: </strong>112001 - <strong>Créditos: </strong>3</li>' +
'<li>Servicio al Cliente - <strong>Código: </strong>102609 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

$scope.bas05 = '<p class="lateral1">Electivo Componentes Disciplinares Comunes</p>'+
'<ul>'+
'<li>Excel Avanzado - <strong>Código: </strong>212059 - <strong>Créditos: </strong>3</li>'+
'<li>Teoría de las Decisiones - <strong>Código: </strong>200608 - <strong>Créditos: </strong>2</li>'+
'<li>Dibujo de Ingeniería - <strong>Código: </strong>212060 - <strong>Créditos: </strong>3</li>'+
'<li>Métodos Determinísticos - <strong>Código: </strong>102016 - <strong>Créditos: </strong>2</li>'+
'<li>Transformación Digital - <strong>Código: </strong>202497495 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

	  
});

})();
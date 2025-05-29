(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso: "Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso: "Pensamiento Lógico Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso: "Introducción a la Ingeniería Electrónica ",codigo:"202037695",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso: "Electivo Intedisciplinar Básico Común I",codigo:"*",creditos:"3",tipo:"Teorico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"1",curso: "Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso: "Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },


{ periodo:"2",curso: "Cálculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410","201424"] },
{ periodo:"2",curso: "Análisis de Circuitos",codigo:"243003",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"2",curso: "Álgebra Lineal",codigo:"208046 ",creditos:"3",tipo:"Teorico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso: "Fundamentos de Programación",codigo:"213022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213022"] },
{ periodo:"2",curso: "Inglés A1",codigo:" 900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },


{ periodo:"3",curso: "Cálculo Integral",codigo:"100411",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"3",curso: "Física General",codigo:"100413 ",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201424"] },
{ periodo:"3",curso: "Electrónica Análoga",codigo:"243006",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003","243006"] },
{ periodo:"3",curso: "Sofware para Ingeniería",codigo:"203036",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213022"] },
{ periodo:"3",curso: "Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },


{ periodo:"4",curso: "Ecuaciones Diferenciales",codigo:"100412",creditos:"3",tipo:"Teorico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"4",curso: "Electromagnetismo",codigo:"201424",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201424"] },
{ periodo:"4",curso: "Electrónica Digital",codigo:"243004",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003","243004"] },
{ periodo:"4",curso: "Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso: "Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"5",curso: "Cálculo Multivariado",codigo:"203057",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"5",curso: "Electrónica de Potencia ",codigo:" 203039",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"5",curso: "Microprocesadores y Microcontroladores",codigo:"309696",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"5",curso: "Fundamentos y Generalidades de la Invest.",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso: "Inglés B1+",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"5",curso: "Proyecto de Ingeniería I ",codigo:"202337120",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243004"] },

{ periodo:"6",curso: "Señales y Sistemas",codigo:" 203042",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"6",curso: "Electivo Disciplinar Específico I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso: "Instrumentación ",codigo:"203038",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243006"] },
{ periodo:"6",curso: "Lenguajes Interpretados ",codigo:"202037696",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213022"] },
{ periodo:"6",curso: "Etica y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", prerrequisitos: [] },
{ periodo:"6",curso: "Formulación y Evaluación de Proyectos de Ingeniería",codigo:"212015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243004"] },

{ periodo:"7",curso: "Sistemas Dinamicos",codigo:"243005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"7",curso: "Electivo Disciplinar Específico II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso: "Electivo Disciplinar Común I",codigo:"*",creditos:"3",tipo:" Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso: "Diseño Electronico",codigo:"202037697",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243003"] },
{ periodo:"7",curso: "Sistemas Dinamicos",codigo:"243005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"7",curso: "Fundamentals of Renewable Energies",codigo:"202037698",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso: "Proyecto de Ingeniería II ",codigo:"202337121",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243004"] },

{ periodo:"8",curso: "Teoria del Control ",codigo:"202037700",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100410"] },
{ periodo:"8",curso: "Electivo Disciplinar Específico III",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso: "Electivo Disciplinar Común II",codigo:"*",creditos:"3",tipo:" Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso: "Sistemas Embebidos",codigo:"208006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["213022"] },
{ periodo:"8",curso: "Electivo Intedisciplinar Básico Común II",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso: "Electivo Complementario I",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"9",curso: "Emprendimiento Solidario",codigo:"105020",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso: "Electivo Disciplinar Específico IV",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso: "Electivo Disciplinar Común III",codigo:"*",creditos:"3",tipo:" Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso: "Sistemas Automaticos Industriales ",codigo:"202037701",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso: "Electivo Complementario II",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso: "Proyecto de Grado",codigo:"202087715",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["243004"] },

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
    '201424': '#003e60',
	'243003': '#03995F',  
    '213022': '#67b6b2', 
    '900001': '#892b7d',
    '243004': '#842e2c',
	'243006': '#e9b435',  
    
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
 
//Disciplinares especificos

//Línea de profundización I: Industrias Inteligentes
$scope.basico1 = '<p class="lateral1">Línea de profundización I: Industrias Inteligentes  </p>'+
'<ul>'+
'<li>Curso: Robótica- <strong>Código: </strong>299011- <strong>Créditos: </strong>3</li>'+
'<li>Curso: IOT- <strong>Código: </strong>202087712 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Ingeniería de Datos- <strong>Código: </strong>202037699- <strong>Créditos: </strong>3</li>'+
'<li>Curso: Applied Artificial Intelligence - <strong>Código: </strong>202037703 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
//Línea de profundización II: Automatización
'<p class="lateral1">Línea de profundización II: Automatización</p>'+
'<ul>'+
'<li>Curso: Sistemas Hidroneumáticos <strong>Código: </strong> 243011  - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Comunicaciones Industriales- <strong>Código: </strong>208021 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Instrumentación Virtual - <strong>Código: </strong>203054 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Modern and Intelligent Control - <strong>Código: </strong> 202037704- <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
//Línea de profundización III: Diseño Electrónico para Sistemas de Conversión de Energía
'<p class="lateral1">Línea de profundización III: Diseño Electrónico para Sistemas de Conversión de Energía</p>'+
'<ul>'+
'<li>Curso: Diseño de Conversadores DC - DC- <strong>Código: </strong> 202037705  - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Diseño de Conversadores DC - AC- <strong>Código: </strong> 202037706 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Diseño Electrónico Avanzado - <strong>Código: </strong>202037707 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Sustainability and Energy Efficiency - <strong>Código: </strong> 202037708 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p>Nota Cursos de Profundización: </strong>  El estudiante debe escoger una línea y cursar los cuatro cursos.</p>';


//Electivo Disciplinar Común I

$scope.basico2 = '<p class="lateral1">Electivo Disciplinar Común</p>'+
'<ul>'+
'<li>Curso: Linux - <strong>Código: </strong>250550 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Procesamiento Digital - <strong>Código: </strong>202037702- <strong>Créditos: </strong>3</li>'+
'<li>Curso: Ingeniería Económica - <strong>Código: </strong>212067 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Programación - <strong>Código: </strong>213023 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Planificación, Programación y Control de Proy. - <strong>Código: </strong> 212055- <strong>Créditos: </strong>3</li>'+
'<li>Curso: Ciencia de los datosaplicada con python - <strong>Código: </strong> 203039222 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p>Nota: </strong>  Solo se debe Matricular uno (1) de los siguientes cursos</p>';

//Electivo Intedisciplinar Básico Común I

$scope.basico3 = '<p class="lateral1">Electivo Intedisciplinar Básico Común </p>'+
'<ul>'+
'<li>Curso: Álgebra, Trigonometría y Geometría Analítica- <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Metodología y Técnicas de Investigación- <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Electrocidad y Electromagnetismo- <strong>Código: </strong>2150502 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Fundamentos en Ciencias Naturales - <strong>Código: </strong>202087725 - <strong>Créditos: </strong>3</li>'+
'<li>Curso: Investigación Cuantitativa - <strong>Código: </strong>206049 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>'+
'<p>Nota: </strong>  Solo se debe Matricular uno (1) de los siguientes cursos</p>';


//Electivo Complementario I

$scope.basico4 = '<p class="lateral1">Electivo Complementario I</p>'+
'<ul>'+
'<li>Curso: Actividad Física y para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Proyecto de Vida - <strong>Código: </strong>  80002- <strong>Créditos: </strong>2</li>'+
'<li>Curso: Salud Oral - <strong>Código: </strong>80003- <strong>Créditos: </strong>2</li>'+
'<li>Curso: La Persona como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>'+
'<li>Curso: Teatro - <strong>Código: </strong>80010  - <strong>Créditos: </strong>1</li>'+
'<li>Curso: Protocolo - <strong>Código: </strong>80007  - <strong>Créditos: </strong>1</li>'+
'<li>Curso: Pensamiento Emprendedor - <strong>Código: </strong> 80019- <strong>Créditos: </strong>1</li>'+
'<li>Curso: Guitarra - <strong>Código: </strong>80005   - <strong>Créditos: </strong>1</li>'+
'<li>Curso: Discapacidad Y Sexualidad - <strong>Código: </strong>80011- <strong>Créditos: </strong>2</li>'+
'<li>Curso: Danza - <strong>Código: </strong>80012- <strong>Créditos: </strong>2</li>'+
'<li>Curso: Creatividad para el Emprendimiento - <strong>Código: </strong>80018- <strong>Créditos: </strong>2</li>'+
'<li>Curso: Pedagogía en la Solución de Conflictos - <strong>Código: </strong>80008- <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>'+
'<p>Nota: </strong>  Solo se debe Matricular uno (1) de los siguientes cursos</p>';

});

})();
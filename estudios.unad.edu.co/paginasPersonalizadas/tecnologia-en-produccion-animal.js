(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Química General",codigo:"201102",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"1",curso:"Introducción a la Tecnología en Producción Animal ",codigo:"330001",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },


{ periodo:"2",curso:"Química Orgánica",codigo:"300047",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"2",curso:"Biología",codigo:"30176",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176","201203"] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Electiva Campo de Formación Interdisciplinar Básico Común IBC",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Electiva Formación Complementaria",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"2",curso:"Bioestadística",codigo:"302277045",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },


{ periodo:"3",curso:"Bioquímica Metabólica",codigo:"352001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102","352001"] },
{ periodo:"3",curso:"Salud Animal",codigo:"201203",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201203"] },
{ periodo:"3",curso:"Introducción a la Morfofisiol Animal",codigo:"201106",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"3",curso:"Suelos Pastos Y Forrajes",codigo:"303037209",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Mercadeo Agropecuario",codigo:"102707",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Electiva Campo de Formación Interdisciplinar Básico Común IBC",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"4",curso:"Morfofisiología Animal",codigo:"201107",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102","30176"] },
{ periodo:"4",curso:"Genética",codigo:"201105",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["352001"] },
{ periodo:"4",curso:"Nutrición y Alimentación Animal",codigo:"201111",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Ética para la Producción Animal",codigo:"330002",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva Disciplinar Común DC",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva Disciplinar Especifica DE",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


{ periodo:"5",curso:"Sistemas de Producción Porcino",codigo:"201205",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Reproducción Animal",codigo:"201110",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["352001"] },
{ periodo:"5",curso:"Trabajo de Grado Tecnología",codigo:"204014",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Fundamentos y Generalidades de la Investigación ",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva Disciplinar Especifica DE",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva Disciplinar Especifica DE",codigo:"*",creditos:"3",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
 
 
{ periodo:"6",curso:"Sistemas de Producción Bovino",codigo:"201205",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Mejoramiento Animal",codigo:"201108",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["352001"] },
{ periodo:"6",curso:"Sistemas de Producción Avícola",codigo:"303099",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Diseño y Evaluación de Proyectos",codigo:"331005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva Disciplinar Común DC",codigo:"*",creditos:"2",tipo:"Teórico / Metodológico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '201102': '#d85c29',  
    '200611': '#003e60',
	'30176': '#03995F',  
    '201203': '#e9b435', 
    '352001': '#892b7d',
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
 

 

//Electivos Interdisciplinares Común
$scope.bas01 = '<p class="lateral1">Electivas Formación Interdisciplinaria Básica Común</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, desarrollo y calidad de vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Competencias Comunicativas - <strong>Código: </strong>40003 - <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento solidario - <strong>Código: </strong>105020 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Electivos Disciplinares Específicos
$scope.bas02 = '<p class="lateral1">Electivos Disciplinares Específicos</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Sistema de Producción Apícola - <strong>Código: </strong>201518 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Epidemiología - <strong>Código: </strong>201550 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Bienestar Animal - <strong>Código: </strong>201570 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Sistema de Producción Acuícola - <strong>Código: </strong>201508 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Sistema de Producción Sistemas de producción de Pequeños Rumiantes - <strong>Código: </strong>302267546 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Sistema de Producción Equino - <strong>Código: </strong>303020 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>Solo se debe seleccionar un curso (1) electivo</p>';

//Electivo Formación Complementaria
$scope.bas03 = '<p class="lateral1">Electivo Formación Complementaria</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>2</li>' +
'<li>Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La Persona como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Actividad física y para la salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';

//Electivos Disciplinares Común
$scope.bas04 = '<p class="lateral1">Electivos Disciplinares Comúnes</p>'+
'<ul>'+
'<li>Cálculo Diferencial - <strong>Código: </strong>100410 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de Economía - <strong>Código: </strong>105001 - <strong>Créditos: </strong>3</li>' +
'<li>Costos y Presupuestos - <strong>Código: </strong>102015 - <strong>Créditos: </strong>2</li>' +
'<li>Gestión Ambiental - <strong>Código: </strong>102021 - <strong>Créditos: </strong>2</li>' +
'<li>Gestión Empresarial - <strong>Código: </strong>201512 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo</p>';


});

})();
(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {



$scope.mt2 = [

{periodo:"1", curso:"Mercadeo e Investigación de Mercados (analytics)", codigo:"102477409", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"1", curso:"Proceso Administrativo", codigo:"110003", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"1", curso:"Cátedra Unadista", codigo:"80017", creditos:"3", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"1", curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610", creditos:"3", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"1", curso:"Pensamiento Lógico y Matemático", codigo:"200611", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },

{periodo:"2", curso:"Marketing Estratégico", codigo:"102477410", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"2", curso:"Contabilidad Financiera Básica", codigo:"106003", creditos:"3", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"2", curso:"Competencias Comunicativas", codigo:"50010", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"2", curso:"Estadística y Probabilidad", codigo:"211622", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"2", curso:"Ingles A1", codigo:"900001", creditos:"3", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },

{periodo:"3", curso:"Logística Comercial", codigo:"110008", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"3", curso:"Gestión del Talento Humano", codigo:"121012", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"3", curso:"Prestación del Servicio Social Unadista", codigo:"700004", creditos:"0", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"3", curso:"Electiva 1 Disciplinar Específica (DE)", codigo:"*", creditos:"3", tipo:"Teórico", clasificacion:"Electiva", prerrequisitos: [] },
{periodo:"3", curso:"Electiva 1 Disciplinar Común (DC)", codigo:"*", creditos:"3", tipo:"Teórico", clasificacion:"Electiva", prerrequisitos: [] },
{periodo:"3", curso:"Ingles A2", codigo:"900002", creditos:"3", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },

{periodo:"4", curso:"Fundamentos y Generalidades de Investigación", codigo:"150001", creditos:"3", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"4", curso:"Legislación Laboral", codigo:"110004", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"4", curso:"Finanzas para la Gestión Comercial y de Negocios", codigo:"102477413", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"4", curso:"Electiva 2 Disciplinar Específica (DE)", codigo:"*", creditos:"3", tipo:"Teórico", clasificacion:"Electiva", prerrequisitos: [] },
{periodo:"4", curso:"Electiva 2 Disciplinar Común (DC)", codigo:"*", creditos:"3", tipo:"Teórico", clasificacion:"Electiva", prerrequisitos: [] },
{periodo:"4", curso:"Electiva 1 Formación Complementaria (CFC)", codigo:"*", creditos:"1", tipo:"Metodológico", clasificacion:"Electiva", prerrequisitos: [] },

{periodo:"5", curso:"Comercio y Negocios Internacionales", codigo:"102023", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"5", curso:"Legislación Comercial y Tributaria", codigo:"110002", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"5", curso:"Ética y Ciudadanía", codigo:"40001", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"5", curso:"Electiva 3 Disciplinar Específica (DE)", codigo:"*", creditos:"3", tipo:"Teórico", clasificacion:"Electiva", prerrequisitos: [] },
{periodo:"5", curso:"Electiva 1 Componente Solidario - Interdisciplinar Básico Común (IBC)", codigo:"*", creditos:"3", tipo:"Teórico", clasificacion:"Electiva", prerrequisitos: [] },
{periodo:"5", curso:"Electiva 2 Formación Complementaria (CFC)", codigo:"*", creditos:"1", tipo:"Metodológico", clasificacion:"Electiva", prerrequisitos: [] },

{periodo:"6", curso:"Plan de Negocios", codigo:"102477458", creditos:"3", tipo:"Metodológico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"6", curso:"Liderazgo, Pensamiento Creativo Innovador", codigo:"112004", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"6", curso:"Planeación Prospectiva y Estratégica", codigo:"111002", creditos:"3", tipo:"Teórico", clasificacion:"Obligatorio", prerrequisitos: [] },
{periodo:"6", curso:"Electiva 2 Componente Investigativo - Interdisciplinar Básico Común (IBC)", codigo:"*", creditos:"3", tipo:"Metodológico", clasificacion:"Electiva", prerrequisitos: [] },
{periodo:"6", curso:"Electiva 3 Formación Complementaria (CFC)", codigo:"*", creditos:"1", tipo:"Metodológico", clasificacion:"Electiva", prerrequisitos: [] },

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
    '219023': '#d85c29',  
    '203458706': '#003e60',
	'302817912': '#41839d',  
	'*': '#e9b435',  
    
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

// ELECTIVOS INTERDISCIPLINAR BÁSICO COMÚN (IBC)

//Componente Solidario - INTERDISCIPLINAR BÁSICO COMÚN (IBC) - Electiva 1 
$scope.bas01 = '<p class="lateral1">Componente Solidario - Interdisciplinar Básico Común (IBC) - Electiva 1 </p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto, Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';



//Componente Investig - INTERDISCIPLINAR BÁSICO COMÚN (IBC) - Electiva 2
$scope.bas02 = '<p class="lateral1">Componente Investigativo - Interdisciplinar Básico Común (IBC) - Electiva 2</p>'+
'<ul>'+
'<li>Investigación Cualitativa - <strong>Código: </strong>105019 - <strong>Créditos: </strong>3</li>' +
'<li>Investigación Cuantitativa - <strong>Código: </strong>101267424 - <strong>Créditos: </strong>3</li>' +
'<li>Técnicas de Investigación - <strong>Código: </strong>101267216 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';



//- ELECTIVOS DISCIPLINAR COMÚN (DC)

//DISCIPLINAR COMÚN (DC) - Electiva 1
$scope.bas03 = '<p class="lateral1">Disciplinar Común (DC) - Electiva 1</p>'+
'<ul>'+
'<li>Gestión de la Importación y la Exportación - <strong>Código: </strong>126014 - <strong>Créditos: </strong>3</li>' +
'<li>Prospectiva del Marketing - <strong>Código: </strong>126012 - <strong>Créditos: </strong>3</li>' +
'<li>Servicio al Cliente - <strong>Código: </strong>102609 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';



//DISCIPLINAR COMÚN (DC) - Electiva 2
$scope.bas04 = '<p class="lateral1">Disciplinar Común (DC) - Electiva 2</p>'+
'<ul>'+
'<li>Competitividad Intercultural - <strong>Código: </strong>127022 - <strong>Créditos: </strong>3</li>' +
'<li>Desarrollo del Modelo de Negocio - <strong>Código: </strong>110012 - <strong>Créditos: </strong>3</li>' +
'<li>Diseño y Evaluación de Proyectos - <strong>Código: </strong>106005 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';



//ELECTIVOS CURSOS DE FORMACIÓN COMPLEMENTARIA (CFC)
//FORMACIÓN COMPLEMENTARIA (CFC) - Electivas 1 y 2
$scope.bas05 = '<p class="lateral1">Electivos Cursos de Formación Complementaria (CFC)</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Acondicionamiento Físico y de Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>' +
'<li>Hoja de Vida - <strong>Código: </strong>300040 - <strong>Créditos: </strong>1</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';



//ELECTIVOS DISCIPLINARES ESPECÍFICOS (DE)

//LÍNEA DE PROFUNDIZACIÓN 1: Gestión de nuevos negocios
$scope.bas06 = '<p class="lateral1">Electivos Disciplinares Específicos (DE)</p>'+
'<p class="lateral1">Línea de Profundización 1: Gestión de nuevos negocios</h3>'+
'<ul>'+
'<li>Generación de Ideas de Negocio - <strong>Código: </strong>110013 - <strong>Créditos: </strong>3</li>' +
'<li>E-empresas (E-business) - <strong>Código: </strong>102477414 - <strong>Créditos: </strong>3</li>' +
'<li>Inteligencia Comercial - <strong>Código: </strong>110006 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="lateral1">Línea de Profundización 2: Marketing</p>'+
'<ul>'+
'<li>Marketing Digital - <strong>Código: </strong>102477411 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de Merchandising - <strong>Código: </strong>102477415 - <strong>Créditos: </strong>3</li>' +
'<li>Marketing Analytics - <strong>Código: </strong>102477416 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="lateral1">Línea de Profundización 3: Logística Comercial</p>'+
'<ul>'+
'<li>E-logistic - <strong>Código: </strong>102477412 - <strong>Créditos: </strong>3</li>' +
'<li>Cadena de abastecimiento internacional - <strong>Código: </strong>127013 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de Inventarios y Almacenamiento - <strong>Código: </strong>120009 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';


	
});

})();
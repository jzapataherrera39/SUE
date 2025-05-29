(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Comunicación Transformadora",codigo:"404417084",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Cibercultura",codigo:"403037",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Teorías de la Comunicación",codigo:"404417085",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Semiótica",codigo:"401108",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Lingüística",codigo:"401102",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Formación Social Solidaria",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Enfoques Contemporáneos de la Comunicación",codigo:"404417086",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Comunicación y Estética",codigo:"404417087",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Fotografía",codigo:"404417089",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Redacción Periodística",codigo:"404417088",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Investigación Ciencias Sociales",codigo:"400001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Ingles A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},

{ periodo:"4",curso:"Comunicación Intercultural",codigo:"404417090",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Géneros Periodísticos",codigo:"401110",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Prosocialidad",codigo:"403010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Diseño de Proyectos Sociales",codigo:"400002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva disciplinar Específica 1",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Ingles A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"5",curso:"Economía Política de la Comunicación",codigo:"402487428",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Producción de Radio",codigo:"402487431",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402487431"] },
{ periodo:"5",curso:"Comunicación y Ciudadanía",codigo:"402487429",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Ética y Derecho a la Comunicación",codigo:"402487432",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Investigación en Comunicación",codigo:"402487430",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Electiva disciplinar Específica 2",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"6",curso:"Comunicación y Cambio Social",codigo:"401109",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Formatos Radiofónicos",codigo:"402487433",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402487431"] },
{ periodo:"6",curso:"Comunicación y Educación",codigo:"401596",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Comunicación Audiovisual",codigo:"402487434",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Narrativas Digitales",codigo:"402487435",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Investigación Cualitativa",codigo:"401122",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Ingles B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"7",curso:"Transferencia de Saberes: Observatorio de Medios",codigo:"402487436",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Producción Audiovisual",codigo:"402487439",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402487431"] },
{ periodo:"7",curso:"Comunicación Estratégica",codigo:"402487437",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Publicidad y Mercadeo",codigo:"402487438",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Métodos Cuantitativos",codigo:"402487455",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Electiva disciplinar Específica 3",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Electiva Formación Complementaria 1",codigo:"*",creditos:"1",tipo:"",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"8",curso:"Transferencia de Saberes: Mesa de Comunicaciones",codigo:"402487440",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Nuevos Medios",codigo:"402487441",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["402487431"] },
{ periodo:"8",curso:"Comunicación en Organizaciones",codigo:"402487442",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Electiva disciplinar Específica 4",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electiva disciplinar Específica 5",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electiva Formación Complementaria 2",codigo:"*",creditos:"1",tipo:"",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electiva Formación Complementaria 3",codigo:"*",creditos:"1",tipo:"",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"9",curso:"Transferencia de Saberes: Comunicación e Innovación Organizacional",codigo:"402487443",creditos:"4",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Práctica Profesional",codigo:"402487444",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: ["402487431"] },
{ periodo:"9",curso:"Prestación de Servicio Social Unadista",codigo:"*",creditos:"0",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },


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
    '402487431': '#d85c29',  
    '302817910': '#003e60',
	'302817912': '#41839d',  
    '302697748': '#67b6b2', 
    '302818466': '#892b7d',
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
 

//Prestación de Servicio Social Unadista
$scope.bas01 = '<h3 class="tit3">Prestación de Servicio Social Unadista</h3>'+
'<p><strong>Nota: </strong>  La prestación del Servicio Social Unadista, es un requisito de grado y está conformada por la Cátedra Región y la Cátedra Social Solidaria, por lo cual se sugiere que el estudiante la desarrolle una vez apruebe el curso Cátedra Unadista.</p>';

//Formación Social Solidaria

$scope.bas02 = '<p class="lateral1">Formación Social Solidaria</p>' +
'<ul>' +
  '<li>Curso: Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Para el curso de Formación Social Solidaria, el estudiante debe matricular solo 1 curso, de los 3 cursos sugeridos.</p>';

//Electivo formación complementaria 

$scope.bas03 = '<p class="lateral1">Electivo Formación Complementaria</p>' +
'<ul>' +
  '<li>Curso: Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Acondicionamiento Físico y Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Apreciación de las Imágenes del Arte - <strong>Código: </strong>404086996 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Para los cursos de formación complementaria, el estudiante elige solo tres cursos, de los 5 cursos sugeridos para cumplir con el plan de estudios.</p>';

//Electiva disciplinar específica 

$scope.bas04 = '<p class="lateral1">Electiva Disciplina Específica</p>' +
'<ul>' +
  '<li>Curso: Competencias Mediáticas - <strong>Código: </strong>402487445 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Prospectiva y Comunicación - <strong>Código: </strong>402487450 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Plan de Comunicación - <strong>Código: </strong>402487446 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Análisis de datos - <strong>Código: </strong>402487451 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Periodismo Web - <strong>Código: </strong>402487447 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Diálogo de Saberes - <strong>Código: </strong>402487452 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Diseño Multimedia - <strong>Código: </strong>402487448 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Desarrollo de Proyectos de Comunicación - <strong>Código: </strong>402487453 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Políticas Públicas de Comunicación y Cultura - <strong>Código: </strong>402487449 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Cine - <strong>Código: </strong>402487454 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Para cumplir con los cursos electivos disciplinares específicos I, II, III, IV y V, el estudiante debe matricular solo 15 créditos (5 cursos), de los 30 créditos (10 cursos), que aparece en la malla curricular.</p>';

});

})();



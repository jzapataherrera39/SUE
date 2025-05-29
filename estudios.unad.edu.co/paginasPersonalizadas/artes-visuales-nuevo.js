(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a las Artes Visuales",codigo:"408007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"1",curso:"Dibujo",codigo:"408012",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408012"] },
{ periodo:"1",curso:"Fotografía Artística",codigo:"408014",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408014"] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Cátedra Unadista",codigo:"90001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Arte, Imagen y Saber Ancestral",codigo:"408001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"2",curso:"Diseño Básico",codigo:"408013",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408012"] },
{ periodo:"2",curso:"Posproducción de Fotografía",codigo:"408016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408014","408016"] },
{ periodo:"2",curso:"Cibercultura",codigo:"403037",creditos:"3",tipo:"T",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"3",curso:"La Imagen Trascendental y la Expansión Religiosa",codigo:"408002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"3",curso:"Dibujo Digital",codigo:"408015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408012"] },
{ periodo:"3",curso:"Video para artistas",codigo:"403358736",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408014"] },
{ periodo:"3",curso:"Escritura argumentativa para artistas",codigo:"403358738",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408016"] },
{ periodo:"3",curso:"Curso Componente Social Solidario",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Prestación del Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"4",curso:"Renacimiento global y conexiones culturales",codigo:"403358737",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"4",curso:"Arte, Estética y Política",codigo:"408008",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Curso electivo de medios y técnicas",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: ["408014"] },
{ periodo:"4",curso:"Antropología visual",codigo:"408042",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408016"] },
{ periodo:"4",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"4",curso:"Curso Electivo Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"El Arte y la Modernidad",codigo:"408004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"5",curso:"Curso electivo de medios y técnicas",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Curso electivo de medios y técnicas",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Espacio público y procesos artísticos contemporáneos",codigo:"403358739",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408016"] },
{ periodo:"5",curso:"Fundamentos y generalidades de investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"5",curso:"Curso Electivo Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"6",curso:"Investigación de Procesos Artísticos",codigo:"408040",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"6",curso:"Colombia: Arte, identidad y alteridad",codigo:"408006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Geopolítica y Arte en la Contemporaneidad",codigo:"408005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Prosocialilad",codigo:"403010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Curso Electivo Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"7",curso:"Taller integral I",codigo:"408038",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"7",curso:"Curso electivo de pensamiento artístico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Electiva de Profundización",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Curso electivo arte y transformación cultural",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Curso electivo arte y transformación cultural",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"8",curso:"Taller Integral II",codigo:"408039",creditos:"6",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["408007"] },
{ periodo:"8",curso:"Curso electivo de pensamiento artístico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Curso electivo arte y transformación cultural",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '408007': '#d85c29',  
    '408012': '#e9b435',
	'408014': '#03995F',  
    '408016': '#67b6b2', 
    '900001': '#892b7d',
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


//Cursos Electivos de medios y técnicas

$scope.bas01 = '<p class="lateral1">Cursos Electivos de Medios y Técnicas</p>' +
'<ul>' +
  '<li>Curso: Multimedia - <strong>Código: </strong>4087027 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Arte interactivo - <strong>Código: </strong>408025 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Posproducción de video - <strong>Código: </strong>408031 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Dibujo figura humana - <strong>Código: </strong>408018 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Dibujo espacialidad - <strong>Código: </strong>408019 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Pintura - <strong>Código: </strong>408020 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Arte sonoro - <strong>Código: </strong>403358741 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Debe matricular tres (3) cursos de los siguientes.</p>';


//Cursos Electivos de pensamiento artístico

$scope.bas02 = '<p class="lateral1">Cursos Electivos de Pensamiento Artístico</p>' +
'<ul>' +
  '<li>Curso: Pensamiento artístico: Expresión artística y nuevos medios - <strong>Código: </strong>408009 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Pensamiento artístico: Arte, cuerpo y espacio tiempo - <strong>Código: </strong>408010 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Pensamiento artístico: Prácticas nuevas y emergentes - <strong>Código: </strong>408011 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Pensamiento artístico: Artes y procesos colaborativos de creación - <strong>Código: </strong>403358740 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Debe matricular dos (2) cursos de los siguientes.</p>';


//Cursos Electivos de Arte y transformación cultural

$scope.bas03 = '<p class="lateral1">Cursos Electivos de Arte y Transformación Cultural</p>' +
'<ul>' +
  '<li>Curso: Conservación y preservación del patrimonio artístico - <strong>Código: </strong>408046 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Museografía y museología - <strong>Código: </strong>408045 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Gestión cultural - <strong>Código: </strong>408041 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Arte y sociedad - <strong>Código: </strong>408047 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Debe matricular tres (3) cursos de las siguientes opciones.</p>';


//Cursos Electivos de medios y técnicas

$scope.bas04 = '<p class="lateral1">Expresión Digital</p>' +
'<ul>' +
  '<li>Curso: Animación - <strong>Código: </strong>408030 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Animación 3D - <strong>Código: </strong>408026 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Programación para artistas - <strong>Código: </strong>408028 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Electrónica para artistas - <strong>Código: </strong>408029 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p class="lateral1">Gráfica y Pintura</p>' +
'<ul>' +
  '<li>Curso: Pintura digital - <strong>Código: </strong>408021 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Ilustración - <strong>Código: </strong>408023 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Técnicas de grabado - <strong>Código: </strong>408022 - <strong>Créditos: </strong>3</li>' +
  '<li>Curso: Edición y autoedición digital - <strong>Código: </strong>408024 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Debe elegir una línea y tomar la totalidad de los 12 créditos, es decir, cuatro (4) cursos.</p>';


//Cursos Formación Complementaria

$scope.bas05 = '<p class="lateral1">Cursos de Formación Complementaria</p>' +
'<ul>' +
  '<li>Curso: Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Apreciación de las imágenes del arte - <strong>Código: </strong>86996 - <strong>Créditos: </strong>1</li>' +
  '<li>Curso: Acondicionamiento físico - <strong>Código: </strong>00004 - <strong>Créditos: </strong>1</li>' +
'</ul>' +
'<hr>' +
'<p class="lateral1">Cursos de Formación Social Solidaria</p>' +
'<ul>' +
  '<li>Curso: Inclusión social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota:</strong> Matricule y apruebe tres cursos de la oferta en el orden que desee.</p>';


});

})();
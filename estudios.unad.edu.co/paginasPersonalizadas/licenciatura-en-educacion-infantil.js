(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a la Licenciatura en Educación Infantil",codigo:"502707680",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["502707680"] },
{ periodo:"1",curso:"Lectura y escritura académicas",codigo:"514519",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Ética y ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Infancia: historias y perspectivas",codigo:"514517",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["502707680"] },
{ periodo:"2",curso:"Epistemología e historia de la pedagogía",codigo:"520027",creditos:"4",tipo:"Teórica",clasificacion:"Obligatorio", prerrequisitos: ["520027"] },
{ periodo:"2",curso:"Fundamentos y generalidades de investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"2",curso:"Teorías del aprendizaje",codigo:"517022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Matemáticas para la resolución de problemas",codigo:"517031",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Ética de la profesión docente",codigo:"520025",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"3",curso:"Políticas y programas de atención integral a la infancia",codigo:"514502",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["502707680"] },
{ periodo:"3",curso:"Didáctica",codigo:"517020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["520027"] },
{ periodo:"3",curso:"Enfoques curriculares",codigo:"517021",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Educación para la transformación social",codigo:"517027",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["517027"] },
{ periodo:"3",curso:"Salud y desarrollo infantil",codigo:"514006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", prerrequisitos: [] },
{ periodo:"3",curso:"Educación infantil en perspectiva de género",codigo:"502707681",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"4",curso:"Desarrollo socioafectivo y moral",codigo:"514505",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Pedagogía y didácticas para la inclusión",codigo:"514017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["520027"] },
{ periodo:"4",curso:"Investigación educativa y pedagógica",codigo:"517023",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"4",curso:"Educación, familia y comunidad",codigo:"514506",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["517027"] },
{ periodo:"4",curso:"Evaluación",codigo:"520026",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"4",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"5",curso:"Juego, lúdica y psicomotricidad",codigo:"514515",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Exploración del medio en la infancia",codigo:"502707682",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Investigación en educación Infantil",codigo:"514507",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["150001"] },
{ periodo:"5",curso:"Maestros, infancias y contextos",codigo:"502707683",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: ["502707683"] },
{ periodo:"5",curso:"Escenarios educativos inclusivos",codigo:"517028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"6",curso:"Construcción de la lengua escrita",codigo:"514516",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Arte y Educación Artística en la Infancia",codigo:"514003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Prácticas educativas mediadas por TIC",codigo:"517018",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Maestro innovador reflexivo",codigo:"502707684",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: ["502707683"] },
{ periodo:"6",curso:"Electivo 1 DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"7",curso:"Literatura y oralidad en la Infancia",codigo:"514501",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Desarrollo del pensamiento lógico - matemático",codigo:"514005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Administración y gestión educativa",codigo:"500001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["500001"] },
{ periodo:"7",curso:"Maestro investigador reflexivo",codigo:"502707685",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: ["502707683"] },
{ periodo:"7",curso:"Electivo 1 IBC",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"7",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"8",curso:"Bilingüismo en educación infantil",codigo:"514511",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Uso de la TIC en educación infantil",codigo:"514508",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Gestión de proyectos y organizaciones educativas para las infancias",codigo:"514512",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["500001"] },
{ periodo:"8",curso:"Maestro investigador transformativo",codigo:"502707686",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: ["502707683"] },
{ periodo:"8",curso:"Legislación educativa",codigo:"520024",creditos:"3",tipo:"Teórica",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo 2 DE",codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electivo 1 FC",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"9",curso:"Electivo 3 DE",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo 2 IBC",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo 2 FC",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Cátedra de infancias",codigo:"502707687",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio", prerrequisitos: ["502707683"] },
{ periodo:"9",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Práctico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electivo 3 FC",codigo:"*",creditos:"1",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '502707680': '#d85c29',  
    '520027': '#003e60',
	  '150001': '#03995F',  
    '517027': '#67b6b2', 
    '900001': '#892b7d',
    '502707683': '#842e2c',
	  '500001': '#e9b435',  
    
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
 



//SISSU

$scope.SSU = '<p class="lateral1">Prestación de Servicio Social Unadista</p>' +
'<ul>' +
'<li><strong>Nota: </strong> El estudiante debe pagar el equivalente a tres créditos académicos (en términos pecunarios), sin sumar a la malla curricular y solo aplica como cumplimiento al requisito de grado (Acuerdo 080 de julio de 2015).</li>' +
'</ul>';


//ELECTIVOS DISCIPLINARES Común EIBC

$scope.bas01 = '<p class="lateral1">Electivos Interdisciplinar Básico Común - EIBC</p>' +
'<ul>' +
'<li>Fundamentos de gestión integral - <strong>Código: </strong>112001 - <strong>Créditos: </strong>3</li>' +
'<li>Responsabilidad social empresaria - <strong>Código: </strong>120001 - <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento solidario - <strong>Código: </strong>105020 - <strong>Créditos: </strong>3</li>' +
'<li>Pensamiento lógico y matemático - <strong>Código: </strong>200611 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo. La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';


//Electivos Disciplinar Especiífico EDE

$scope.bas02 = '<p class="lateral1">Electivos Disciplinar Específico - DE</p>' +
'<ul>' +
'<li>Proyectos de Aula - <strong>Código: </strong>514514 - <strong>Créditos: </strong>3</li>' +
'<li>Introducción al braille - <strong>Código: </strong>514020 - <strong>Créditos: </strong>3</li>' +
'<li>Introducción a la LSC - <strong>Código: </strong>502707694 - <strong>Créditos: </strong>3</li>' +
'<li>Problemas de Aprendizaje - <strong>Código: </strong>514509 - <strong>Créditos: </strong>3</li>' +
'<li>Pedagogía Hospitalaria - <strong>Código: </strong>514011 - <strong>Créditos: </strong>3</li>' +
'<li>Didáctica de las artes integradas - <strong>Código: </strong>514002 - <strong>Créditos: </strong>3</li>' +
'<li>Estimulación adecuada - <strong>Código: </strong>514504 - <strong>Créditos: </strong>3</li>' +
'<li>Filosofía para niños - <strong>Código: </strong>514510 - <strong>Créditos: </strong>3</li>' +
'<li>Desarrollo del lenguaje - <strong>Código: </strong>514503 - <strong>Créditos: </strong>3</li>' +
'<li>Desarrollo del pensamiento científico y computacional - <strong>Código: </strong>502707689 - <strong>Créditos: </strong>3</li>' +
'<li>Neurodesarrollo y psicomotricidad - <strong>Código: </strong>502707690 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo. La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';


//Electivas Formación Complementaria

$scope.bas04 = '<p class="lateral1">Electivas Formación Complementaria - EFC</p>' +
'<ul>' +
'<li>Protocolo - <strong>Código:</strong> 80007 - <strong>Créditos:</strong> 1</li>' +
'<li>Teatro - <strong>Código:</strong> 80010 - <strong>Créditos:</strong> 1</li>' +
'<li>Guitarra - <strong>Código:</strong> 80005 - <strong>Créditos:</strong> 1</li>' +
'<li>Hoja de vida - <strong>Código:</strong> 300040 - <strong>Créditos:</strong> 2</li>' +
'</ul>' +
'<p><strong>Nota:</strong> Solo se debe seleccionar un curso (1) electivo. La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';


});

})();
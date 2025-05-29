(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Algebra, Trigonometría y Geometría Análitica",codigo:"301301",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"1",curso:"Introducción a las Ciencias Agrarías",codigo:"302407465",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302407465"] },
{ periodo:"1",curso:"Biología",codigo:"30176",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176","301615"] },
{ periodo:"1",curso:"Cátedra Unadista", codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Quimica organica",codigo:"300047",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Calculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"2",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Bioquímica Vegetal",codigo:"303526990",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"2",curso:"Botánica Económica",codigo:"201710",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301615"] },
{ periodo:"2",curso:"Etica y Ciudadanía (Pregrado)",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["40002"] },
{ periodo:"2",curso:"Electivo Complementario",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Bioestadistica",codigo:"302277045",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"3",curso:"Topografía",codigo:"201620",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302407465"] },
{ periodo:"3",curso:"Genética",codigo:"201105",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"3",curso:"Microbiología del Suelo",codigo:"303019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Sociología Rural",codigo:"30174",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["40002"] },
{ periodo:"3",curso:"Electiva IBC",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Diseño Experimental",codigo:"300004",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"4",curso:"Agroclimatología",codigo:"30157",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30157"] },
{ periodo:"4",curso:"Fitomejoramiento",codigo:"30162",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"4",curso:"Electiva DC",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Antropología  Rural",codigo:"30175",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["40002"] },
{ periodo:"4",curso:"Ingles A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"5",curso:"Contabilidad, Presupuesto y Costos",codigo:"113001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Edafología y Fertilidad",codigo:"201612",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30157"] },
{ periodo:"5",curso:"Electiva DC",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"5",curso:"Fisiología Vegetal",codigo:"201711",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301615"] },
{ periodo:"5",curso:"Diseño de Proyectos Rurales",codigo:"303526993",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["40002"] },
{ periodo:"5",curso:"Ingles A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"6",curso:"Electiva DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"6",curso:"Maquinaria y Mecanización Agrícola",codigo:"201619",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30157"] },
{ periodo:"6",curso:"Fisiologia de Cultivos",codigo:"C300030",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30161"] },
{ periodo:"6",curso:"Agricultura Biológica",codigo:"301615",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301615","30161"] },
{ periodo:"6",curso:"Politica Agraria y Ambiental",codigo:"201510",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["40002"] },
{ periodo:"6",curso:"Ingles B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"6",curso:"Electiva DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"7",curso:"Técnicas de Investigación",codigo:"100104",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"7",curso:"Riegos y Drenajes",codigo:"201616",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30157"] },
{ periodo:"7",curso:"Fitopatología",codigo:"30165",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30161"] },
{ periodo:"7",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112001"] },
{ periodo:"7",curso:"Entomologia Agrícola",codigo:"30159",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30159"] },
{ periodo:"7",curso:"Ingles B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"8",curso:"Formulación  de Proyectos Productivos",codigo:"358155",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"8",curso:"Manejo y Conservación de Suelos",codigo:"30160",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30157"] },
{ periodo:"8",curso:"Manejo de arvenses",codigo:"30164",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30161"] },
{ periodo:"8",curso:"Manejo Integrado de Enfermedades",codigo:"30164",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30161"] },
{ periodo:"8",curso:"Manejo Integrado de Plagas",codigo:"300028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30159"] },
{ periodo:"8",curso:"Mercadeo Agropecuario",codigo:"300005",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["112001"] },

{ periodo:"9",curso:"Evaluación de Proyectos Productivos",codigo:"358156",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"9",curso:"Biodiversidad y Servicios Ecosistemicos",codigo:"302277025",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"9",curso:"Extensión Agrícola",codigo:"303016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30161"] },
{ periodo:"9",curso:"Propagación y micropropagación de plantas",codigo:"30161",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30161"] },
{ periodo:"9",curso:"Trabajo de Grado",codigo:"204015",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Electiva DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electiva DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"10",curso:"Electivo Complementario",codigo:"*",creditos:"1",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Electivo Complementario",codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Biodiversidad y Servicios Ecosistemicos",codigo:"302277025",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"10",curso:"Electiva DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Poscosecha",codigo:"30167",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30159"] },
{ periodo:"10",curso:"Electiva DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Electiva DE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] }

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
    '301301': '#d85c29',  
    '302407465': '#003e60',
	'30176': '#a72e47',  
    '301615': '#67b6b2', 
    '40002': '#892b7d',
    '30159': '#1690E0',
	'900001': '#03995F',  
    '30161': '#6CDF70', 
	'30157': '#e9b435', 
	'112001': '#482999', 
	
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
 


//Electivo Complementario


$scope.bas01 = '<p class="lateral1">Electivos Complementarios</p>'+
'<ul>'+
'<li>Curso: Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Curso: Proyecto de vida - <strong>Código: </strong>80007 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Saludo Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Curso: La persona como ser trascendental - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Curso: Actividad Física y para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Discapacidad y Sexualidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo, la oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electiva IBC

$scope.bas02 = '<p class="lateral1">Electivos IBC</p>'+
'<ul>'+
'<li>Curso: Educación Ambiental - <strong>Código: </strong>3580283 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo, la oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electiva DC

$scope.bas03 = '<p class="lateral1">Electivos Disciplinar Común</p>'+
'<ul>'+
'<li>Curso: Organización Asociativa - <strong>Código: </strong>102953 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Calidad y Productividad - <strong>Código: </strong>102507 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Fundamentos de Economía - <strong>Código: </strong>105001 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Hoja de Vida - <strong>Código: </strong>300040 - <strong>Créditos: </strong>1</li>' +
'<li>Curso: Enfoques de la Investigación - <strong>Código: </strong>302277047 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo, la oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electiva DE

$scope.basico = '<p class="lateral1">Electivos Disciplinar Específico</p>'+
'<hr>' +
'<p class="lateral1">Fitotecnia</p>'+
'<ul>'+
'<li>Curso: Frutales - <strong>Código: </strong>201621 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Horticultura - <strong>Código: </strong>201618 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Cultivo de Clima Medio - <strong>Código: </strong>303022 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Cultivo de Clima Frío - <strong>Código: </strong>302571 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Cultivo de Clima Cálido - <strong>Código: </strong>303021 - <strong>Créditos: </strong>2</li>' +
'<li>Curso: Floricultura - <strong>Código: </strong>302568 - <strong>Créditos: </strong>2</li>' +
'</ul>' +
'<hr>' +
'<p class="lateral1">Aguas y Suelos</p>'+
'<ul>'+
'<li>Curso: Manejo de Cuencas Hidrográficas - <strong>Código: </strong>303013 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Planificación Territorio - <strong>Código: </strong>201722 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Manejo de Aguas Residuales en Pequeñas Comunidades - <strong>Código: </strong>358041 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Fotointerpretación y Mapificación - <strong>Código: </strong>201722 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Procesos de Biorremediación - <strong>Código: </strong>358025 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Sistema de Información Geográfica - <strong>Código: </strong>358031 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Nutrición Vegetal - <strong>Código: </strong>302570 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Sistema de Información Geográfica Avanzada - <strong>Código: </strong>303049 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p class="lateral1">Biodiversidad</p>'+
'<ul>'+
'<li>Curso: Manejo y Aprovechamiento de Fauna Silvestre - <strong>Código: </strong>302277040 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Sistemas Silvopastoriles - <strong>Código: </strong>302277030 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Restauración de Ecosistemas - <strong>Código: </strong>302277041 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Producción y Tecnificación de Semillas - <strong>Código: </strong>303018 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Herbología y Alelopatía - <strong>Código: </strong>305698 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p class="lateral1">Desarrollo Rural</p>'+
'<ul>'+
'<li>Curso: Administración de Empresas Agropecuarias - <strong>Código: </strong>11602 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Sistemas de Agroindustria Rural - <strong>Código: </strong>201624 - <strong>Créditos: </strong>3</li>' +
'<li>Curso: Energía a partir de Biomasa - <strong>Código: </strong>358053 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización, aprobando por lo menos 3 cursos electivos disciplinares específicos de ésta. Los dos cursos restantes podrá tomarlos en cualquier otra línea de profundización.</p>';

});

})();
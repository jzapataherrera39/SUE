(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a la Zootecnia",codigo:"90011",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90011"] },
{ periodo:"1",curso:"Química General",codigo:"201102",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"434207",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"2",curso:"Biología (ECAPMA)",codigo:"30176",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90011"] },
{ periodo:"2",curso:"Química Orgánica (ECAPMA)",codigo:"300047",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"2",curso:"Introducción a la Morfofisiología Animal",codigo:"201106",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201106"] },
{ periodo:"2",curso:"Pensamiento Lógico Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"2",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Formación complementaria",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"3",curso:"Microbiología",codigo:"201504",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90011"] },
{ periodo:"3",curso:"Bioquímica Metabólica",codigo:"352001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"3",curso:"Salud Animal",codigo:"201203",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201106"] },
{ periodo:"3",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"3",curso:"Mercadeo Agropecuario",codigo:"300005",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["300005"] },
{ periodo:"3",curso:"Suelos, Pastos y Forrajes",codigo:"303037209",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"4",curso:"Genética",codigo:"201105",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["90011"] },
{ periodo:"4",curso:"Nutrición y Alimentación Animal",codigo:"201111",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"4",curso:"Morfofisiología Animal",codigo:"201107",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201106"] },
{ periodo:"4",curso:"Ética para la Producción Animal",codigo:"330002",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"4",curso:"Costos y Presupuestos",codigo:"102015",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["300005"] },
{ periodo:"4",curso:"Cálculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"4",curso:"Formación complementaria",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"5",curso:"Sistema de Producción Bovino",codigo:"201207",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"5",curso:"Estadística y Probabilidad Aplicada a las Ciencias Agrarias",codigo:"300032",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["300032"] },
{ periodo:"5",curso:"Reproducción Animal",codigo:"201110",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201106"] },
{ periodo:"5",curso:"Sistema de Producción Porcino",codigo:"201205",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"5",curso:"Fundamentos de Economía",codigo:"102003",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["300005"] },
{ periodo:"5",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"6",curso:"Mejoramiento Animal",codigo:"201108",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201108"] },
{ periodo:"6",curso:"Diseño Experimental",codigo:"300004",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["300032"] },
{ periodo:"6",curso:"Sistema de Producción Avícola",codigo:"303099",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"6",curso:"Política Agraria y Ambiental",codigo:"201510",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"6",curso:"Diseño y Evaluación de Proyectos",codigo:"331005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["300005"] },
{ periodo:"6",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"6",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"7",curso:"Mejoramiento Avanzado",codigo:"201503",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201108"] },
{ periodo:"7",curso:"Nutrición Avanzada",codigo:"201501",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201501"] },
{ periodo:"7",curso:"Sistema de Producción de Pequeños Rumiantes",codigo:"302267546",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"7",curso:"Técnicas de Investigación",codigo:"100104",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"7",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"7",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"8",curso:"Reproducción Avanzada",codigo:"201502",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Nutrición de rumiantes",codigo:"201506",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201501"] },
{ periodo:"8",curso:"Manejo y Procesamiento de Leche",codigo:"201509",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Trabajo de Grado (Profesional Agrarias)",codigo:"204015",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Formación complementaria",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"9",curso:"Manejo y Procesamiento de Carne",codigo:"201511",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Sistema de Producción Acuícola",codigo:"201508",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Interacción con Comunidades Rurales",codigo:"303037208",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"10",curso:"Zoocría",codigo:"103400",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"10",curso:"Sociología (rural)",codigo:"30174",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"10",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"10",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"10",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"10",curso:"Electiva",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"}

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
    '90011': '#d85c29',  
    '201102': '#003e60',
	  '201106': '#03995F',  
    '200611': '#67b6b2', 
    '300005': '#892b7d',
    '300032': '#842e2c',
	  '201108': '#e9b435',  
  	'201501': '#6CDF70', 
    
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
 


//Electivas
$scope.bas01 = '<p class="tit3 h5">Electivo Disciplinar Específico</p>' +
  '<ul>' +
    '<li><strong>Curso: </strong>Sistema de Producción Cunícula - <strong>Código: </strong>201530 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Sistema de Producción Apícola - <strong>Código: </strong>201518 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Epidemiología - <strong>Código: </strong>201550 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Parasitología - <strong>Código: </strong>201540 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Agricultura Biológica - <strong>Código: </strong>301615 - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Planificación y Gestión de la Empresa Ganadera Bovina - <strong>Código: </strong>320026 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Edafología y Fertilidad - <strong>Código: </strong>201612 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Línea de Profundización en Sistema de Producción Avícola - <strong>Código: </strong>540001 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Línea de Profundización en Sistema de Producción Porcícola - <strong>Código: </strong>540004 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Línea de Profundización en Sistema de Producción Bovino de leche - <strong>Código: </strong>540003 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Línea de Profundización en Sistema de Producción Bovino de carne - <strong>Código: </strong>540002 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Animales de compañía - <strong>Código: </strong>3036886 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Sistemas Silvopastoriles - <strong>Código: </strong>302277030 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Bienestar Animal - <strong>Código: </strong>201570 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Sistema de Producción Equino - <strong>Código: </strong>303020 - <strong>Créditos: </strong>3</li>' +
  '</ul>' +
  '<hr>' +
  '<p class="tit3 h5">Electivo Disciplinar Común</p>' +
  '<ul>' +
    '<li><strong>Curso: </strong>Economía Agraria - <strong>Código: </strong>201628 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Gestión Empresarial - <strong>Código: </strong>201512 - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Herramientas participativas - <strong>Código: </strong>302277036 - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Biodiversidad y Servicios Ecosistémicos - <strong>Código: </strong>302277025 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Topografía - <strong>Código: </strong>201620 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Maquinaria y Mecanización Agrícola - <strong>Código: </strong>201619 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Manejo y Conservación de Suelos - <strong>Código: </strong>30160 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Sistemas de Información Geográfica - <strong>Código: </strong>358031 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Agroclimatología - <strong>Código: </strong>30157 - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Hoja de vida - <strong>Código: </strong>300040 - <strong>Créditos: </strong>1</li>' +
  '</ul>' +
  '<hr>' +
  '<p class="tit3 h5">Electivos IBC</p>' +
  '<ul>' +
    '<li><strong>Curso: </strong>Cálculo Integral - <strong>Código: </strong>100411 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Psicología - <strong>Código: </strong>100003 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Epistemología - <strong>Código: </strong>100101 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Antropología (Rural) - <strong>Código: </strong>30175 - <strong>Créditos: </strong>3</li>' +
    '<li><strong>Curso: </strong>Educación Ambiental - <strong>Código: </strong>358028 - <strong>Créditos: </strong>2</li>' +
  '</ul>' +
  '<hr>' +
  '<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//ELECTIVOS FORMACIÓN COMPLEMENTARIA
$scope.bas02 = '<p class="tit3 h5">Electivos Formación Complementaria</p>' +
  '<ul>' +
    '<li><strong>Curso: </strong>Componente Fisiológico - <strong>Código: </strong> - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Componente Estético - <strong>Código: </strong> - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Componente Espiritual - <strong>Código: </strong> - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Componente Psicosocial - <strong>Código: </strong> - <strong>Créditos: </strong>2</li>' +
    '<li><strong>Curso: </strong>Componente Físico Ambiental - <strong>Código: </strong> - <strong>Créditos: </strong>2</li>' +
  '</ul>' +
  '<hr>' +
  '<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';


});

})();
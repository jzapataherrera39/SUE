(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {



$scope.mt2 = [
{ periodo:"1",curso:"Algebra, Trigonometría y Geometría analítica",codigo:"301301",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"1",curso:"Introducción a la Ingeniería Agroforestal",codigo:"302277020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Química general",codigo:"201102",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Pensamiento Lógico Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Competencias Comunicativas", codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Cálculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Química orgánica",codigo:"300047",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"2",curso:"Biología (Agraria)",codigo:"30176",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"2",curso:"Herramientas Digitales para la Gestión del Conocimiento",codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"3",curso:"Cálculo Integral",codigo:"100411",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"3",curso:"Física General",codigo:"100413",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100413"] },
{ periodo:"3",curso:"Botánica Económica",codigo:"201710",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"3",curso:"Ecofisiología",codigo:"302277021",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"3",curso:"Fundamentos en Gestión Integral",codigo:"112001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"4",curso:"Ecuaciones Diferenciales",codigo:"100412",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"4",curso:"Mecánica de Fluidos",codigo:"302277022",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["100413"] },
{ periodo:"4",curso:"Química de suelos",codigo:"302277023",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102"] },
{ periodo:"4",curso:"Ecología",codigo:"302277024",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"4",curso:"Electiva Campo de Formación Interdisciplinar Básico Común (IBC) I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"5",curso:"Bioestadística",codigo:"302277045",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["302277045"] },
{ periodo:"5",curso:"Biodiversidad y Servicios Ecosistémicos",codigo:"302277025",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277025"] },
{ periodo:"5",curso:"Riegos y Drenajes",codigo:"201616",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201102","100413"] },
{ periodo:"5",curso:"Hidroclimatología",codigo:"302277027",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"5",curso:"Electiva Campo de Formación Interdisciplinar Básico Común (IBC) II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"6",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277045"] },
{ periodo:"6",curso:"Valoración Integral de la Biodiversidad",codigo:"302277046",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["302277025"] },
{ periodo:"6",curso:"Contabilidad, Costos y Presupuestos",codigo:"113001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["113001"] },
{ periodo:"6",curso:"Agroforestería con Cultivos Anuales y Perennes",codigo:"302277028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277028"] },
{ periodo:"6",curso:"Fotointerpretación y Mapificación",codigo:"201722",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["201722"] },
{ periodo:"6",curso:"Electiva Campo de Formación Complementario",codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"7",curso:"Diseño Experimental",codigo:"300004",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["302277045"] },
{ periodo:"7",curso:"Sanidad Agroforestal",codigo:"30173",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"7",curso:"Matemática Financiera",codigo:"102007",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["113001"] },
{ periodo:"7",curso:"Sistemas Silvopastoriles",codigo:"302277030",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277028"] },
{ periodo:"7",curso:"Sistemas de Información Geográfica",codigo:"358031",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["201722"] },
{ periodo:"7",curso:"Electiva Disciplinar Común (DC) I",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"8",curso:"Dasometría",codigo:"302277031",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277045"] },
{ periodo:"8",curso:"Planeación Prospectiva Estratégica",codigo:"111002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Trabajo de Grado",codigo:"204015",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"8",curso:"Modelación de Sistemas Agroforestales",codigo:"302277032",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277028"] },
{ periodo:"8",curso:"Electiva Disciplinar Común (DC) II",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"8",curso:"Electiva Campo de Formación Complementario",codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"9",curso:"Silvicultura",codigo:"302277035",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302277045"] },
{ periodo:"9",curso:"Comercio de Productos Agroforestales",codigo:"302277033",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Competitividad de Cadenas Agroalimentarias",codigo:"302277034",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Herramientas Participativas",codigo:"302277036",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"9",curso:"Electiva Disciplinar Especifica (DE)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"9",curso:"Electiva Disciplinar Especifica (DE)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"10",curso:"Dirección de Proyectos de Inversión",codigo:"302277037",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"10",curso:"Negocios y Logística Comercial",codigo:"302277038",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"10",curso:"Legislación Aplicada a Sistemas Agroforestales",codigo:"302277039",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"10",curso:"Electiva Disciplinar Especifica (DE)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Electiva Disciplinar Especifica (DE)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Electiva Campo de Formación Complementario",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"10",curso:"Prestación Servicio Social Unadista (Requisito de grado)",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] }

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
    '201102': '#003e60',
	  '30176': '#03995F',  
    '900001': '#67b6b2', 
    '100413': '#892b7d',
    '302277045': '#41839d',
	  '302277025': '#a72e47',  
    '113001': '#6CDF70',
    '302277028': '#842e2c',
    '201722': '#e9b435',
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
 

  
//Electiva Disciplanar Especifica (DE)

$scope.bas01 = '<p class="lateral1">Línea 1. Sistemas aplicados (DE)</p>' +
'<ul>' +
'<li>Manejo y Aprovechamiento de Fauna Silvestre - <strong>Código: </strong>302277040 - <strong>Créditos: </strong>3</li>' +
'<li>Topografía - <strong>Código: </strong>201620 - <strong>Créditos: </strong>3</li>' +
'<li>Manejo Integrado de Enfermedades - <strong>Código: </strong>300029 - <strong>Créditos: </strong>3</li>' +
'<li>Manejo Integrado de Plagas - <strong>Código: </strong>300028 - <strong>Créditos: </strong>3</li>' +
'<li>Viveros - <strong>Código: </strong>201614 - <strong>Créditos: </strong>3</li>' +
'<li>Control biológico Metodológico - <strong>Código: </strong>302547545 - <strong>Créditos: </strong>3</li>' +
'<li>Restauración de Ecosistemas - <strong>Código: </strong>302277041 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea 2. Instrumentos de gestión del territorio (DE)</p>' +
'<ul>' +
'<li>Manejo de Cuencas Hidrográficas - <strong>Código: </strong>303013 - <strong>Créditos: </strong>3</li>' +
'<li>Certificación de Bosques - <strong>Código: </strong>302277043 - <strong>Créditos: </strong>3</li>' +
'<li>Planificación Territorial - <strong>Código: </strong>201724 - <strong>Créditos: </strong>3</li>' +
'<li>Planificación y Manejo de Sistemas Agroforestales - <strong>Código: </strong>300023 - <strong>Créditos: </strong>3</li>' +
'<li>Seguimiento y Evaluación de Sistemas Agroforestales SAF - <strong>Código: </strong>302277736 - <strong>Créditos: </strong>3</li>' +
'<li>Sistemas de Información Geográfica Avanzado - <strong>Código: </strong>303049 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p class="lateral1">Línea 3. Administración y gestión (DE)</p>' +
'<ul>' +
'<li>Administración de Empresas Agropecuarias - <strong>Código: </strong>116002 - <strong>Créditos: </strong>3</li>' +
'<li>Mercadeo e Investigación de Mercados - <strong>Código: </strong>112003 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de Talento Humano - <strong>Código: </strong>121012 - <strong>Créditos: </strong>3</li>' +
'<li>Optimización de Procesos Agrarios - <strong>Código: </strong>302277044 - <strong>Créditos: </strong>3</li>' +
'<li>Diseño y Evaluación Ambiental de Proyectos - <strong>Código: </strong>303045 - <strong>Créditos: </strong>3</li>' +
'<li>Principios y Estrategias de Gestión Ambiental - <strong>Código: </strong>358020 - <strong>Créditos: </strong>3</li>' +
'<li>Introducción a la Administración Ambiental y de los Recursos Naturales - <strong>Código: </strong>302257170 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +

'<p><strong>Nota:</strong> Solo se debe seleccionar un curso (1) electivo.</p>';


//Electivo Campo Interdisciplinar Básico Común (IBC)

$scope.basico3 = '<p class="lateral1">Electivo Campo Interdisciplinar Básico Común (IBC) I</p>' +
'<ul>' +
'<li>Educación Ambiental - <strong>Código: </strong>358028 - <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento Solidario - <strong>Código: </strong>105020 - <strong>Créditos: </strong>3</li>' +
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo.</p>';


//Electivo Campo Interdisciplinar Básico Común (IBC)

$scope.basico6 = '<p class="lateral1">Electivo Campo Interdisciplinar Básico Común (IBC) II</p>' +
'<ul>' +
'<li>Responsabilidad Social Empresarial - <strong>Código: </strong>120002 - <strong>Créditos: </strong>3</li>' +
'<li>Excel Avanzado - <strong>Código: </strong>212059 - <strong>Créditos: </strong>3</li>' +
'<li>Introducción a la Programación - <strong>Código: </strong>301304 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo.</p>';


//Electivo Campo Disciplinar Común (DC)

$scope.basico4 = '<p class="lateral1">Electivo Campo Disciplinar Común (DC) I</p>' +
'<ul>' +
'<li>Animales de Compañía - <strong>Código: </strong>3036886 - <strong>Créditos: </strong>3</li>' +
'<li>Biometría - <strong>Código: </strong>302277048 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de Economía - <strong>Código: </strong>105001 - <strong>Créditos: </strong>3</li>' +
'<li>Higiene y Seguridad Laboral - <strong>Código: </strong>303040 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo.</p>';


//Electivo Campo Disciplinar Común (DC)

$scope.basico7 = '<p class="lateral1">Electivo Campo Disciplinar Común (DC) II</p>' +
'<ul>' +
'<li>Maquinaria y Mecanización Agrícola - <strong>Código: </strong>201619 - <strong>Créditos: </strong>3</li>' +
'<li>Calidad y Productividad - <strong>Código: </strong>102507 - <strong>Créditos: </strong>3</li>' +
'<li>Comercio y Negocios Internacionales - <strong>Código: </strong>102023 - <strong>Créditos: </strong>3</li>' +
'<li>Instrumentos de la Investigación - <strong>Código: </strong>302276994 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo.</p>';


//Electivo Campo Complementario

$scope.basico5 = '<p class="lateral1">Electivo Campo Complementario</p>' +
'<ul>' +
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>Salud Oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</li>' +
'<li>Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</li>' +
'<li>Actividad Física y para la Salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</li>' +
'<li>La Persona como ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<li>Discapacidad y Sexualidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>2</li>' +
'<li>English Composition I - <strong>Código: </strong>450073 - <strong>Créditos: </strong>3</li>' +
'<li>Human Resources Management - <strong>Código: </strong>450099 - <strong>Créditos: </strong>3</li>' +
'<li>Strategic Planning - <strong>Código: </strong>450064 - <strong>Créditos: </strong>3</li>' +
'</ul>' +
'<hr>' +
'<p><strong>Nota: </strong> Solo se debe seleccionar un curso (1) electivo</p>';


//No se identifico que tipo de electivas son estas materias
'<p>Agricultura Biológica - <strong>Código: </strong>301615 - <strong>Créditos: </strong>3</p>' +
'<p>Agroclimatología - <strong>Código: </strong>30157 - <strong>Créditos: </strong>3</p>' +
'<p>Enfoques de la Investigación - <strong>Código: </strong>302277047 - <strong>Créditos: </strong>3</p>'+
'<p>Gestión Empresarial - <strong>Código: </strong>201512 - <strong>Créditos: </strong>3</p>'+
'<p>Hoja de Vida - <strong>Código: </strong>300040 - <strong>Créditos: </strong>3</p>';


});

})();


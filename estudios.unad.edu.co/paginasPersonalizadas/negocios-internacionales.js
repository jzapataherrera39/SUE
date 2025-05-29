(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Pensamiento Lógico y Matemático (IBC)",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"1",curso:"Fundamentos de Economía",codigo:"105001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"1",curso:"Fundamentos de los Negocios Internacionales",codigo:"127001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento (IBC)", codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas (IBC)",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Electiva 1 (IBC) Componente en Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"11",pre1:"0"},
{ periodo:"2",curso:"Microeconomía",codigo:"120003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"2",curso:"Comercio y Negocios Internacionales",codigo:"127002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"2",curso:"Fundamentos de Administración",codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"131"},
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"2",curso:"Ética y Ciudadanía (IBC)",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Estadistica y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Macroeconomía",codigo:"126007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"3",curso:"Integración Económica y Acuerdos Comerciales",codigo:"127003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"3",curso:"Contabilidad, Costos y Presupuestos Internacionales",codigo:"127004",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"141"},
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"3",curso:"Fundamentos y Generalidades de la Investigación (IBC)",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"4",curso:"Electiva I (Disciplinar Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Economía y Finanzas Internacionales",codigo:"127005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"4",curso:"Matemática Financiera",codigo:"116005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"141"},
{ periodo:"4",curso:"Mercadeo e Investigación de Mercados",codigo:"112003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"4",curso:"Electiva III (Interdisciplinar Básico Común) Componente Investigativo",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"5",curso:"Electiva II (Disciplinar Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Relaciones y Cooperación Internacional",codigo:"127016",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"5",curso:"Análisis y Gestión Financiera",codigo:"127006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"141"},
{ periodo:"5",curso:"Gestión de Mercados",codigo:"127007",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"5",curso:"Responsabilidad Social Empresarial",codigo:"120002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
 
{ periodo:"6",curso:"Electiva II (Interdisciplinar Básico Común - Componente Social Solidario)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Ética en los Negocios Internacionales",codigo:"127015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Prospectiva Financiera Internacional",codigo:"127012",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"19",pre1:"141"},
{ periodo:"6",curso:"Marketing Internacional",codigo:"127014",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"6",curso:"Cadena de Abastecimiento Internacional",codigo:"127013",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"6",curso:"Electiva III (Disciplinar Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"7",curso:"Electiva I (Formación Complementaria)",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Estudios Multiculturales I (Europa - África - Asia - Oriente Medio)",codigo:"127017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"International Negotiation Strategies",codigo:"127018",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"141",pre1:"0"},
{ periodo:"7",curso:"Formulación y Gestión de Proyectos Internacionales",codigo:"127020",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"19",pre1:"0"},
{ periodo:"7",curso:"Derecho Internacional de los Negocios",codigo:"127019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"7",curso:"Electiva I (Disciplinar Específico)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Electiva II (Formación Complementaria)",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Estudios Multiculturales II (América)",codigo:"127030",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"International Business Management",codigo:"127027",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"141"},
{ periodo:"8",curso:"E-Commerce",codigo:"127028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"141"},
{ periodo:"8",curso:"Mercado de Capitales",codigo:"127029",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"19",pre1:"0"},
{ periodo:"8",curso:"Electiva II (Disciplinar Específico)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"9",curso:"Electiva III (Formación Complementaria)",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Electiva III (Disciplinar Específico)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Electiva IV (Disciplinar Específico)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",clasificacion1:"Servicio Social Unadista",pre:"0",pre1:"0"},

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
	  materia.preColor1 = 'white';	  
    }
  }

  // Verificar si la variable pre del curso tiene un valor diferente de '0'
  if (curso.pre !== '0') {
    // Establecer el color correspondiente según el valor de pre
    let color;
    switch (curso.pre) {
      case '11':color = '5px solid #FF00FF';break;
      case '12':color = '5px solid #D90000';break;
      case '13':color = '5px solid #FFBF00';break;
      case '14':color = '5px solid #00BFFF';break;
	  case '15':color = '5px solid #36D900';break;
	  case '16':color = '5px solid #FF7A4D';break;
      case '17':color = '5px solid #00D9D9';break;
	  case '18':color = '5px solid #9673FF';break;
	  case '19':color = '5px solid #9688FF';break;
      default:color = '0px; display:none'; }

    // Aplicar el color a todos los cursos que tengan el mismo valor en pre
    for (const periodo in $scope.curriculum) {
      const materias = $scope.curriculum[periodo];
      for (const materia of materias) {
        if (materia.pre === curso.pre) {
          materia.preColor = color;
        }
      }
    }
  }

  // Verificar si la variable pre1 del curso tiene un valor diferente de '0'
  if (curso.pre1 !== '0') {
    // Establecer el color correspondiente según el valor de pre1
    let color1;
    switch (curso.pre1) {
      case '131':color1 = '5px solid #9673FF';break;
	  case '141':color1 = '5px solid #36D900';break;
      case '151':color1 = '5px solid #9688FF';break;  
      default:
        color = '0px; display:none';
    }

    // Aplicar el color a todos los cursos que tengan el mismo valor en pre1
    for (const periodo in $scope.curriculum) {
      const materias = $scope.curriculum[periodo];
      for (const materia of materias) {
        if (materia.pre1 === curso.pre1) {
          materia.preColor1 = color1;
        }
      }
    }
  }
  

  
  // Establecer el curso seleccionado
  $scope.selectedCurso = curso;
  $scope.verinfo=true;
  
  
};
	
//estilo malla	  
  
$scope.getStyle = function(curso) {
    var clasificacionFinal = curso.clasificacion1 || curso.clasificacion;

    var styles = {
        'border-left': clasificacionFinal === 'Obligatorio' ? '6px solid #282828' :
                       clasificacionFinal === 'Electiva' ? '6px solid #4AA5FF' :
                       clasificacionFinal === 'Servicio Social Unadista' ? '6px solid #45C045' : ''
    };

    if (clasificacionFinal === 'Electiva') {
        styles['background-color'] = '#DDEEFF'; // Fondo para cursos Electiva
    } else if (clasificacionFinal === 'Servicio Social Unadista') {
        styles['background-color'] = '#C8FACC'; // Fondo para cursos Componente Práctico (tono más claro)
    }

    if (curso === $scope.selectedCurso) {
        styles['background-color'] = '#282828'; // Fondo negro
        styles['color'] = '#fff'; // Letras blancas
    }

    return styles;
};


 
 //estilo prerrequisitos popup
   $scope.getStyle1 = function(curso) {
        if (curso === $scope.selectedCurso) {return { 'color': '#0074E8', 'font-weight': 'bold' };}
        return { 'color': '#535362' };
    }; 

$scope.getPreRequisitos = function(tipo) {
    if (!$scope.selectedCurso || !$scope.selectedCurso[tipo]) {
        return []; // Retorna un array vacío si `selectedCurso` o `selectedCurso[tipo]` es `undefined`
    }

    return $scope.mt2
        .filter(function(curso) {
            return curso[tipo] && curso[tipo] === $scope.selectedCurso[tipo]; // Verifica que curso[tipo] existe antes de comparar
        })
        .sort(function(a, b) {
            return (a.periodo || 0) - (b.periodo || 0); // Asegura que `periodo` no sea undefined
        });
};


$scope.isPreRequisito = function(curso) {return curso.pre === $scope.selectedCurso.pre;};
$scope.isPreRequisito1 = function(curso) {return curso.pre1 === $scope.selectedCurso.pre1;};
 
$scope.getBorderBottomStyle = function(curso) {return {'border-bottom': curso.preColor,'height': '120px'};};
$scope.getBorderBottomStyle1 = function(curso) {return { 'border-bottom': curso.preColor1 };};

//color escuela
 $scope.escuela = function() {return { 'color': '#0074E8'}; };

//FORMACIÓN INTERDISCIPLINAR BÁSICA COMÚN
//Electiva 1 (IBC) Componente en Ciencias Básicas
$scope.bas01 = '<p class="tit3 h5">Componente en Ciencias Básicas</p>'+
'<ul>'+
'<li>Algebra Lineal - <strong>Código: </strong>208046 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de Matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</li>' +
'<li>Cálculo Diferencial - <strong>Código: </strong>100410 - <strong>Créditos: </strong>3</p>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electiva 2 (IBC) Componente Social - Solidario
$scope.bas02 = '<p class="tit3 h5">Componente Social Solidario</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</p>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electiva 3 (IBC) Componente Investigativo
$scope.bas03 = '<p class="tit3 h5">Componente Investigativo</p>'+
'<ul>'+
'<li>Investigación Cualitativa - <strong>Código: </strong>105019 - <strong>Créditos: </strong>3</li>' +
'<li>Investigación Cuantitativa - <strong>Código: </strong>101267424 - <strong>Créditos: </strong>3</li>' +
'<li>Técnicas de Investigación - <strong>Código: </strong>101267216 - <strong>Créditos: </strong>3</p>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electivos Disciplinar Especificación por Líneas de Profundización
$scope.bas04 = '<p class="tit3 h5">Electivos Disciplinar Especificación por Líneas de Profundización</p>'+
'<hr>'+
'<p class="tit3 h5">Línea de profundización Logística Integral</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Gestión y modelos de Inventario - <strong>Código: </strong>127008 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Distribución Física Internacional - <strong>Código: </strong>127009 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Gerencia de logistica - <strong>Código: </strong>127010 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Business Intelligence (Big Data) - <strong>Código: </strong>127011 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización Estrategias de Negociación y Acciones de Internacionalización </p>'+
'<ul>'+
'<li><strong>Curso: </strong>Diagnostico Empresarial orientado a la Competitividad - <strong>Código: </strong>126003 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Planeación estratégica de Internacionalización - <strong>Código: </strong>127024 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Diseño e imagen de marcas (Economía Naranja) - <strong>Código: </strong>127025 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Mercadeo Social y E-Marketing - <strong>Código: </strong>127026 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización Negocios Multiculturales</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Integración profunda y Mercados Emergentes - <strong>Código: </strong>127021 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Competitividad Intercultural - <strong>Código: </strong>127022 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Geopolitica y Desarrollo Humano - <strong>Código: </strong>105031 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Solución de Conflictos Internacionales - <strong>Código: </strong>127023 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>El estudiante podrá escoger 1 línea de profundización de acuerdo a sus intereses de formación para dar cumplimiento a los 12 créditos electivos establecidos en la malla curricular </p>';

//FORMACIÓN COMPLEMENTARIA - CFC
//Electiva 1 (FC) Formación Complementaria
$scope.bas05 = '<p class="tit3 h5">Electivo 1 Campo de Formación Complementaria</p>'+
'<ul>'+
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La Persona como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electiva 2 y 3 (FC) Formación Complementaria
$scope.bas06 = '<p class="tit3 h5">Electivo Campo de Formación Complementaria</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';


//FORMACIÓN DISCIPLINAR COMÚN
$scope.bas07 = '<p class="tit3 h5">Formación Disciplinar Común</p>'+
'<ul>'+
'<li>Geografía Económica - <strong>Código: </strong>105033 - <strong>Créditos: </strong>3</li>' +
'<li>Economía Solidaria - <strong>Código: </strong>120005 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión Local - <strong>Código: </strong>102954 - <strong>Créditos: </strong>3</li>' +
'<li>Sistema Logstico de Transporte - <strong>Código: </strong>120010 - <strong>Créditos: </strong>3</li>' +
'<li>Logistica Comercial - <strong>Código: </strong>110008 - <strong>Créditos: </strong>3</li>' +
'<li>Logistica Inversa - <strong>Código: </strong>120007 - <strong>Créditos: </strong>3</li>' +
'<li>Gerencia Estrategica de las Operaciones - <strong>Código: </strong>126010 - <strong>Créditos: </strong>3</li>' +
'<li>Habilidades para la Toma de Decisiones  - <strong>Código: </strong>126001 - <strong>Créditos: </strong>3</li>' +
'<li>Diseño de Proyectos Socialmente Responsables - <strong>Código: </strong>127031 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

$scope.bas08 = '<p><strong>Nota: </strong>El estudiante debe pagar el equivalente a tres créditos académicos (en términos pecunarios), sin sumar a la malla curricular y solo aplica como cumplimiento al requisito de grado. En consonancia con el Acuerdo 001 de febrero 14 de 2013, el Servicio Social UNADISTA es un requisito de grado.</p>';

});

})();
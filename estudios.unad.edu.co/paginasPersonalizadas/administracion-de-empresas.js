(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Fundamentos de Administración",codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"17",pre1:"0"},

{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Pensamiento Administrativo",codigo:"112002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"2",curso:"Fundamentos de Economía",codigo:"105001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"2",curso:"Electiva 1 Componente de Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"15",pre1:"0"},
{ periodo:"2",curso:"Contabilidad Financiera Básica",codigo:"106003",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"16",pre1:"0"},
{ periodo:"2",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"17",pre1:"0"},

{ periodo:"3",curso:"Gestión del Talento Humano",codigo:"121012",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Innovación de la Administración Posmoderna",codigo:"126006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"3",curso:"Microeconomía",codigo:"120003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"3",curso:"Estadística y Probalidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"3",curso:"Gerencia Estratégica de Costos y Presupuestos",codigo:"126008",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"16",pre1:"0"},
{ periodo:"3",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"17",pre1:"0"},

{ periodo:"4",curso:"Psicología del Trabajo y las Organizaciones",codigo:"126013",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"4",curso:"Diagnóstico Empresarial para la Competitividad",codigo:"126003",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"4",curso:"Macroeconomía",codigo:"126007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"4",curso:"Habilidades para la Toma de Decisiones",codigo:"126001",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"4",curso:"Matemática Financiera",codigo:"116005",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"16",pre1:"0"},
{ periodo:"4",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"17",pre1:"0"},
{ periodo:"4",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"5",curso:"Electiva 2 Componente Social Solidario",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Planeación y Prospectiva hacia Escenarios Globales",codigo:"126004",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"5",curso:"Fundamentos de Negocios Internacionales",codigo:"105016",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Fundamentos y Generalidades para la Investigación",codigo:"1150001",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"5",curso:"Diseño y Evaluación de Proyectos",codigo:"126009",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"16",pre1:"0"},
{ periodo:"5",curso:"Mercadeo e Investigación de Mercados",codigo:"112003",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"18",pre1:"0"},
 
{ periodo:"6",curso:"Electivo 1 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Responsabilidad Social Empresarial",codigo:"120002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"6",curso:"Gerencia Estratégica de las Operaciones",codigo:"126010",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"6",curso:"Electiva 3 Componente Investigativo",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"15",pre1:"0"},
{ periodo:"6",curso:"Finanzas Corporativas para la Toma de Decisiones",codigo:"106011",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"16",pre1:"0"},
{ periodo:"6",curso:"Prospectiva del Marketing",codigo:"126012",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"18",pre1:"0"},

{ periodo:"7",curso:"Electivo 2 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Gerencia Pública",codigo:"126005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Logística de las Operaciones",codigo:"126011",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"7",curso:"Metodología y Gestión de la Investigación",codigo:"106023",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"7",curso:"Sistemas de Información Gerencial",codigo:"126002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Electivo 1 Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Electivo 3 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Legislación Empresarial",codigo:"111001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Sistemas Integrados de Gestión Integral HSEQ",codigo:"121006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"8",curso:"Electivo 4 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Electivo 2 Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Electivo 3 Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Desarrollo de Opción de Grado",codigo:"*",creditos:"0",tipo:"",clasificacion:"Obligatorio",pre:"15",pre1:"0"},

{ periodo:"9",curso:"Electivo 5 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Electivo 1 Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Electivo 2 Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Electivo 3 Campo de Formación Complementaria",codigo:"*",creditos:"2",tipo:"Teórico / Práctico",clasificacion:"Electiva",pre:"0",pre1:"0"}

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
    case '11': color = '5px solid #FF0000'; break;  // Rojo intenso
    case '12': color = '5px solid #00FF00'; break;  // Verde brillante
    case '13': color = '5px solid #0000FF'; break;  // Azul neón
    case '14': color = '5px solid #FFFF00'; break;  // Amarillo fuerte
    case '15': color = '5px solid #FF00FF'; break;  // Fucsia vibrante
    case '16': color = '5px solid #00FFFF'; break;  // Cian eléctrico
    case '17': color = '5px solid #FF6600'; break;  // Naranja fuerte
    case '18': color = '5px solid #9933FF'; break;  // Morado brillante
    case '19': color = '5px solid #39FF14'; break;  // Verde neón
      default:color = 'display:none'; }

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
    case '131': color1 = '5px solid #FF1493'; break; // Rosa fuerte
    case '141': color1 = '5px solid #FFD700'; break; // Dorado brillante
    case '151': color1 = '5px solid #1E90FF'; break; // Azul eléctrico
    case '161': color1 = '5px solid #8A2BE2'; break; // Azul violeta intenso
    case '171': color1 = '5px solid #DC143C'; break; // Rojo carmesí
    default: color = 'display:none';
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
                       clasificacionFinal === 'Componente Práctico' ? '6px solid #45C045' : ''
    };

    if (clasificacionFinal === 'Electiva') {
        styles['background-color'] = '#DDEEFF'; // Fondo para cursos Electiva
    } else if (clasificacionFinal === 'Componente Práctico') {
        styles['background-color'] = '#C8FACC'; 
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


//Electiva 1 Componente de Ciencias Básicas
$scope.bas01 = '<p class="tit3 h5">Electiva 1 Componente de Ciencias Básicas</p>'+
'<ul>'+
'<li>Fundamentos de Matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</li>' +
'<li>Algebra Lineal - <strong>Código: </strong>208046 - <strong>Créditos: </strong>3</li>' +
'<li>Cálculo Diferencial - <strong>Código: </strong>100410 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electiva 2 Componente Social Solidario
$scope.bas02 = '<p class="tit3 h5">Electiva 2 Componente Social Solidario</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electivo 1 Disciplinar Específico
$scope.bas03 = '<p class="tit3 h5">Línea de profundización 1 - Gestión Empresarial en un Contexto Global</p>'+
'<ul>'+
'<li>Gestión de la Importación y la Exportación - <strong>Código: </strong>126014 - <strong>Créditos: </strong>3</li>' +
'<li>Mercados Globales Emergentes - <strong>Código: </strong>126015 - <strong>Créditos: </strong>3</li>' +
'<li>Competitividad Intercultural - <strong>Código: </strong>127022 - <strong>Créditos: </strong>3</li>' +
'<li>Finanzas Internacionales - <strong>Código: </strong>101067145 - <strong>Créditos: </strong>3</li>' +
'<li>Geopolítica, Gobernanza y Análisis de Problemas Sociales Globales - <strong>Código: </strong>106022 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización 2 Gestión de la Innovación y Desarrollo del Espíritu Emprendedor</p>'+
'<ul>'+
'<li>Generación de Ideas de Negocio - <strong>Código: </strong>110013 - <strong>Créditos: </strong>3</li>' +
'<li>Desarrollo del Modelo de Negocio - <strong>Código: </strong>110012 - <strong>Créditos: </strong>3</li>' +
'<li>Intraemprendimiento e innovación Social - <strong>Código: </strong>126017 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión de la Innovación - <strong>Código: </strong>126016 - <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento Experimental y Financiamiento - <strong>Código: </strong>126018 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización  3 Gestión del Capital Humano</p>'+
'<ul>'+
'<li>Gestión de los Activos Intangibles - <strong>Código: </strong>126019 - <strong>Créditos: </strong>3</li>' +
'<li>Liderazgo Transformacional - <strong>Código: </strong>126021 - <strong>Créditos: </strong>3</li>' +
'<li>Comunicación Organizacional - <strong>Código: </strong>126023 - <strong>Créditos: </strong>3</li>' +
'<li>Neuroadministración - <strong>Código: </strong>126020 - <strong>Créditos: </strong>3</li>' +
'<li>Bienestar Laboral y Organizaciones Saludables - <strong>Código: </strong>126022 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización, aprobando por lo menos 3 cursos electivos disciplinares específicos de ésta. Los dos cursos restantes podrá tomarlos en cualquier otra línea de profundización</p>';

//Electivo 1 Campo de Formación Complementaria
$scope.bas04 = '<p class="tit3 h5">Electivo 1 Campo de Formación Complementaria</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La Persona como Ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'<li>Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electivo 2 Disciplinar Común
$scope.bas05 = '<p class="tit3 h5">Electivo 2 Disciplinar Común</p>'+
'<ul>'+
'<li>Economía Solidaria - <strong>Código: </strong>120005 - <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento Solidario - <strong>Código: </strong>105020 - <strong>Créditos: </strong>3</li>' +
'<li>Cooperativismo y Desarrollo Económico - <strong>Código: </strong>120001 - <strong>Créditos: </strong>3</li>' +
'<li>Contratación Pública y Privada - <strong>Código: </strong>101001 - <strong>Créditos: </strong>3</li>' +
'<li>Problemas Globales Contemporáneos - <strong>Código: </strong>105035 - <strong>Créditos: </strong>3</li>' +
'<li>Geografía Económica - <strong>Código: </strong>105033 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión Ambiental - <strong>Código: </strong>120006 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión Local - <strong>Código: </strong>102954 - <strong>Créditos: </strong>3</li>' +
'<li>Mercadeo Social - <strong>Código: </strong>112005 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electiva 3 Componente Investigativo
$scope.bas06 = '<p class="tit3 h5">Electiva 3 Componente Investigativo</p>'+
'<ul>'+
'<li>Investigación Cualitativa - <strong>Código: </strong>105019 - <strong>Créditos: </strong>3</li>' +
'<li>Investigación Cuantitativa - <strong>Código: </strong>101267424 - <strong>Créditos: </strong>3</li>' +
'<li>Técnicas de Investigación - <strong>Código: </strong>101267216 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

});

})();
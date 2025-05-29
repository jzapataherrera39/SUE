(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"1",curso:"Epistemología, Teorías y Pensamiento Contable",codigo:"106002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Fundamentos de Administración",codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Electiva I (Interdisciplinar Básica Común) Competencia en Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"11",pre1:"0"},
{ periodo:"2",curso:"Contabilidad Financiera Básica",codigo:"106003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"2",curso:"Microeconomía",codigo:"120003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Fundamentos y Generalidades Investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"2",curso:"Electiva I (Disciplinar Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Matemática Financiera",codigo:"116005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Contabilidad Financiera Intermedia",codigo:"106007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"3",curso:"Macroeconomía",codigo:"126007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"3",curso:"Derecho Empresarial",codigo:"103619066",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"151"},
{ periodo:"3",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"3",curso:"Electiva 3 (Interdisciplinar Básica Común) Componente Investigativo",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"14",pre1:"0"},


{ periodo:"4",curso:"Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"4",curso:"Laboratorio Gestión Información Financiera",codigo:"106020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"121"},
{ periodo:"4",curso:"Fundamentación Tributaria",codigo:"106012",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"151"},
{ periodo:"4",curso:"Auditoria Integral",codigo:"106033",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"4",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"4",curso:"Electivo II Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"17",pre1:"0"},
{ periodo:"4",curso:"Electivo I Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"18",pre1:"0"},

{ periodo:"5",curso:"Contabilidad de Gestión y Sistemas de Costeo",codigo:"106021",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"121"},
{ periodo:"5",curso:"Estados Financieros Consolidados",codigo:"103619114",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"5",curso:"Impuestos Nacionales y Planeación Fiscal",codigo:"106013",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"151"},
{ periodo:"5",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"5",curso:"Electivo I Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"17",pre1:"0"},
{ periodo:"5",curso:"Electiva 2 (Interdisciplinar Básico Común) Componente Social-Solidario",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Electivo II Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"18",pre1:"0"},

{ periodo:"6",curso:"Costo y Gestión del Valor",codigo:"106016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"121"},
{ periodo:"6",curso:"Contabilidad y Presupuesto para la Gestión Pública",codigo:"103619067",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"6",curso:"Control Iinterno y Gestión del Riesgo",codigo:"103619068",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"6",curso:"Finanzas Corporativas para la Toma de Decisiones",codigo:"106014",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"161"},
{ periodo:"6",curso:"Inglés B2",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"6",curso:"Electivo II Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"17",pre1:"0"},

{ periodo:"7",curso:"Servicio Social unadista",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Contabilidades Especiales",codigo:"103619069",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"7",curso:"Revisoria Fiscal y Control de Gestión",codigo:"103619070",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"7",curso:"Metodología y Gestión de la Investigación",codigo:"106015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"7",curso:"Market Global Finances",codigo:"103619073",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"7",curso:"Electivo III Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"17",pre1:"0"},
{ periodo:"7",curso:"Electivo III Formación Complementaria",codigo:"106023",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"18",pre1:"0"},

{ periodo:"8",curso:"Mercados Financieros",codigo:"103619072",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"161"},
{ periodo:"8",curso:"Planeación y Gestión Presupuestal",codigo:"106010",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"8",curso:"Etica para Contadores",codigo:"103619071",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12",pre1:"0"},
{ periodo:"8",curso:"Diseño y Evaluación de Proyectos",codigo:"106005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"8",curso:"Electivo III Disciplinar Común",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Electivo IV Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"17",pre1:"0"}

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


//Electiva Interdisciplinar Basica Comun
$scope.bas01 = '<p class="tit3 h5">Electivas Componente en Ciencias Básicas</p>'+
'<ul>'+
'<li>Algebra lineal - <strong>Código: </strong>208046 - <strong>Créditos: </strong>3</li>' +
'<li>Fundamentos de matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</li>' +
'<li>Cálculo Diferencial - <strong>Código: </strong>100410 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electiva Interdisciplinar Basica Social
$scope.bas02 = '<p class="tit3 h5">Electivas Social Solidario</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electiva Interdisciplinar Basica Investigación
$scope.bas03 = '<p class="tit3 h5">Electivas Investigación</p>'+
'<ul>'+
'<li>Investigación cualitativa - <strong>Código: </strong>105019 - <strong>Créditos: </strong>3</li>' +
'<li>Investigación cuantitativa - <strong>Código: </strong>206049 - <strong>Créditos: </strong>3</li>' +
'<li>Metodología y Técnicas de Investigación - <strong>Código: </strong>551059 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Curso electivo Disciplinar Específico
$scope.basico = '<p class="tit3 h5">Línea de Profundización Innovación Financiera Sostenible</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Riesgo Financiero - <strong>Código: </strong>103619074 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Inteligencia financiera para la toma de decisiones - <strong>Código: </strong>103619075 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Finanzas Internacionales - <strong>Código: </strong>101067145 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Inversiones sostenibles - <strong>Código: </strong>103619076 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de Profundización  Control Social y Organizal</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Transparencia y Gobierno Corporativo - <strong>Código: </strong>103619077 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Gestión de la crisis y continuidad del negocio - <strong>Código: </strong>103619078 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Auditoria Fiscal - <strong>Código: </strong>103619079 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Auditoria Forense - <strong>Código: </strong>106032 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de Profundización Dinamica Corporativa Internacional</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Gerencia Aduanera y Tributaria - <strong>Código: </strong>106030 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Comercio y Negocios Internacionales - <strong>Código: </strong>102023 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Geopolítica, Gobernanza  y Análisis de Problemas  Sociales Globales - <strong>Código: </strong>106022 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Doble Titulación e Impuestos Globales - <strong>Código: </strong>106031 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización</p>';

//Electiva formación complementaria
$scope.bas04 = '<p class="tit3 h5">Electivas formación complementaria</p>'+
'<ul>'+
'<li>Hoja de Vida - <strong>Código: </strong>300040 - <strong>Créditos: </strong>1</li>' +
'<li>Acondicionamiento Fisico y Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</p>' +
'<li>Pedagogía para la Solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<li>Proyecto de Vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>La Persona como ser Trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electivda disciplinar comun
$scope.bas08 = '<p class="tit3 h5">Electivas Disciplinar Comun</p>'+
'<ul>'+
'<li>Contratación Publica y Privada - <strong>Código: </strong>101001 - <strong>Créditos: </strong>3</li>' +
'<li>Psicología del Trabajo y las Organizaciones - <strong>Código: </strong>126013 - <strong>Créditos: </strong>3</li>' +
'<li>Pensamiento Solidario - <strong>Código: </strong>105013 - <strong>Créditos: </strong>3</li>' +
'<li>Gestión del Talento Humano - <strong>Código: </strong>121012 - <strong>Créditos: </strong>3</li>' +
'<li>Economía Solidaria - <strong>Código: </strong>120005 - <strong>Créditos: </strong>3</li>' +
'<li>Responsabilidad Social Empresarial - <strong>Código: </strong>120002 - <strong>Créditos: </strong>3</li>' +
'<li>Economía Financiera - <strong>Código: </strong>102767764 - <strong>Créditos: </strong>3</li>' +
'<li>Gerencia Estratégica de Costos y Presupuestos - <strong>Código: </strong>126008 - <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento Solidario - <strong>Código: </strong>105020 - <strong>Créditos: </strong>3</li>' +
'<li>Gerencia Estratégica de las Operaciones - <strong>Código: </strong>126010 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';



});

})();
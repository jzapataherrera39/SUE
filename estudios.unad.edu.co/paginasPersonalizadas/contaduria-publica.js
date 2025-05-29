(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"1",curso:"Epistemología, Teorías y Pensamiento Contable",codigo:"106002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Fundamentos de Administración",codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Matemática Financiera",codigo:"116005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11",pre1:"0"},
{ periodo:"2",curso:"Contabilidad Financiera Básica",codigo:"106003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"2",curso:"Fundamentos de Economía",codigo:"105001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},
{ periodo:"2",curso:"Electiva I (Disciplinar Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Electiva I (Formación Complementaria)",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Electiva I (Interdisciplinar Básica Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"11",pre1:"0"},
{ periodo:"3",curso:"Contabilidad Financiera Intermedia",codigo:"106007",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11",pre1:"131"},
{ periodo:"3",curso:"Legislación Comercial y Laboral Aplicada a los Negocios",codigo:"106004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"3",curso:"Microeconomía",codigo:"120003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"3",curso:"Fundamentos y Generalidades Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},

{ periodo:"4",curso:"Electiva II (Formación Complementaria)",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Estadística y Probabilidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"11"},
{ periodo:"4",curso:"Laboratorio Gestión Información Financiera",codigo:"106020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"4",curso:"Fundamentación Tributaria",codigo:"106012",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"4",curso:"Macroeconomía",codigo:"126007",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13",pre1:"0"},
{ periodo:"4",curso:"Electiva III (Interdisciplinar Básica Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"14",pre1:"0"},
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},

{ periodo:"5",curso:"Electiva III (Formación Complementaria)",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Preparación, Consolidación y presentación de Estados Financieros",codigo:"106006",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"5",curso:"Contabilidad de Gestión y Sistemas de Costeo",codigo:"106021",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"5",curso:"Impuestos Nacionales y Planeación Fiscal",codigo:"106013",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"5",curso:"Emprendimiento Solidario",codigo:"105020",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Ética y Responsabilidad Social para la gestión de las Oganizaciones",codigo:"106019",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15",pre1:"0"},

{ periodo:"6",curso:"Electiva II (Interdisciplinar Básica Común - Componente Social Solidario)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Finanzas Corporativas para Toma de desiciones",codigo:"106011",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"6",curso:"Contabilidad para la Gestión Pública",codigo:"106016",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"6",curso:"Control Interno y Aseguramiento de la Información",codigo:"106014",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"6",curso:"Electiva (Disciplinar Especifíco)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Geopolítica, Gobernanza y Análisis de Problemas Sociales Globales",codigo:"106022",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},

{ periodo:"7",curso:"Servicio Social unadista (Acogida e Integración unadista)",codigo:"700004",creditos:"0",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Planeación y Gestión Presupuestal",codigo:"106010",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"7",curso:"Contabilidad Social y Ambiental",codigo:"106017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"7",curso:"Auditoría Financiera y Revisoría Fiscal",codigo:"106015",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"7",curso:"Electiva (Disciplinar Especifíco)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Metodología y Gestión de la Investigación",codigo:"106023",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14",pre1:"0"},
{ periodo:"7",curso:"Electiva II (Disciplinar Común)",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Electiva III (Disciplinar Común)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Instumentos Financieros y Mercados de Capitales",codigo:"106018",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"131"},
{ periodo:"8",curso:"Electiva (Disciplinar Especifíco)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Electiva (Disciplinar Especifíco)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Electiva (Disciplinar Especifíco)",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Diseño y Evaluación de Proyectos",codigo:"106005",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"}

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
$scope.bas01 = '<h3 class="tit3">Componente en Ciencias Básicas</h3>'+
'<p>Algebra lineal - <strong>Código: </strong>208046 - <strong>Créditos: </strong>3</p>' +
'<p>Fundamentos de matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</p>' +
'<p>Cálculo Integral - <strong>Código: </strong>100410 - <strong>Créditos: </strong>3</p>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Electiva 2 Componente Social Solidario
$scope.bas02 = '<h3 class="tit3">Curso electivo 1 Social Solidario</h3>'+
'<p>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</p>' +
'<p>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</p>' +
'<p>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</p>'+
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Curso electivo 1 Componente investigativo
$scope.bas03 = '<h3 class="tit3">Curso electivo 1 Componente investigativo</h3>'+
'<p>Investigación cualitativa - <strong>Código: </strong>105019 - <strong>Créditos: </strong>3</p>' +
'<p>Investigación cuantitativa - <strong>Código: </strong>206049 - <strong>Créditos: </strong>3</p>' +
'<p>Metodología y Técnicas de Investigación - <strong>Código: </strong>551059 - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Curso electivo Disciplinar Específico
$scope.basico = '<h3 class="tit3">Línea de Profundización Contabilidades Especializadas para las Regiones</h3>'+
'<p><strong>Curso: </strong>Contabilidad y Presupuesto Publico - <strong>Código: </strong>106028 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Contabilidad de la Construcción - <strong>Código: </strong>106027 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Contabilidad Entidades Financieras - <strong>Código: </strong>106026 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Contabilidad Entidades del Sector Salud - <strong>Código: </strong>106025 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Contabilidad Agropecuaria - <strong>Código: </strong>106024 - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<h3 class="tit3">Línea de Profundización Gestión en Contextos Globales</h3>'+
'<p><strong>Curso: </strong>Fundamentos de Negocios Internacionales - <strong>Código: </strong>105016 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Gestión de la Importación y la Exportación - <strong>Código: </strong>126014 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Finanzas Internacionales - <strong>Código: </strong> - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Comercio y Negocios Internacionales - <strong>Código: </strong>102023 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Mercados Globales Emergente - <strong>Código: </strong>126015 - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<h3 class="tit3">Línea de Profundización Gestión Disciplinar Competente</h3>'+
'<p><strong>Curso: </strong>Auditoria Integral - <strong>Código: </strong>106033 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Auditoria Forense - <strong>Código: </strong>106032 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Tratados de Doble Tributación e Impuestos Globales - <strong>Código: </strong>106031 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Gerencia Aduanera y Tributaria - <strong>Código: </strong>106030 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Costo y Gestión del Valor - <strong>Código: </strong>106029 - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<h3 class="tit3">Línea de Profundización Fundamentación Gerencial Integral</h3>'+
'<p><strong>Curso: </strong>Gestión de la Innovación - <strong>Código: </strong>126016 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Gestión de los Activos Intangibles - <strong>Código: </strong>126019 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Logística de las Operaciones - <strong>Código: </strong>126011 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Mercadeo e Investigación de Mercados - <strong>Código: </strong>112003 - <strong>Créditos: </strong>3</p>' +
'<p><strong>Curso: </strong>Sistemas de Gestión Organizacional - <strong>Código: </strong> - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización</p>';

//Curso formación complementaria
$scope.bas04 = '<h3 class="tit3">Curso formación complementaria</h3>'+
'<p>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</p>' +
'<p>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</p>' +
'<p>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</p>' +
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Curso formación complementaria 3 ELECTIVO
$scope.bas08 = '<h3 class="tit3">Curso formación complementaria</h3>'+
'<p>Proyecto de vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</p>' +
'<p>La persona como ser trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</p>' +
'<p>Pedagogía para la solución de Conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</p>' +
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Curso electivo Disciplinar Común electiva 1
$scope.bas05 = '<h3 class="tit3">Curso electivo Disciplinar Común</h3>'+
'<p>Gestión del Talento Humano - <strong>Código: </strong>121012 - <strong>Créditos: </strong>3</p>' +
'<p>Contratación pública y privada - <strong>Código: </strong>10100 - <strong>Créditos: </strong>3</p>' +
'<p>Psicología del trabajo y las Organizaciones - <strong>Código: </strong>126013 - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Curso electivo Disciplinar Común electiva 2
$scope.bas06 = '<h3 class="tit3">Curso electivo Disciplinar Común</h3>'+
'<p>Economía Solidaria - <strong>Código: </strong>120005 - <strong>Créditos: </strong>3</p>' +
'<p>Pensamiento Solidario - <strong>Código: </strong>105013 - <strong>Créditos: </strong>3</p>' +
'<p>Responsabilidad Social Empresarial - <strong>Código: </strong>120002 - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';

//Curso electivo Disciplinar Común electiva 3
$scope.bas07 = '<h3 class="tit3">Curso electivo Disciplinar Común</h3>'+
'<p>Habilidades para la toma de Decisiones - <strong>Código: </strong>126001 - <strong>Créditos: </strong>3</p>' +
'<p>Gerencia Estratégica de las Operaciones - <strong>Código: </strong>126010 - <strong>Créditos: </strong>3</p>' +
'<p>Gerencia Estratégica de Costos y Presupuestos - <strong>Código: </strong>126008 - <strong>Créditos: </strong>3</p>' +
'<hr>' +
'<p><strong>Nota: </strong>  Matricular, sólo un curso de los ofrecidos en esta electiva</p>';


});

})();
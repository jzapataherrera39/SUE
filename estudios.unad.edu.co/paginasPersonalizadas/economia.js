(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Fundamentos de Economía",codigo:"105001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Teórico / Práctico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"1",curso:"Pensamiento Lógico y Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"2",curso:"Doctrinas Económicas",codigo:"105002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Historia Política, Social y Económica de Colombia",codigo:"252009",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Curso Electivo 1 Ciencias Básicas",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"2",curso:"Curso Electivo 1 Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"3",curso:"Pensamiento Solidario",codigo:"105013",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Microeconomía 1",codigo:"102767760",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Fundamentos de Administración",codigo:"105015",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Estadística y Probalidad",codigo:"211622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Algebra Lineal",codigo:"208046",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"3",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"4",curso:"Gobernanza Solidaria",codigo:"105014",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Macroeconomía 1",codigo:"102767761",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Contabilidad Financiera Básica",codigo:"106003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Calculo Diferencial",codigo:"100410",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Fundamentos y Generalidades de la Investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"4",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},

{ periodo:"5",curso:"Microeconomía 2",codigo:"102767763",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Economía Financiera",codigo:"102767764",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Emprendimiento Solidario",codigo:"105020",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Curso Electivo 1 Componente Investigativo",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"5",curso:"Curso Formación Complementaria 2",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"6",curso:"Macroeconomía 2",codigo:"102767765",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Metodos Aplicados a la Economía",codigo:"102767766",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso Electivo 1 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso Electivo 1 Social Solidario",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"6",curso:"Curso Formación Complementaria 3",codigo:"*",creditos:"1",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"7",curso:"Política Económica y Social",codigo:"105017",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Teorías de Crecimiento y Desarrollo Económico",codigo:"105009",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Fundamentos Negocios Internacionales",codigo:"105016",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Econometría",codigo:"105010",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Curso Electivo 1 Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"7",curso:"Curso Electivo 2 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"8",curso:"Economía Ambiental",codigo:"105023",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Teoría de Juegos",codigo:"105028",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Economía Internacional",codigo:"105008",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Técnicas de Pronóstico",codigo:"105018",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Curso Electivo 2 Disciplinar Común",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"8",curso:"Curso Electivo 3 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

{ periodo:"9",curso:"Diseño y Evaluación de Proyectos",codigo:"106005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Curso Electivo 4 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Curso Electivo 5 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},
{ periodo:"9",curso:"Curso Electivo 6 Disciplinar Específico",codigo:"*",creditos:"3",tipo:"Teórico",clasificacion:"Electiva",pre:"0",pre1:"0"},

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
$scope.bas01 = '<p class="tit3 h5">Curso electivo 1 Ciencias Básicas</p>'+
'<ul>'+
'<li>Fundamentos de Matemáticas - <strong>Código: </strong>200612 - <strong>Créditos: </strong>3</li>' +
'<li>Algebra, trigonometria y geometria analitica - <strong>Código: </strong>301301 - <strong>Créditos: </strong>3</li>' +
'<li>Cálculo Integral - <strong>Código: </strong>100411 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electiva 2 Componente Social Solidario
$scope.bas02 = '<p class="tit3 h5">Curso electivo 1 Social Solidario</p>'+
'<ul>'+
'<li>Inclusión Social - <strong>Código: </strong>40004 - <strong>Créditos: </strong>3</li>' +
'<li>Sostenibilidad, Desarrollo y Calidad de Vida - <strong>Código: </strong>40006 - <strong>Créditos: </strong>3</li>' +
'<li>Sujeto Comunidad e Interacción Social - <strong>Código: </strong>40005 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Curso electivo 1 Componente investigativo
$scope.bas03 = '<p class="tit3 h5">Curso electivo 1 Componente investigativo</p>'+
'<ul>'+
'<li>Investigación cualitativa - <strong>Código: </strong>105019 - <strong>Créditos: </strong>3</li>' +
'<li>Investigación cuantitativa - <strong>Código: </strong>10126742 - <strong>Créditos: </strong>3</li>' +
'<li>Metodología y Técnicas de Investigación - <strong>Código: </strong>55105 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Curso electivo Disciplinar Específico
$scope.basico = '<p class="tit3 h5">Línea Enfasis Gestión Solidaria</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Etnografía y etnodesarrollo - <strong>Código: </strong>102767767 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Sociología económica - <strong>Código: </strong>105032 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Antropología económica - <strong>Código: </strong>105011 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Economía agraria - <strong>Código: </strong>105012 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Organizaciones solidarias - <strong>Código: </strong>105029 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Cooperativismo y desarrollo económico - <strong>Código: </strong>120001 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea Enfasis Gestión del Desarrollo Alternativo</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Finanzas públicas y Planeación territorial - <strong>Código: </strong>102767768 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Administración Pública y gestión local - <strong>Código: </strong>252010 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Políticas públicas - <strong>Código: </strong>102767769 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Regulación económica - <strong>Código: </strong>105026 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Pensamiento latinoamericano y construccion de modelos - <strong>Código: </strong>252013 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Geopolítica y desarrollo humano - <strong>Código: </strong>105031 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea Enfasis Gestión Económica y Social</p>'+
'<ul>'+
'<li><strong>Curso: </strong>Economía política - <strong>Código: </strong>105003 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Geografía económica - <strong>Código: </strong>105033 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Economía colombiana - <strong>Código: </strong>105023 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Problemas globales contemporáneos - <strong>Código: </strong>105035 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Matemáticas financieras avanzadas - <strong>Código: </strong>105027 - <strong>Créditos: </strong>3</li>' +
'<li><strong>Curso: </strong>Indicadores sociales - <strong>Código: </strong>404013 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización, aprobando por lo menos 3 cursos electivos disciplinares específicos de ésta. Los dos cursos restantes podrá tomarlos en cualquier otra línea de profundización</p>';

//Curso formación complementaria
$scope.bas04 = '<p class="tit3 h5">Curso formación complementaria</p>'+
'<ul>'+
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Apreciación de las imágenes del arte - <strong>Código: </strong>404086996 - <strong>Créditos: </strong>2</li>' +
'<li>Acondicionamiento físico y bienestar - <strong>Código: </strong>40000 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Curso electivo Disciplinar Común
$scope.bas05 = '<p class="tit3 h5">Curso electivo Disciplinar Común</p>'+
'<ul>'+
'<li>Contratación pública y privada - <strong>Código: </strong>10100 - <strong>Créditos: </strong>3</li>' +
'<li>Responsabilidad social empresarial - <strong>Código: </strong>120002 - <strong>Créditos: </strong>3</li>' +
'<li>Legislación empresarial - <strong>Código: </strong>111001 - <strong>Créditos: </strong>3</li>' +
'<li>Sistemas integrados de gestión HSEQ - <strong>Código: </strong>121006 - <strong>Créditos: </strong>3</li>' +
'<li>Generación de ideas de negocio - <strong>Código: </strong>110013 - <strong>Créditos: </strong>3</li>' +
'<li>Planeación y prospectiva hacia escenarios globales - <strong>Código: </strong>126004 - <strong>Créditos: </strong>3</li>' +
'<li>Gerencia estratégia de las operaciones - <strong>Código: </strong>12601 - <strong>Créditos: </strong>3</li>' +
'<li>Finanzas corporativas para la toma decisiones - <strong>Código: </strong>106011 - <strong>Créditos: </strong>3</li>' +
'<li>Mercadeo e investigación de mercados - <strong>Código: </strong>112003 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';


});

})();
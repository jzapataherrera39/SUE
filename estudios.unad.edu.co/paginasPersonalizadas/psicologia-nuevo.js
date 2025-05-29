(function(){	
var myApp = angular.module('myApp9', ['ngSanitize']);
myApp.controller('listadoCtrl9', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Generalidades de la Psicología",codigo:"402537677",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"1",curso:"Cátedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Ética y Ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"1",curso:"Electiva Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"2",curso:"Antecedentes de la Psicología",codigo:"402537616",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11", pre1:"0"},
{ periodo:"2",curso:"Psicología y Curso de Vida",codigo:"402537617",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Historia Crítica de la Colombia Contemporánea",codigo:"402537618",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Enfoques Clásicos de la Psicología",codigo:"402537619",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12", pre1:"0"},
{ periodo:"2",curso:"Fundamentos y Generalidades de Investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Pensamiento Lógico Matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"2",curso:"Electiva Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Electiva Campo de Formación Complementaria",codigo:"*",creditos:"1",tipo:"Teórico / Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"2",curso:"Prestación de Servicio Social Unadista",codigo:"*",creditos:"0",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"3",curso:"Fundamentos de Psicobiología",codigo:"402537621",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14", pre1:"0"},
{ periodo:"3",curso:"Aplicación de Psicobiología",codigo:"402537621",creditos:"1",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15", pre1:"0"},
{ periodo:"3",curso:"Orígenes de la Psicología Social Política y Comunitaria",codigo:"402537519",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"3",curso:"Enfoques Contemporáneos de la Psicología",codigo:"402537622",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12", pre1:"0"},
{ periodo:"3",curso:"Psicología de la Personalidad",codigo:"402537624",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"3",curso:"Estadística",codigo:"202107095",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"13", pre1:"0"},
{ periodo:"3",curso:"Procesos Psicológicos",codigo:"402537623",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"4",curso:"Fundamentos de Psicofisiología",codigo:"402537625",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14", pre1:"0"},
{ periodo:"4",curso:"Aplicación de Psicofisiología",codigo:"402537626",creditos:"1",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15", pre1:"0"},
{ periodo:"4",curso:"Fundamentos de Evaluación en Psicología",codigo:"402537523",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"16", pre1:"0"},
{ periodo:"4",curso:"Campos Tradicionales de la Psicología",codigo:"402537627",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12", pre1:"141"},
{ periodo:"4",curso:"Campos Emergentes de la Psicología",codigo:"402537628",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"12", pre1:"0"},
{ periodo:"4",curso:"Investigación Ciencias Sociales",codigo:"400001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"17", pre1:"0"},
{ periodo:"4",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"18", pre1:"0"},
{ periodo:"4",curso:"Fundamentos de Psicometría",codigo:"402537629",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"4",curso:"Aplicación de Psicometría",codigo:"402537630",creditos:"1",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"5",curso:"Fundamentos de Aprendizaje",codigo:"402537631",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14", pre1:"0"},
{ periodo:"5",curso:"Aplicación de Aprendizaje",codigo:"402537632",creditos:"1",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15", pre1:"0"},
{ periodo:"5",curso:"Aplicación de Evaluación en Psicología",codigo:"402537633",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"16", pre1:"0"},
{ periodo:"5",curso:"Manifestaciones Psicopatológicas en la Infancia y la Adolescencia",codigo:"402537635",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"19", pre1:"0"},
{ periodo:"5",curso:"Técnicas e Instrumentos de Investigación en Ciencias Sociales",codigo:"402537634",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"17", pre1:"0"},
{ periodo:"5",curso:"Electivo Fundamentos Campo Profesional Tradicional",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"20", pre1:"141"},
{ periodo:"5",curso:"Electivo Fundamentos Campo Profesional Emergente",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"131"},
{ periodo:"5",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"18", pre1:"0"},

{ periodo:"6",curso:"Fundamentos de Neuropsicología",codigo:"402537521",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"14", pre1:"0"},
{ periodo:"6",curso:"Aplicación de Neuropsicología",codigo:"402537522",creditos:"1",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15", pre1:"0"},
{ periodo:"6",curso:"Procesos Comunicacionales de Evaluación en Psicología",codigo:"402537636",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"16", pre1:"0"},
{ periodo:"6",curso:"Manifestaciones Psicopatológicas en la Adultez y la Vejez",codigo:"402537638",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"19", pre1:"0"},
{ periodo:"6",curso:"Electivo Disciplinar Común Investigación",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"6",curso:"Electivo Profundización Campo Profesional Tradicional",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"20", pre1:"0"},
{ periodo:"6",curso:"Electivo Profundización Campo Profesional Emergente",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"131"},
{ periodo:"6",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"18", pre1:"0"},
{ periodo:"6",curso:"Fundamentos para la Acción Psicosocial",codigo:"402537637",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},

{ periodo:"7",curso:"Psicología Latinoamericana",codigo:"402537520",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"7",curso:"Fundamentos de la Psicología Clínica y de la Salud",codigo:"402537639",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"21", pre1:"0"},
{ periodo:"7",curso:"Psicología y Praxis Liberadora",codigo:"402537640",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"7",curso:"Métodos Cuantitativos",codigo:"402487455",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"22", pre1:"0"},
{ periodo:"7",curso:"Electivo Acción Psicosocial Campo Profesional Tradicional",codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva",pre:"20", pre1:"0"},
{ periodo:"7",curso:"Electivo Acción Psicosocial en Campo Profesional Emergente",codigo:"*",creditos:"2",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"131"},
{ periodo:"7",curso:"Inglés B1+",codigo:"900004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"18", pre1:"0"},

{ periodo:"8",curso:"Ética y Deontología en Psicología",codigo:"402537641",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Profundización en Psicología Clínica y de la Salud",codigo:"402537646",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"21", pre1:"0"},
{ periodo:"8",curso:"Psicología Socio Antropológica",codigo:"402537642",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Aplicación en Investigación Psicológica",codigo:"402537645",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"22", pre1:"0"},
{ periodo:"8",curso:"Subjetividad e Intersubjetividad",codigo:"402537644",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Acción en Grupos y Colectivos",codigo:"402537643",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"8",curso:"Acción Psicosocial en Psicología Comunitaria",codigo:"402537647",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"20", pre1:"131"},
{ periodo:"8",curso:"Electivo Bases Socioculturales del Comportamiento",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"0"},

{ periodo:"9",curso:"Autorreferencia",codigo:"402537648",creditos:"1",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Acción Psicosocial en Psicología Clínica y de la Salud",codigo:"402537524",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"21", pre1:"0"},
{ periodo:"9",curso:"Ecología, Bienestar y Desarrollo",codigo:"402537649",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Diseño de Proyectos Sociales",codigo:"400002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Electivo Modelos Teóricos y Metodológicos de la Psicología",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Electivo Disciplinar Común Ciencias Sociales",codigo:"*",creditos:"2",tipo:"Teórico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"9",curso:"Práctica en Campo Profesional 1",codigo:"402537529",creditos:"4",tipo:"Prácticos",clasificacion:"Obligatorio",pre:"20", pre1:"131"},

{ periodo:"10",curso:"Electivo IBC Económico Administrativo",codigo:"*",creditos:"3",tipo:"Metodológico",clasificacion:"Electiva",pre:"0", pre1:"0"},
{ periodo:"10",curso:"Práctica en Campo Profesional 2",codigo:"402537530",creditos:"4",tipo:"Prácticos",clasificacion:"Obligatorio",pre:"21", pre1:"0"},

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
	case '20': color = '5px solid #DC143C'; break; // Rojo carmesí
	case '21': color = '5px solid #00FFFF'; break;  // Cian eléctrico
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


//Electivo Disciplinar Común Ciencias Sociales
$scope.bas01 = '<p class="tit3 h5">Electivo Disciplinar Común Ciencias Sociales</p>'+
'<ul>'+
'<li>Derechos Humanos y Derecho Internacional Humanitario - <strong>Código: </strong>402537662 - <strong>Créditos: </strong>2</li>' +
'<li>Epistemologías del Sur - <strong>Código: </strong>402537665 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (2 créditos) Escoger una de las 2 asignaturas</p>';

//Fundamentos Campo Profesional Emergente
$scope.bas02 = '<p class="tit3 h5">Fundamentos Campo Profesional Emergente</p>'+
'<ul>'+
'<li>Fundamentos en Psicología de la Gestión del Riesgo en Emergencias y Desastres - <strong>Código: </strong>402537526 - <strong>Créditos: </strong>2</li>' +
'<li>Fundamentos en Psicología del Tránsito - <strong>Código: </strong>402537652 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> (2 créditos) Escoger una de las 2 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Emergente.</p>';

//Disciplinar Común Investigación
$scope.bas03 = '<p class="tit3 h5">Disciplinar Común Investigación</p>'+
'<ul>'+
'<li>Investigación Cualitativa - <strong>Código: </strong>401122 - <strong>Créditos: </strong>3</li>' +
'<li>Investigar en Comunidad - <strong>Código: </strong>404009 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Fundamentos en Campo Profesional Tradicional
$scope.bas04 = '<p class="tit3 h5">Fundamentos en Campo Profesional Tradicional</p>'+
'<ul>'+
'<li>Fundamentos en Psicología Educativa - <strong>Código: </strong>402537650 - <strong>Créditos: </strong>2</li>' +
'<li>Fundamentos en Psicología del trabajo y las organizaciones - <strong>Código: </strong>402537651 - <strong>Créditos: </strong>2</li>' +
'<li>Fundamentos en Psicología Jurídica - <strong>Código: </strong>402537653 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (2 créditos) Escoger una de las 3 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Tradicional.</p>';

//Bases Socioculturales del Comportamiento
$scope.bas05 = '<p class="tit3 h5">Bases Socioculturales del Comportamiento</p>'+
'<ul>'+
'<li>Psicología Cultural - <strong>Código: </strong>402537654 - <strong>Créditos: </strong>2</li>' +
'<li>Psicología de la Ancestralidad - <strong>Código: </strong>402537655 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (2 créditos) Escoger una de las 2 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Emergente.</p>';

//Profundización Campo Profesional Emergente
$scope.bas06 = '<p class="tit3 h5">Profundización Campo Profesional Emergente</p>'+
'<ul>'+
'<li>Profundización en Psicología de la Gestión del Riesgo en Emergencias y Desastres - <strong>Código: </strong>402537527 - <strong>Créditos: </strong>2</li>' +
'<li>Profundización en Psicología del Tránsito - <strong>Código: </strong>402537658 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (2 créditos) Escoger una de las 2 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Emergente.</p>';

//IBC Económico Administrativo
$scope.bas07 = '<p class="tit3 h5">IBC Económico Administrativo</p>'+
'<ul>'+
'<li>Fundamentos en Gestión Integral - <strong>Código: </strong>112001 - <strong>Créditos: </strong>3</li>' +
'<li>Emprendimiento Solidario - <strong>Código: </strong>105020 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (3 créditos) Escoger una de las 2 asignaturas</p>';

//Profundización en Campo Profesional Tradicional
$scope.bas08 = '<p class="tit3 h5">Profundización en Campo Profesional Tradicional</p>'+
'<ul>'+
'<li>Profundización en Psicología Educativa - <strong>Código: </strong>402537656 - <strong>Créditos: </strong>2</li>' +
'<li>Profundización en Psicología del trabajo y las organizaciones - <strong>Código: </strong>402537657 - <strong>Créditos: </strong>2</li>' +
'<li>profundizacion en Psicología Jurídica - <strong>Código: </strong>402537659 - <strong>Créditos: </strong>2</li>'+
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (2 créditos) Escoger una de las 3 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Tradicional.</p>';

//Acción Psicosocial en Campo Profesional Tradicional
$scope.bas09 = '<p class="tit3 h5">Acción Psicosocial en Campo Profesional Tradicional</p>'+
'<ul>'+
'<li>Acción Psicosocial en Psicología Educativa - <strong>Código: </strong>402537661 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología del trabajo y las organizaciones - <strong>Código: </strong>402537663 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología Jurídica - <strong>Código: </strong>402537666 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (2 créditos) Escoger una de las 3 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Tradicional.</p>';

//Acción Psicosocial en Campo Profesional Emergente
$scope.bas10 = '<p class="tit3 h5">Acción Psicosocial en Campo Profesional Emergente</p>'+
'<ul>'+
'<li>Acción Psicosocial en Psicología de la Gestión del Riesgo en Emergencias y Desastres - <strong>Código: </strong>402537528 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología del Tránsito - <strong>Código: </strong>402537664 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong> (2 créditos) Escoger una de las 2 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Emergente.</p>';

//Lineas de profundizacion campo de formacion profesional tradicional 
$scope.linea01 = '<p class="tit3 h5">Líneas de Profundización Campo de Formacion Profesional Tradicional </p>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización en Psicología Educativa</p>'+
'<ul>'+
'<li>Fundamentos en Psicología Educativa - <strong>Código: </strong>402537650 - <strong>Créditos: </strong>2</li>' +
'<li>Profundización en Psicología Educativa - <strong>Código: </strong>402537656 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología Educativa - <strong>Código: </strong>402537661 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización en Psicología del Trabajo y las Organizaciones</p>'+
'<ul>'+
'<li>Fundamentos en Psicología del trabajo y las organizaciones - <strong>Código: </strong>402537651 - <strong>Créditos: </strong>2</li>' +
'<li>Profundización en Psicología del trabajo y las organizaciones - <strong>Código: </strong>402537657 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología del trabajo y las organizaciones - <strong>Código: </strong>402537663 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización en Psicología Jurídica</p>'+
'<ul>'+
'<li>Fundamentos en Psicología Jurídica - <strong>Código: </strong>402537653 - <strong>Créditos: </strong>2</li>' +
'<li>profundizacion en Psicología Jurídica - <strong>Código: </strong>402537659 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología Jurídica - <strong>Código: </strong>402537666 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización, aprobando por lo menos 3 cursos electivos disciplinares específicos de ésta.</p>';

//Lineas de profundizacion campo de formacion profesional Emergente
$scope.linea02 = '<p class="tit3 h5">Líneas de Profundización Campo de Formación Profesional Emergente </p>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización en Psicología de la Gestión del Riesgo en Emergencias y Desastres</p>'+
'<ul>'+
'<li>Fundamentos en Psicología de la Gestión del Riesgo en Emergencias y Desastres - <strong>Código: </strong>402537526 - <strong>Créditos: </strong>2</li>' +
'<li>Profundización en Psicología de la Gestión del Riesgo en Emergencias y Desastres - <strong>Código: </strong>402537527 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología de la Gestión del Riesgo en Emergencias y Desastres - <strong>Código: </strong>402537528 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p class="tit3 h5">Línea de profundización en Psicología del Tránsito</p>'+
'<ul>'+
'<li>Fundamentos en Psicología del Tránsito - <strong>Código: </strong>402537652 - <strong>Créditos: </strong>2</li>' +
'<li>Profundización en Psicología del Tránsito - <strong>Código: </strong>402537658 - <strong>Créditos: </strong>2</li>' +
'<li>Acción Psicosocial en Psicología del Tránsito - <strong>Código: </strong>402537664 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>El estudiante deberá optar por una única línea de profundización, aprobando por lo menos 3 cursos electivos disciplinares específicos de ésta. </p>';

//Campo de Formación Complementaria
$scope.bas11 = '<p class="tit3 h5">Campo de Formación Complementaria</p>'+
'<ul>'+
'<li>Acondicionamiento Físico y Bienestar - <strong>Código: </strong>400004 - <strong>Créditos: </strong>1</li>' +
'<li>Apreciación de las Imágenes del Arte - <strong>Código: </strong>404086996 - <strong>Créditos: </strong>1</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (3 créditos) Escoger 1 asignatura por periodo de 1 crédito</p>';

//Modelos Teóricos y Metodológicos de la Psicología
$scope.bas12 = '<p class="tit3 h5">Modelos Teóricos y Metodológicos de la Psicología</p>'+
'<ul>'+
'<li>Telepsicología - <strong>Código: </strong>402537525 - <strong>Créditos: </strong>2</li>' +
'<li>Dinámicas Psicológicas en Entornos Digitales - <strong>Código: </strong>402537660 - <strong>Créditos: </strong>2</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  (2 créditos) Escoger una de las 2 asignaturas. Al iniciar debe escoger una línea, dentro de los Fundamentos, Profundización y Acción Psicosocial dentro del Campo Profesional Emergente.</p>';

//Electiva 3 Componente Investigativo
$scope.bas13 = '<p class="tit3 h5">Electiva 3 Componente Investigativo</p>'+
'<ul>'+
'<li>Investigación Cualitativa - <strong>Código: </strong>105019 - <strong>Créditos: </strong>3</li>' +
'<li>Investigación Cuantitativa - <strong>Código: </strong>101267424 - <strong>Créditos: </strong>3</li>' +
'<li>Técnicas de Investigación - <strong>Código: </strong>101267216 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Prestación de Servicio Social Unadista
$scope.SSU = '<p class="tit3 h5">Prestación de Servicio Social Unadista</p>'+
'<p><strong>Nota: </strong>  La prestación del Servicio Social Unadista, es un requisito de grado y está conformada por la Cátedra Región y la Cátedra Social Solidaria, por lo cual se sugiere que el estudiante la desarrolle una vez apruebe el curso Cátedra Unadista.</p>';


});

})();
(function(){	
var myApp = angular.module('myApp1', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Lectura y escritura académicas",codigo:"514519",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"1",curso:"Introducción a la Licenciatura en Pedagogía Infantil",codigo:"514518",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11"},
{ periodo:"1",curso:"Herramientas Digitales para la Gestión del Conocimiento", codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"1",curso:"Competencias Comunicativas",codigo:"40003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"1",curso:"Catedra Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"12"},

{ periodo:"2",curso:"Fundamentos y generalidades de investigación",codigo:"150001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"2",curso:"Infancia: historias y perspectivas",codigo:"514517",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11"},
{ periodo:"2",curso:"Epistemología e historia de la pedagogía",codigo:"50004",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14"},
{ periodo:"2",curso:"Teorías del aprendizaje",codigo:"401302",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"2",curso:"Pensamiento lógico y matemático",codigo:"200611",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"2",curso:"Ética y ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"0"},

{ periodo:"3",curso:"Teorías curriculares",codigo:"401307",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"3",curso:"Salud y desarrollo infantil",codigo:"514006",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio",pre:"11"},
{ periodo:"3",curso:"Didáctica",codigo:"401305",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14"},
{ periodo:"3",curso:"Desarrollo socioafectivo y moral",codigo:"514505",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"3",curso:"Servicio Social Unadista",codigo:"700004",creditos:"0",tipo:"Práctico",clasificacion:"Obligatorio",pre:"12"},
{ periodo:"3",curso:"Etica docente",codigo:"50001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},

{ periodo:"4",curso:"Electivo 1 EBC",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},
{ periodo:"4",curso:"Políticas y programas de atención integral a la infancia",codigo:"514502",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"11"},
{ periodo:"4",curso:"Pedagogía y didácticas para la inclusión",codigo:"514017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"14"},
{ periodo:"4",curso:"Desarrollo del lenguaje",codigo:"514503",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15"},
{ periodo:"4",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"16"},

{ periodo:"5",curso:"Investigación educativa y pedagógica",codigo:"50002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"5",curso:"Seminario Pre -Práctica Pedagógica",codigo:"*",creditos:"0",tipo:"Práctico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"5",curso:"Uso de las TIC en educación Infantil",codigo:"514508",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"5",curso:"Construcción de la lengua escrita",codigo:"514516",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15"},
{ periodo:"5",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"16"},
{ periodo:"5",curso:"Electivo 1 EDC",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},

{ periodo:"6",curso:"Investigación en educación Infantil",codigo:"514507",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"6",curso:"Práctica Pedagógica I",codigo:"514012",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"6",curso:"Desarrollo del pensamiento lógico-matemático",codigo:"514005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"6",curso:"Literatura y oralidad en la Infancia",codigo:"514501",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"15"},
{ periodo:"6",curso:"Inglés B1",codigo:"900003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"16"},
{ periodo:"6",curso:"Electivo 1 EDE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},

{ periodo:"7",curso:"Práctica Pedagógica II",codigo:"514013",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"7",curso:"Desarrollo del pensamiento científico",codigo:"514005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"7",curso:"Fundamentos en gestión integral",codigo:"112001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"17"},
{ periodo:"7",curso:"Juego, lúdica y psicomotricidad",codigo:"514515",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"7",curso:"Inglés B2",codigo:"900005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"16"},
{ periodo:"7",curso:"Electivo 2 EDC",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},

{ periodo:"8",curso:"Práctica Pedagógica III ",codigo:"514014",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"8",curso:"Educación, Familia y Comunidad",codigo:"514506",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"8",curso:"Gestión Educativa",codigo:"50005",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"17"},
{ periodo:"8",curso:"Arte y Educación Artística en la Infancia",codigo:"514003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"8",curso:"Evaluación",codigo:"401304",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"8",curso:"Electivo 2 EDE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},

{ periodo:"9",curso:"Práctica Pedagógica IV",codigo:"514015",creditos:"3",tipo:"Práctico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"9",curso:"Trabajo de Grado",codigo:"514016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"9",curso:"Gestión de Proyectos y Organizaciones Educativas para las Infancias",codigo:"514512",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"17"},
{ periodo:"9",curso:"Formación Complementaria 1",codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},
{ periodo:"9",curso:"Formación Complementaria 2",codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},
{ periodo:"9",curso:"Electivo 2 EBC",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},

{ periodo:"10",curso:"Cátedra de Infancias",codigo:"*",creditos:"0",tipo:"Práctico",clasificacion:"Obligatorio",pre:"13"},
{ periodo:"10",curso:"Diseño de Ambientes de Aprendizaje",codigo:"50003",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio",pre:"0"},
{ periodo:"10",curso:"Formación Complementaria 3",codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"},
{ periodo:"10",curso:"Electivo 3 EDE",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva",pre:"0"}

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

//ELECTIVOS DISCIPLINARES Común EDC
$scope.bas01 = '<h3 class="tit3">Electivas Disciplinar Común EDC</h3>'+
'<p>Escenarios educativos inclusivos - <strong>Código: </strong>5140008 - <strong>Créditos: </strong>3</p>' +
'<p>Filosofía de la Educación - <strong>Código: </strong>551053 - <strong>Créditos: </strong>3</p>' +
'<p>Ciencia y Educación - <strong>Código: </strong>514010 - <strong>Créditos: </strong>3</p>'+
'<p>Cátedra de estudios afrocolombianos - <strong>Código: </strong>446001 - <strong>Créditos: </strong>3</p>'+
'<p>Lengua Nativa 0 - <strong>Código: </strong>511063 - <strong>Créditos: </strong>2</p>'+
'<p>Educación para la transformación social - <strong>Código: </strong>50006 - <strong>Créditos: </strong>3</p>'+
'<p>Cultura Escolar - <strong>Código: </strong>514009 - <strong>Créditos: </strong>3</p>'+
'<p>Resiliencia - <strong>Código: </strong>712003 - <strong>Créditos: </strong>3</p>'+
'<p>Pedagogía social y educación social - <strong>Código: </strong>551155 - <strong>Créditos: </strong>2</p>'+
'<p>Pedagogía Solidaria - <strong>Código: </strong>50015 - <strong>Créditos: </strong>4</p>'+
'<p>Educación, cultura y sociedad - <strong>Código: </strong>514007 - <strong>Créditos: </strong>3</p>'+
'<p>Tecnología Educativa - <strong>Código: </strong>514008 - <strong>Créditos: </strong>3</p>'+
'<p>Muticulturalidad e interculturalidad - <strong>Código: </strong>551072 - <strong>Créditos: </strong>3</p>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electivos Disciplinar Especiífico EDE
$scope.bas02 = '<h3 class="tit3">Electivas Disciplinar Especiífico EDE</h3>'+
'<p>Proyectos de Aula - <strong>Código: </strong>514514 - <strong>Créditos: </strong>3</p>' +
'<p>Bilingüismo en educación Infantil - <strong>Código: </strong>514511 - <strong>Créditos: </strong>3</p>' +
'<p>Didáctica de las artes integradas - <strong>Código: </strong>514002 - <strong>Créditos: </strong>3</p>'+
'<p>Estimulación adecuada - <strong>Código: </strong>514504 - <strong>Créditos: </strong>3</p>'+
'<p>Introducción a la lengua de señas - <strong>Código: </strong>514019 - <strong>Créditos: </strong>3</p>'+
'<p>Prácticas educativas mediadas por TIC - <strong>Código: </strong>514513 - <strong>Créditos: </strong>3</p>'+
'<p>Problemas de Aprendizaje - <strong>Código: </strong>514509 - <strong>Créditos: </strong>3</p>'+
'<p>Filosofía para niños - <strong>Código: </strong>514510 - <strong>Créditos: </strong>3</p>'+
'<p>Pedagogía Hospitalaria - <strong>Código: </strong>514011 - <strong>Créditos: </strong>3</p>'+
'<p>Introducción al braille - <strong>Código: </strong> - <strong>Créditos: </strong>3</p>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electivas Formación Complementaria
$scope.bas04 = '<h3 class="tit3">Electivas Formación Complementaria</h3>'+
'<p>Proyecto de vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</p>' +
'<p>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</p>' +
'<p>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</p>' +
'<p>Creatividad para el emprendimiento - <strong>Código: </strong>80018 - <strong>Créditos: </strong>2</p>' +
'<p>Salud oral - <strong>Código: </strong>80003 - <strong>Créditos: </strong>2</p>' +
'<p>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</p>' +
'<p>Discapacidad y Sexualidad - <strong>Código: </strong>80011 - <strong>Créditos: </strong>2</p>' +
'<p>Actividad física para la salud - <strong>Código: </strong>80020 - <strong>Créditos: </strong>2</p>' +
'<p>Ser trascendente - <strong>Código: </strong>80004 - <strong>Créditos: </strong>2</p>' +
'<p>Pedagogía para la solución de conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</p>' +
'<p>Danza - <strong>Código: </strong>80012 - <strong>Créditos: </strong>2</p>' +
'<p>Preparación física - <strong>Código: </strong>80001 - <strong>Créditos: </strong>2</p>' +
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';


});

})();
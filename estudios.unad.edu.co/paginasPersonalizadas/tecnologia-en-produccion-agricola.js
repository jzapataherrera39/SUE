(function(){	
var myApp = angular.module('myApp', ['ngSanitize']);
myApp.controller('listadoCtrl', function Main($scope, $http) {


$scope.mt2 = [
{ periodo:"1",curso:"Introducción a las ciencias agrícolas",codigo:"302407465",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302407465"] },
{ periodo:"1",curso:"Catedrá Unadista",codigo:"80017",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Biología (celular y molecular)", codigo:"30176",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] ,clasificacion1:"Componente Práctico"},
{ periodo:"1",curso:"Química orgánica (ECAPMA)",codigo:"300047",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["300047"] },
{ periodo:"1",curso:"Competencias comunicativas",codigo:"40003",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"1",curso:"Herramientas digitales para la gestión del conocimiento",codigo:"200610",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },

{ periodo:"2",curso:"Ética y ciudadanía",codigo:"40002",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"2",curso:"Agroclimatología",codigo:"30157",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30157"] ,clasificacion1:"Componente Práctico"},
{ periodo:"2",curso:"Botánica económica",codigo:"201710",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"2",curso:"Bioquímica vegetal",codigo:"303526990",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["300047"] },
{ periodo:"2",curso:"Algebra, trigonometría y geometría analítica",codigo:"301301",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"2",curso:"Electiva campo de formación complementaria",codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"3",curso:"Electiva disciplinar especifica",codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Electiva disciplinar especifica",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"3",curso:"Microbiología de suelos",codigo:"303019",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] ,clasificacion1:"Componente Práctico"},
{ periodo:"3",curso:"Fisiología vegetal",codigo:"201711",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["300047"] ,clasificacion1:"Componente Práctico"},
{ periodo:"3",curso:"Fundamentos y generalidades de la investigación",codigo:"150001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"3",curso:"Pensamiento lógico matemático",codigo:"200611",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },
{ periodo:"3",curso:"Electiva campo de formación complementaria",codigo:"*",creditos:"1",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },

{ periodo:"4",curso:"Electiva disciplinar especifica",codigo:"*",creditos:"2",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva disciplinar especifica",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Electiva campo de formación complementaria",codigo:"*",creditos:"1",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] },
{ periodo:"4",curso:"Propagación y micropropagación de plantas",codigo:"30161",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["300047"] ,clasificacion1:"Componente Práctico"},
{ periodo:"4",curso:"Mercadeo agropecuario",codigo:"300005",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"4",curso:"Topografía",codigo:"201620",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"4",curso:"Contabilidad, costos y presupuestos",codigo:"113001",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["200611"] },

{ periodo:"5",curso:"Extensión agrícola",codigo:"303016",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["302407465"] },
{ periodo:"5",curso:"Trabajo de grado (agrarias tecnología)",codigo:"204014",creditos:"2",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"5",curso:"Biodiversidad y servicios ecosistémicos",codigo:"302277025",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176"] },
{ periodo:"5",curso:"Edafología y fertilidad",codigo:"201612",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176","301301"] ,clasificacion1:"Componente Práctico"},
{ periodo:"5",curso:"Bioestadística agraria",codigo:"302277045",creditos:"3",tipo:"Teórico",clasificacion:"Obligatorio", prerrequisitos: ["301301","200611"] },
{ periodo:"5",curso:"Inglés A1",codigo:"900001",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },

{ periodo:"6",curso:"Prestación del servicio social Unadista",codigo:"700004",creditos:"0",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: [] },
{ periodo:"6",curso:"Riegos y drenajes",codigo:"201616",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30157"] ,clasificacion1:"Componente Práctico"},
{ periodo:"6",curso:"Agroforestería con cultivos anuales y perennes",codigo:"302277028",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["30176","300047"] },
{ periodo:"6",curso:"Maquinaria y mecanización agrícola",codigo:"201619",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] ,clasificacion1:"Componente Práctico"},
{ periodo:"6",curso:"Competencias de cadenas agroalimentarias",codigo:"302417513",creditos:"2",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["301301"] },
{ periodo:"6",curso:"Inglés A2",codigo:"900002",creditos:"3",tipo:"Metodológico",clasificacion:"Obligatorio", prerrequisitos: ["900001"] },
{ periodo:"6",curso:"Electiva disciplinar especifica",codigo:"*",creditos:"3",tipo:"Teórico/Metodológico",clasificacion:"Electiva", prerrequisitos: [] }
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
    '302407465': '#d85c29',  
    '30176': '#003e60',
	'300047': '#03995F',  
    '30157': '#6CDF70', 
    '301301': '#892b7d',
    '200611': '#842e2c',
	'900001': '#e9b435',  
    
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
 


//Electivos Disciplinares Específicos
$scope.bas01 = '<p class="lateral1">Electivos Disciplinares Específicos</p>'+
'<ul>'+
'<li>Fundamentos en gestión integral - <strong>Código: </strong>112001 - <strong>Créditos: </strong>3</li>' +
'<li>Manejo de cuencas hidrográficas - <strong>Código: </strong>303013 - <strong>Créditos: </strong>3</li>' +
'<li>Agricultura biológica - <strong>Código: </strong>301615 - <strong>Créditos: </strong>2</li>' +
'<li>Manejo de arvenses - <strong>Código: </strong>30164 - <strong>Créditos: </strong>3</li>' +
'<li>Strategic planning - <strong>Código: </strong>450064 - <strong>Créditos: </strong>3</li>' +
'<li>Floricultura - <strong>Código: </strong>302568 - <strong>Créditos: </strong>2</li>' +
'<li>Manejo integrado de plagas - <strong>Código: </strong>300028 - <strong>Créditos: </strong>3</li>' +
'<li>Manejo de aguas residuales en pequeñas comunidades - <strong>Código: </strong>358041 - <strong>Créditos: </strong>3</li>' +
'<li>Genética - <strong>Código: </strong>201105 - <strong>Créditos: </strong>3</li>' +
'<li>Herbología y alelopatía - <strong>Código: </strong>305698 - <strong>Créditos: </strong>2</li>' +
'<li>Cultivos de clima frío - <strong>Código: </strong>302571 - <strong>Créditos: </strong>2</li>' +
'<li>Fitopatología - <strong>Código: </strong>30165 - <strong>Créditos: </strong>3</li>' +
'<li>English composition I - <strong>Código: </strong>450073 - <strong>Créditos: </strong>3</li>' +
'<li>Frutales - <strong>Código: </strong>201621 - <strong>Créditos: </strong>3</li>' +
'<li>Manejo integrado de enfermedades - <strong>Código: </strong>300029 - <strong>Créditos: </strong>3</li>' +
'<li>Sistema de agroindustria rural - <strong>Código: </strong>201624 - <strong>Créditos: </strong>3</li>' +
'<li>Poscosecha - <strong>Código: </strong>30167 - <strong>Créditos: </strong>3</li>' +
'<li>Cultivos de clima cálido - <strong>Código: </strong>303021 - <strong>Créditos: </strong>2</li>' +
'<li>Fisiología de cultivos - <strong>Código: </strong>300030 - <strong>Créditos: </strong>3</li>' +
'<li>Market and management development - <strong>Código: </strong>450088 - <strong>Créditos: </strong>3</li>' +
'<li>Manejo y conservación de suelos - <strong>Código: </strong>30160 - <strong>Créditos: </strong>3</li>' +
'<li>Entomología - <strong>Código: </strong>30159 - <strong>Créditos: </strong>3</li>' +
'<li>Planificación territorial - <strong>Código: </strong>201724 - <strong>Créditos: </strong>3</li>' +
'<li>Horticultura - <strong>Código: </strong>201618 - <strong>Créditos: </strong>3</li>' +
'<li>Nutrición vegetal - <strong>Código: </strong>302570 - <strong>Créditos: </strong>3</li>' +
'<li>Human resources management - <strong>Código: </strong>450099 - <strong>Créditos: </strong>3</li>' +
'<li>Producción y tecnificación de semillas - <strong>Código: </strong>303018 - <strong>Créditos: </strong>3</li>' +
'<li>Fitomejoramiento - <strong>Código: </strong>30162 - <strong>Créditos: </strong>3</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

//Electivos Formación Complementaria
$scope.bas02 = '<p class="lateral1">Electivos Formación Complementaria</p>'+
'<ul>'+
'<li>Pedagogía para la solución de conflictos - <strong>Código: </strong>80008 - <strong>Créditos: </strong>2</li>' +
'<li>Guitarra - <strong>Código: </strong>80005 - <strong>Créditos: </strong>1</li>' +
'<li>Protocolo - <strong>Código: </strong>80007 - <strong>Créditos: </strong>1</li>' +
'<li>Proyecto de vida - <strong>Código: </strong>80002 - <strong>Créditos: </strong>2</li>' +
'<li>Teatro - <strong>Código: </strong>80010 - <strong>Créditos: </strong>1</li>' +
'<li>Hoja de vida - <strong>Código: </strong>300040 - <strong>Créditos: </strong>1</li>' +
'</ul>'+
'<hr>' +
'<p><strong>Nota: </strong>  Solo se debe seleccionar un curso (1) electivo,  La oferta electiva estará sujeta a condiciones de demanda y recursos institucionales.</p>';

  
});

})();
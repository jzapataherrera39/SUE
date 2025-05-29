(function(){
var app22 = angular.module("myApp2",[ ]);
app22.controller('listadoCtrl2', ['$scope', function($scope){
 
$scope.tecnologia = [
//{titulo:"Requisitos", URL:"https://estudios.unad.edu.co/requisitos",imagen:"https://estudios.unad.edu.co/images/2021/requisitos2.jpg", desc:"Diploma y acta de bachiller, Certificado de presentación del ICFES, Documento de identidad."},
{titulo:"Homologaciones", URL:"https://estudios.unad.edu.co/validaciones",imagen:"https://estudios.unad.edu.co/images/2021/homologaciones2.jpg", desc:"Consulta si puedes beneficiarte de nuestros convenios de homologación."},
{titulo:"Descuentos", URL:"https://estudios.unad.edu.co/descuentos-por-convenios-institucionales",imagen:"https://estudios.unad.edu.co/images/2021/descuentos2.jpg", desc:"Recibe hasta un 25% con los convenios interinstitucionales."},
{titulo:"Costos", URL:"https://estudios.unad.edu.co/costos",imagen:"https://estudios.unad.edu.co/images/2021/costos2.jpg", desc:"Estudia en la UNAD desde $ 2.130.000*. *No Incluye inscripción $ 199.000, ni seguro estudiantil $ 9.000."},
//{titulo:"Financiación", URL:"https://estudios.unad.edu.co/financiacion",imagen:"https://estudios.unad.edu.co/images/2021/financiacion2.jpg", desc:"Opciones de financiación de hasta el 100% de la matrícula, con tasas fijas y/o preferenciales y opción de condonación y subsidio de mantenimiento."},
{titulo:"Metodología", URL:"https://estudios.unad.edu.co/metodologia-de-estudio",imagen:"https://estudios.unad.edu.co/images/2021/metodologia2.jpg", desc:"Se basa en las herramientas TICS, y se caracteriza por promover la autonomía del estudiante en su proceso de aprendizaje."},
{titulo:"Opciones de grado", URL:"https://estudios.unad.edu.co/opcion-de-grado-tecnologia",imagen:"https://estudios.unad.edu.co/images/2021/opciones-de-grado.jpg", desc:"Son las modalidades académicas establecidas para que el estudiante, en la última etapa de sus estudios, fortalezca su formación profesional o disciplinaria."},
{titulo:"Movilidad internacional", URL:"https://vinter.unad.edu.co/movilidad-internacional",imagen:"https://estudios.unad.edu.co/images/2021/movilidad-internacional.jpg", desc:"Permitirá al estudiante participar en actividades académicas en una institución diferente a la de origen, aprender un nuevo idioma y conocer diferentes culturas."}
 ];
 
 $scope.profesional = [
//{titulo:"Requisitos", URL:"https://estudios.unad.edu.co/requisitos",imagen:"https://estudios.unad.edu.co/images/2021/requisitos2.jpg", desc:"Diploma y acta de bachiller, Certificado de presentación del ICFES, Documento de identidad."},
{titulo:"Homologaciones", URL:"https://estudios.unad.edu.co/validaciones",imagen:"https://estudios.unad.edu.co/images/2021/homologaciones2.jpg", desc:"Consulta si puedes beneficiarte de nuestros convenios de homologación."},
{titulo:"Descuentos", URL:"https://estudios.unad.edu.co/descuentos-por-convenios-institucionales",imagen:"https://estudios.unad.edu.co/images/2021/descuentos2.jpg", desc:"Recibe hasta un 25% con los convenios interinstitucionales."},
{titulo:"Costos", URL:"https://estudios.unad.edu.co/costos",imagen:"https://estudios.unad.edu.co/images/2021/costos2.jpg", desc:"Estudia en la UNAD desde $ 2.385.000*. *No Incluye inscripción $ 199.000, ni seguro estudiantil $ 9.000. "},
//{titulo:"Financiación", URL:"https://estudios.unad.edu.co/financiacion",imagen:"https://estudios.unad.edu.co/images/2021/financiacion2.jpg", desc:"Opciones de financiación de hasta el 100% de la matrícula, con tasas fijas y/o preferenciales y opción de condonación y subsidio de mantenimiento."},
{titulo:"Metodología", URL:"https://estudios.unad.edu.co/metodologia-de-estudio",imagen:"https://estudios.unad.edu.co/images/2021/metodologia2.jpg", desc:"Se basa en las herramientas TICS, y se caracteriza por promover la autonomía del estudiante en su proceso de aprendizaje."},
{titulo:"Opciones de grado", URL:"https://estudios.unad.edu.co/opcion-de-grado-profesional",imagen:"https://estudios.unad.edu.co/images/2021/opciones-de-grado.jpg", desc:"Son las modalidades académicas establecidas para que el estudiante, en la última etapa de sus estudios, fortalezca su formación profesional o disciplinaria."},
{titulo:"Movilidad internacional", URL:"https://vinter.unad.edu.co/movilidad-internacional",imagen:"https://estudios.unad.edu.co/images/2021/movilidad-internacional.jpg", desc:"Permitirá al estudiante participar en actividades académicas en una institución diferente a la de origen, aprender un nuevo idioma y conocer diferentes culturas."}
 ];
 
 $scope.especializacion = [
//{titulo:"Requisitos", URL:"https://estudios.unad.edu.co/requisitos",imagen:"https://estudios.unad.edu.co/images/2021/requisitos2.jpg", desc:"Diploma y acta de pregrado, Documento de identidad."},
{titulo:"Homologaciones", URL:"https://estudios.unad.edu.co/validaciones",imagen:"https://estudios.unad.edu.co/images/2021/homologaciones2.jpg", desc:"Consulta si puedes beneficiarte de nuestros convenios de homologación."},
{titulo:"Descuentos", URL:"https://estudios.unad.edu.co/descuentos-por-convenios-institucionales",imagen:"https://estudios.unad.edu.co/images/2021/descuentos2.jpg", desc:"Recibe hasta un 25% con los convenios interinstitucionales."},
{titulo:"Costos", URL:"https://estudios.unad.edu.co/costos",imagen:"https://estudios.unad.edu.co/images/2021/costos2.jpg", desc:"Estudia en la UNAD desde $ 3.588.000*. *No Incluye inscripción $ 317.000, ni seguro estudiantil $ 9.000"},
//{titulo:"Financiación", URL:"https://estudios.unad.edu.co/financiacion",imagen:"https://estudios.unad.edu.co/images/2021/financiacion2.jpg", desc:"Opciones de financiación de hasta el 100% de la matrícula, con tasas fijas y/o preferenciales y opción de condonación y subsidio de mantenimiento."},
{titulo:"Metodología", URL:"https://estudios.unad.edu.co/metodologia-de-estudio",imagen:"https://estudios.unad.edu.co/images/2021/metodologia2.jpg", desc:"Se basa en las herramientas TICS, y se caracteriza por promover la autonomía del estudiante en su proceso de aprendizaje."},
{titulo:"Opciones de grado", URL:"https://estudios.unad.edu.co/opcion-de-grado-especializacion",imagen:"https://estudios.unad.edu.co/images/2021/opciones-de-grado.jpg", desc:"Son las modalidades académicas establecidas para que el estudiante, en la última etapa de sus estudios, fortalezca su formación profesional o disciplinaria."},
{titulo:"Movilidad internacional", URL:"https://vinter.unad.edu.co/movilidad-internacional",imagen:"https://estudios.unad.edu.co/images/2021/movilidad-internacional.jpg", desc:"Permitirá al estudiante participar en actividades académicas en una institución diferente a la de origen, aprender un nuevo idioma y conocer diferentes culturas."}
 ];
 
 $scope.maestria = [
//{titulo:"Requisitos", URL:"https://estudios.unad.edu.co/requisitos",imagen:"https://estudios.unad.edu.co/images/2021/requisitos2.jpg", desc:"Diploma y acta de pregrado, Documento de identidad."},
{titulo:"Homologaciones", URL:"https://estudios.unad.edu.co/validaciones",imagen:"https://estudios.unad.edu.co/images/2021/homologaciones2.jpg", desc:"Consulta si puedes beneficiarte de nuestros convenios de homologación."},
{titulo:"Descuentos", URL:"https://estudios.unad.edu.co/descuentos-por-convenios-institucionales",imagen:"https://estudios.unad.edu.co/images/2021/descuentos2.jpg", desc:"Recibe hasta un 25% con los convenios interinstitucionales."},
{titulo:"Costos", URL:"https://estudios.unad.edu.co/costos",imagen:"https://estudios.unad.edu.co/images/2021/costos2.jpg", desc:"Estudia en la UNAD desde $ 5.550.000*. *No Incluye inscripción $ 317.000, ni seguro estudiantil $ 9.000"},
//{titulo:"Financiación", URL:"https://estudios.unad.edu.co/financiacion",imagen:"https://estudios.unad.edu.co/images/2021/financiacion2.jpg", desc:"Opciones de financiación de hasta el 100% de la matrícula, con tasas fijas y/o preferenciales y opción de condonación y subsidio de mantenimiento."},
{titulo:"Metodología", URL:"https://estudios.unad.edu.co/metodologia-de-estudio",imagen:"https://estudios.unad.edu.co/images/2021/metodologia2.jpg", desc:"Se basa en las herramientas TICS, y se caracteriza por promover la autonomía del estudiante en su proceso de aprendizaje."},
{titulo:"Opciones de grado", URL:"https://estudios.unad.edu.co/opcion-de-grado-maestria",imagen:"https://estudios.unad.edu.co/images/2021/opciones-de-grado.jpg", desc:"Son las modalidades académicas establecidas para que el estudiante, en la última etapa de sus estudios, fortalezca su formación profesional o disciplinaria."},
{titulo:"Movilidad internacional", URL:"https://vinter.unad.edu.co/movilidad-internacional",imagen:"https://estudios.unad.edu.co/images/2021/movilidad-internacional.jpg", desc:"Permitirá al estudiante participar en actividades académicas en una institución diferente a la de origen, aprender un nuevo idioma y conocer diferentes culturas."}
 ];


 $scope.general = [
{titulo:"Modalidad", imagen:"https://estudios.unad.edu.co/images/2021/modalidad.jpg", desc:"Somos la primera Universidad nacida para la modalidad abierta y a distancia, hace cerca de 43 años."},
{titulo:"Infraestructura", imagen:"https://estudios.unad.edu.co/images/2021/infraestructura.jpg", desc:"Tenemos la infraestructura tecnológica y académica para atender a más de 167 mil estudiantes."},
{titulo:"Prácticas", imagen:"https://estudios.unad.edu.co/images/2021/practicas.jpg", desc:"Tenemos escenarios de práctica académica especializados de acceso virtual y remoto."},
{titulo:"Presencia nacional e internacional",imagen:"https://estudios.unad.edu.co/images/2021/presencia.jpg", desc:"Contamos con 70 centros regionales en todo el país y 1 proyecto de internacionalización en La Florida, USA."}
 ];

 
}]);

})();



  
  









 
 
 






(function(){
var app = angular.module('myApp',[]);          
app.controller('listado', ['$scope', function($scope){

    $scope.ignoreAccents = function(search) {
        // Función para remover acentos
        function removeAccents(str) {
            const accentMap = {
                'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
                'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U'
            };
            return str.split('').map(char => accentMap[char] || char).join('');
        }

        if (!$scope.search) {
            return true;
        }

        var text = removeAccents(search.programa.toLowerCase());
        var searchText = removeAccents($scope.search.toLowerCase());
        return text.indexOf(searchText) > -1;
    };
	 
  
$scope.names = [
    {escuela:"ECISA",web:"../diplomado-de-almacenamiento-de-medicamentos-y-dispositivos", nombre:"Diplomado en Almacenamiento de Medicamentos y Dispositivos Médicos", img:"images/2024/2.-Diplomado-en-Almacenamiento-de-Medicamentos-y-Dispositivos-Medicos.jpg"},
    {escuela:"ECISA",web:"../diplomado-en-salud-familiar-y-comunitaria", nombre:"Diplomado en Salud familiar y comunitaria", img:"images/2024/4.-Diplomado-en-salud-familiar-y-comunitaria.jpg"},
	{escuela:"ECISA",web:"../diplomado-gestion-administrativa-de-la-salud-publica", nombre:"Diplomado Gestión Administrativa de la Salud Pública", img:"images/2024/5.-Diplomado-Gestion-Administrativa-de-la-Salud-Publica.jpg"},
	{escuela:"ECISA",web:"../diplomado-de-implementacion-y-vigilancia-del-riesgo-psicosocial-en-las-organizaciones", nombre:"Diplomado de Implementación y Vigilancia del Riesgo Psicosocial en las Organizaciones", img:"images/2024/3.-Diplomado-de-Implementacion-y-Vigilancia-del-Riesgo-Psicosocial-en-las-Organizaciones.jpg" },
	
	//{escuela:"ECISA",web:"../diplomado-bioseguridad-en-entornos-laborales", nombre:"Diplomado Bioseguridad en Entornos Laborales", img:"images/2024/6.-Diplomado-Bioseguridad-en-Entornos-Laborales.jpg"},
	//{escuela:"ECISA",web:"../diplomado-de-comunicacion-estrategica-en-salud", nombre:"Diplomado de Comunicación Estratégica en Salud", img:"images/Diplomados/Diplomado_de_Comunicacin_Estratgica_en_Salud.jpg"},
	//{escuela:"ECISA",web:"../diplomado-en-telesalud-e-informatica-medica", nombre:"Diplomado en Telesalud", img:"images/2024/7.-Diplomado-en-Telesalud.jpg"},
	//{escuela:"ECISA",web:"../diplomado-en-radiologia-veterinaria", nombre:"Diplomado en Radiología Veterinaria", img:"images/2024/8.-Diplomado-en-Radiologia-Veterina.jpg"},
    //{escuela:"ECISA",web:"../diplomado-participacion-social-comunitaria-y-ciudadana", nombre:"Diplomado Participación social, comunitaria y ciudadana", img:"images/2024/9.-Diplomado-Participacion-social-comunitaria-y-ciudadana.jpg"},
	//{escuela:"ECISA",web:"../diplomado-politicas-publicas-para-el-sector-salud", nombre:"Diplomado Políticas Públicas para el Sector Salud", img:"images/2024/10.-Diplomado-Politicas-Publicas-para-el-Sector-Salud.jpg"},
	//{escuela:"ECISA",web:"../diplomado-en-escritura-academica-y-cientifica", nombre:"Diplomado en Escritura Académica y Científica en Salud", img:"images/2024/11.-Diplomado-en-Escritura-Academica-y-Cientifica-en-Salud.jpg"},
	//{escuela:"ECISA",web:"../diplomado-actualizacion-estandares-minimos-del-sg-sst", nombre:"Diplomado Actualización Estándares Mínimos del SG - SST", img:"images/2024/12.-Diplomado-Actualizacion-Estandares-Minimos-del-SG-SST.jpg"},	
	
    //{escuela:"ECBTI",web:"../diplomado-en-redes-de-valor-y-logistica", nombre:"Diplomado en redes de valor y logística", img:"images/2024/4.-Diplomado-en-redes-de-valor-y-logistica.jpg"},
	//{escuela:"ECBTI",web:"../diplomado-en-seguridad-y-salud-en-el-trabajo-bajo-la-norma-iso-450001", nombre:"Diplomado en Seguridad y Salud en el Trabajo Bajo la Norma ISO 450001", img:"images/Diplomados/Diplomado_en_Seguridad_y_Salud_en_el_Trabajo_Bajo_la_Norma_ISO_450001.jpg"},
	//{escuela:"ECBTI",web:"../diplomado-en-bioinformatica", nombre:"Diplomado en Bioinformática", img:"images/2024/3.-Diplomado-en-Bioinformatica.jpg"},
	{escuela:"ECBTI",web:"../diplomado-en-ciencia-de-datos-para-la-industria", nombre:"Diplomado en Ciencia de Datos para la industria", img:"images/2024/2.-Diplomado-en-Ciencia-de-Datos-para-la-industria.jpg"},
	//{escuela:"ECBTI",web:"../diplomado-estandarizacion-y-simulacion-de-procesos-en-alimentos", nombre:"Diplomado de estandarización y simulación de procesos en alimentos", img:"images/2024/1.-Diplomado-de-estandarizacion-y-simulacion-de-procesos-en-alimentos.jpg"},
		
	//{escuela:"ECBTI",web:"../diplomado-modelado-3d-y-gestion-de-proyectos-en-entornos-virtuales-parametricos", nombre:"Diplomado Modelado 3D y Gestión de proyectos en entornos virtuales paramétricos", img:"images/2024/5.-Diplomado-Modelado-3D-y-Gestion-de-proyectos-en-entornos-virtuales-parametricos.jpg"},
	//{escuela:"ECBTI",web:"../diplomado-en-diseno-de-pruebas-de-software", nombre:"Diplomado en diseño de pruebas de software", img:"images/2024/6.-Diplomado-en-diseno-de-pruebas-de-software.jpg"},
	//{escuela:"ECBTI",web:"../diplomado-preparacion-para-la-certificacion-cisco-ccnp", nombre:"Diplomado preparación para la Certificación CISCO CCNP", img:"images/2024/7.-Diplomado-preparacion-para-la-Certificacion-CISCO-CCNP.jpg"},
    //{escuela:"ECBTI",web:"../diplomado-enfoque-agile-para-gerencia-de-proyectos", nombre:"Diplomado Enfoque Agile para Gerencia de Proyectos ", img:"images/Diplomados/Diplomado_Enfoque_Agile_para_Gerencia_de_Proyectos.jpg"},
	//{escuela:"ECBTI",web:"../diplomado-certificacion-internacional-en-diseno-visual-a-traves-de-adobe-photoshop", nombre:"Diplomado Certificación Internacional en Diseño Visual a través de Adobe Photoshop", img:"images/2024/8.-Diplomado-Certificacion-Internacional-en-Diseno-Visual-a-traves-de-Adobe-Photoshop.jpg"},
	
	//{escuela:"ECEDU",web:"../diplomado-en-pedagogia-al-alcance-de-profesionales-no-licenciados", nombre:"Diplomado en Pedagogía al Alcance de Profesionales no Licenciados", img:"images/2024/1.-Diplomado-en-Pedagogia-al-Alcance-de-Profesionales-no-Licenciados.jpg"},
	//{escuela:"ECEDU",web:"../la-matematica-en-el-contexto-de-la-pedagogia-critica-matematica-que-ladra-no-muerde", nombre:"Diplomado La Matemática en el Contexto de la Pedagogía Crítica. “Matemática que ladra no muerde”", img:"images/2024/2.-Diplomado-La-Matematica-en-el-Contexto-de-la-Pedagogia-Critica.-Matematica-que-ladra-no-muerde.jpg"},
	
	//{escuela:"ECJP",web:"../diplomado-en-derecho-internacional-humanitario", nombre:"Diplomado en Derecho Internacional Humanitario", img:"images/2024/1.-Diplomado-en-Derecho-Internacional-Humanitario.jpg"},
	//{escuela:"ECJP",web:"../diplomado-en-migracion-desplazamiento-y-refugiados", nombre:"Diplomado en Migración, Desplazamiento y Refugiados", img:"images/2024/2.-Diplomado-en-Migracion-Desplazamiento-y-Refugiados.jpg"},
	//{escuela:"ECJP",web:"../diplomado-en-cooperacion-internacional-y-gestion-de-proyectos", nombre:"Diplomado en Cooperación Internacional y Gestión de Proyectos", img:"images/2024/3.-Diplomado-en-Cooperacion-Internacional-y-Gestion-de-Proyectos.jpg"},
	//{escuela:"ECJP",web:"../diplomado-derecho-administrativo-y-disciplinario", nombre:"Diplomado Derecho Administrativo y Disciplinario", img:"images/2024/4.-Diplomado-Derecho-Administrativo-y-Disciplinario.jpg"},
	//{escuela:"ECJP",web:"../diplomado-en-contratacion-publica-y-planes-de-desarrollo", nombre:"Diplomado en Contratación Pública y Planes de Desarrollo", img:"images/2024/5.-Diplomado-en-Contratacion-Publica-y-Planes-de-Desarrollo.jpg"},
	//{escuela:"ECJP",web:"../diplomado-en-economia-y-presupuesto-publico", nombre:"Diplomado en Economía y Presupuesto Público", img:"images/2024/6.-Diplomado-en-Economia-y-Presupuesto-Publico.jpg"},

    {escuela:"ECAPMA",web:"../diplomado-en-sistemas-de-informacion-geografica", nombre:"Diplomado en Sistemas de Información Geográfica", img:"images/2024/1.-Diplomado-en-Sistemas-de-Informacion-Geografica.jpg"},

	
	{escuela:"ECSAH",web:"../diplomado-nuevos-paradigmas-filosoficos-de-las-organizaciones", nombre:"Diplomado en Nuevos Paradigmas Filosóficos de la Organizaciones", img:"images/2024/2.-Diplomado-en-Politicas-Publicas.jpg"},
	{escuela:"ECSAH",web:"../diplomado-en-politicas-publicas", nombre:"Diplomado en Políticas Públicas", img:"images/2024/2.-Diplomado-en-Politicas-Publicas.jpg"},
	{escuela:"ECSAH",web:"../diplomado-en-periodismo-publico-y-produccion-en-radio-un-compromiso-con-la-paz-en-escenarios-de-postconflicto", nombre:"Diplomado en Periodismo Público y Producción en Radio", img:"images/2024/3.-Diplomado-en-Periodismo-Publico-y-Produccion-en-Radio.jpg"},
	//{escuela:"ECSAH",web:"../diplomado-en-instrumentacion-y-orquestacion-para-formatos-de-musicas-populares-y-contemporaneas", nombre:"Diplomado en Instrumentación y Orquestación para Formatos de Músicas Populares y Contemporáneas", img:"images/2024/4.-Diplomado-en-Instrumentacion-y-Orquestacion.jpg"},
	//{escuela:"ECSAH",web:"../diplomado-red-familia-sustentando-el-tejido-social", nombre:"Diplomado: Red familia, sustentando el tejido social", img:"images/2024/1.Diplomado-Red-familia-sustentando-el-tejido-social.jpg"},
	//{escuela:"ECACEN",web:"../diplomado-en-formulacion-de-proyectos-de-desarrollo-regional", nombre:"Diplomado en Formulación de Proyectos de Desarrollo Regional", img:"images/2024/2.-Diplomado-en-Formulacion-de-Proyectos-de-Desarrollo-Regional.jpg"},
	//{escuela:"ECACEN",web:"../diplomado-en-gerencia-estrategica-responsable", nombre:"Diplomado en Gerencia Estratégica Responsable", img:"images/2024/3.-Diplomado-en-Gerencia-Estrategica-Responsable.jpg"},
	//{escuela:"ECACEN",web:"../diplomado-en-gerencia-de-gestion-de-documentos-y-administracion-de-archivos", nombre:"Diplomado en Gerencia de Gestión de Documentos y Administración de Archivos", img:"images/2024/1.-Diplomado-en-Gerencia-de-Gestion-de-Documentos-y-Administracion-de-Archivos.jpg"},
	{escuela:"ECACEN",web:"../diplomado-en-direccion-y-gestion-del-recurso-humano", nombre:"Diplomado en Dirección y Gestión del Recurso Humano", img: "images/2024/4.-Diplomado-en-Direccion-y-Gestion-del-Recurso-Humano.jpg"},
	{escuela:"ECACEN",web:"../diplomado-en-gestion-de-proyectos-bajo-la-metodologia-general-ajustada-mga", nombre:"Diplomado en Gestión de Proyectos bajo la Metodología General Ajustada (MGA)", img:"images/2024/5.-Diplomado-en-Gestion-de-Proyectos-Bajo-la-Metodologia-General-Ajustada-MGA.jpg"},
    
	//VIDER
	{escuela:"VIDER",web:"../diplomado-en-apropiacion-de-los-objetivos-de-desarrollo-sostenible-ods-desde-la-realidad-de-las-comunidades", nombre:"Diplomado en Apropiación de los Objetivos de Desarrollo Sostenible (ODS) desde la Realidad de las Comunidades - Oferta a nivel nacional", img:"images/2024/1.-Diplomado-en-Apropiacion-de-los-Objetivos-de-Desarrollo-Sostenible-ODS-desde-la-Realidad-de-las-Comunidades.jpg"},
	{escuela:"VIDER",web:"../diplomado-en-cultura-del-buen-vivir", nombre:"Diplomado en Cultura del buen vivir - Zona Sur", img:"images/2024/2.-Cultura-del-buen-vivir.jpg"},
	{escuela:"VIDER",web:"../diplomado-implementacion-de-la-ruta-de-atencion-integral-para-la-convivencia-escolar", nombre:"Diplomado Implementación de la ruta de atención integral para la convivencia escolar - Zona Centro Oriente", img:"images/2024/3.-Diplomado-implementacion-de-la-ruta-de-atencion-integral-para-la-convivencia-escolar.jpg"},
	{escuela:"VIDER",web:"../diplomado-en-turismo-sustentable", nombre:"Diplomado Turismo Sustentable - Zona Occidente", img:"images/2024/4.-Diplomado-Turismo-Sustentable.jpg"},
	{escuela:"VIDER",web:"../diplomado-en-prevencion-de-violencia-de-genero-en-pro-del-empoderamiento-economico-de-la-mujer-campesina", nombre:"Diplomado En Prevención De Violencia De Género En Pro Del Empoderamiento Económico De La Mujer Campesina - Zona Centro Sur", img:"images/2024/5.-Diplomado-en-Prevencion-de-Violencia-de-Genero-en-Pro-del-Empoderamiento-Economico-de-la-Mujer-Campesina.jpg"},
	{escuela:"VIDER",web:"../diplomado-patios-productivos-agroecologicos", nombre:"Diplomado Patios productivos agroecológicos - Zona Caribe", img:"images/2024/6.Diplomado-Patios-Productivos-Agroecologicos.jpg"},
	{escuela:"VIDER",web:"../diplomado-en-destinos-turisticos-inteligentes", nombre:"Diplomado Destinos Turísticos Inteligentes - Zona Centro Bogotá Cundinamarca", img:"images/2024/7.-Diplomado-Destinos-Turisticos-Inteligentes.jpg"},
	{escuela:"VIDER",web:"../diplomado-emprendimiento-e-innovacion", nombre:"Diplomado Emprendimiento e Innovación - Zona Centro Bogotá Cundinamarca", img:"images/2024/8.-Diplomado-Emprendimiento-e-Innovacion.jpg"},
	
	
	{escuela: "Formación de Formadores", nombre:"e-Mediador en AVA", web:"../diplomaturas/e-mediador-en-ava", img:"images/2024/1.-e-Mediador-en-AVA.jpg"},
    {escuela: "Formación de Formadores", nombre:"e-Investigador", web:"../diplomaturas/e-investigador", img:"images/2024/2.-e-Investigador.jpg"},
    {escuela: "Formación de Formadores", nombre:"Diseño de Recursos Educativos Digitales", web:"../diplomaturas/diseno-de-recursos-educativos-digitales", img:"images/2024/3.-Diseno-de-Recursos-Educativos-Digitales.jpg"},
    {escuela: "Formación de Formadores", nombre:"Internacionalización del Currículo", web:"../diplomaturas/internacionalizacion-del-curriculo", img:"images/2024/4.-Internacionalizacion-del-Curriculo.jpg"},
    {escuela: "Formación de Formadores", nombre:"Habilidades Socioemocionales del e-Mediador en AVA", web:"../diplomaturas/habilidades-socioemocionales-del-e-mediador-en-ava", img:"images/2024/5.-Habilidades-Socioemocionales-del-e-Mediador-en-AVA.jpg"},
    {escuela: "Formación de Formadores", nombre:"Apropiación de TIC en Escenarios Inclusivos", web:"../diplomaturas/apropiacion-de-tic-en-escenarios-inclusivos", img:"images/2024/6.-Apropiacion-de-TIC-en-Escenarios-Inclusivos.jpg"},
    {escuela: "Formación de Formadores", nombre:"Estrategias Pedagógicas y Didácticas para la Consejería Estudiantil", web:"../diplomaturas/estrategias-pedagogicas-y-didacticas-para-la-consejeria-estudiantil", img:"images/2024/7.-Estrategias-Pedagogicas-y-Didacticas-para-la-Consejeria-Estudiantil.jpg"},
    {escuela: "Formación de Formadores", nombre:"Gestor de Curso en Ambientes Virtuales de Aprendizaje", web:"../diplomaturas/gestor-de-curso-en-ambientes-virtuales-de-aprendizaje", img:"images/2024/8.-Gestor-de-Curso-en-Ambientes-Virtuales-de-Aprendizaje.jpg"},
    {escuela: "Formación de Formadores", nombre:"Evaluación del aprendizaje en Entornos Virtuales de Aprendizaje", web:"../diplomaturas/evaluacion-del-aprendizaje-en-entornos-virtuales-de-aprendizaje", img:"images/2024/9.Evaluacion-del-aprendizaje-en-Entornos-Virtuales-de-Aprendizaje.jpg"},
    {escuela: "Formación de Formadores", nombre:"Liderazgo Transformacional", web:"../diplomaturas/liderazgo-transformacional", img:"images/2024/10.-Liderazgo-Transformacional.jpg"},
    {escuela: "Formación de Formadores", nombre:"Coaching Educativo desde el Contexto de la UNAD", web:"../diplomaturas/coaching-educativo-desde-el-contexto-de-la-unad", img:"images/2024/11.-Coaching-Educativo-desde-el-Contexto-de-la-UNAD.jpg"},
    {escuela: "Formación de Formadores", nombre:"Gamificación y aprendizaje basado en juegos en AVA", web:"../diplomaturas/gamificacion-y-aprendizaje-basado-en-juegos-en-ava", img:"images/2024/12.-Gamificacion-y-aprendizaje-basado-en-juegos-en-AVA.jpg"},
    {escuela: "Formación de Formadores", nombre:"Inteligencia Artificial y Aprendizaje Profundo aplicado a la Educación en AVA", web:"../diplomaturas/inteligencia-artificial-y-aprendizaje-profundo-aplicado-a-la-educacion-en-ava", img:"images/2024/14.-Inteligencia-Artificial-y-Aprendizaje-Profundo-aplicado-a-la-Educacion-en-AVA.jpg"},
    {escuela: "Formación de Formadores", nombre:"Analítica de Datos y BigData Aplicada en AVA", web:"../diplomaturas/analitica-de-datos-y-bigdata-aplicada-en-ava", img:"images/2024/13.-Analitica-de-Datos-y-BigData-Aplicada-en-AVA.jpg"},


	{escuela:"Formación Institucional a la Medida",web:"../diplomado-de-derecho-a-la-salud-minsalud", nombre:"Diplomado Derecho a la salud ( Minsalud - UNAD)", img:"images/2024/2.-Diplomado-Derecho-a-la-salud--Minsalud-UNAD.jpg"}
	//{escuela: "Formación Institucional a la Medida", nombre: "Medición Indirecta de Alcoholemia por medio de alcohosensores",web:"../medicion-indirecta-de-alcoholemia-por-medio-de-alcohosensores", img:"images/2024/1.-Medicion-Indirecta-de-Alcoholemia-por-medio-de-alcohosensores.jpg"}




  ];
  
  
  $scope.horas120ecsah = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecsah", unidad2:"Escuela de Ciencias Sociales, Artes y Humanidades - ECSAH", intensidad:"120 horas", inversion:"$1.320.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas120ecbti = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecbti", unidad2:"Escuela de Ciencias Básicas, Tecnología e Ingeniería - ECBTI", intensidad:"120 horas", inversion:"$1.320.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas120ecacen = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecacen", unidad2:"Escuela de Ciencias Administrativas, Contables, Económicas y de Negocios - ECACEN", intensidad:"120 horas", inversion:"$1.320.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas120ecapma = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecapma", unidad2:"Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente - ECAPMA", intensidad:"120 horas", inversion:"$1.320.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas120ecjp = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecjp", unidad2:"Escuela de Ciencias Jurídicas y Políticas - ECJP", intensidad:"120 horas", inversion:"$1.320.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas120ecedu = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecedu", unidad2:"Escuela de Ciencias de la Educación - ECEDU", intensidad:"120 horas", inversion:"$1.320.000 + $9.000 de seguro estudiantil."}
 ];
 $scope.horas120ecisa = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecisa", unidad2:"Escuela de Ciencias de la Salud - ECISA", intensidad:"120 horas", inversion:"$1.320.000 + $9.000 de seguro estudiantil."}
 ];
 
 
 $scope.horas160ecsah = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecsah", unidad2:"Escuela de Ciencias Sociales, Artes y Humanidades - ECSAH", intensidad:"160 horas", inversion:"$2.720.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas160ecbti = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecbti", unidad2:"Escuela de Ciencias Básicas, Tecnología e Ingeniería - ECBTI", intensidad:"160 horas", inversion:"$2.720.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas160ecacen = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecacen", unidad2:"Escuela de Ciencias Administrativas, Contables, Económicas y de Negocios - ECACEN", intensidad:"160 horas", inversion:"$2.720.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas160ecapma = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecapma", unidad2:"Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente - ECAPMA", intensidad:"160 horas", inversion:"$2.720.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas160ecjp = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecjp", unidad2:"Escuela de Ciencias Jurídicas y Políticas - ECJP", intensidad:"160 horas", inversion:"$2.720.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas160ecedu = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecedu", unidad2:"Escuela de Ciencias de la Educación - ECEDU", intensidad:"160 horas", inversion:"$2.720.000 + $9.000 de seguro estudiantil."}
 ];
 $scope.horas160ecisa = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecisa", unidad2:"Escuela de Ciencias de la Salud - ECISA", intensidad:"160 horas", inversion:"$2.720.000 + $9.000 de seguro estudiantil."}
 ];
 
 $scope.horas144ecsah = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecsah", unidad2:"Escuela de Ciencias Sociales, Artes y Humanidades - ECSAH", intensidad:"144 horas", inversion:"$1.584.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas144ecbti = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecbti", unidad2:"Escuela de Ciencias Básicas, Tecnología e Ingeniería - ECBTI", intensidad:"144 horas", inversion:"$1.584.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas144ecacen = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecacen", unidad2:"Escuela de Ciencias Administrativas, Contables, Económicas y de Negocios - ECACEN", intensidad:"144 horas", inversion:"$1.584.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas14ecapma = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecapma", unidad2:"Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente - ECAPMA", intensidad:"144 horas", inversion:"$1.584.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas144ecjp = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecjp", unidad2:"Escuela de Ciencias Jurídicas y Políticas - ECJP", intensidad:"144 horas", inversion:"$1.584.000 + $9.000 de seguro estudiantil."}
 ];
$scope.horas144ecedu = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecedu", unidad2:"Escuela de Ciencias de la Educación - ECEDU", intensidad:"144 horas", inversion:"$1.584.000 + $9.000 de seguro estudiantil."}
 ];
 $scope.horas144ecisa = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecisa", unidad2:"Escuela de Ciencias de la Salud - ECISA", intensidad:"144 horas", inversion:"$1.584.000 + $9.000 de seguro estudiantil."}
 ];
 
 $scope.horas96ecbti = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecbti", unidad2:"Escuela de Ciencias Básicas, Tecnología e Ingeniería - ECBTI", intensidad:"96 horas", inversion:"$1.056.000 + $9.000 de seguro estudiantil."}
 ];

$scope.horas96ecbti2 = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecbti", unidad2:"Escuela de Ciencias Básicas, Tecnología e Ingeniería - ECBTI", intensidad:"96 horas", inversion:"$1.056.000 + $9.000 de seguro estudiantil."}
 ];

$scope.horas96ecapma = [
{fecha:"18 de Julio al 18 de septiembre de 2025", fechaic:"22 de septiembre al 22 de noviembre de 2025", unidad: "https://academia.unad.edu.co/ecapma", unidad2:"Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente - ECAPMA", intensidad:"96 horas", inversion:"$1.056.000 + $9.000 de seguro estudiantil."}
 ];



 $scope.general = "Diplomado actualmente no disponible, matriculas abiertas próximamente";
 
  

 $scope.matricula1 = "#" ;
 
 //Todos los diplomados
 $scope.matricula = "#" ;
 
 
 
 
 
 
 // DIPLOMADOS ZONALES - VIDER
 $scope.matriculavider ="https://rca.unad.edu.co/moodle/educacion_n_formal/diplomados_new/home.php?Tan5UdE=12&nivel=1,2,4,5,7&asidAYa6tibaNU=1586" ; 
 
 $scope.horas120vider = [
{fecha:"Próximamente", fechaic:"15 de noviembre al 15 de diciembre de 2023", unidad: "https://vider.unad.edu.co", unidad2:"Vicerrectoría de Inclusión Social para el Desarrollo Regional y Proyección Comunitaria - VIDER", intensidad:"120 horas", inversion:"$1.080.000 + $9.000 de seguro estudiantil."}
 ];
 

 

$scope.hide9 = "display:block" ;

 $scope.setSelectedItem = function(i) {
    $scope.selectedItem = i;
  };

  $scope.clearFilter = function() {
    console.log("xxx");
    $scope.search22 = {};
	$scope.search = '';
  };



 $scope.ecacen="Escuela de Ciencias Administrativas, Contables, Económicas y de Negocios - ECACEN"; 
 $scope.ecapma="Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente - ECAPMA";
 $scope.ecbti="Escuela de Ciencias Básicas, Tecnología e Ingeniería - ECBTI";
 $scope.ecedu="Escuela de Ciencias de la Educación - ECEDU";
 $scope.ecisa="Escuela de Ciencias de la Salud - ECISA";
 $scope.ecsah="Escuela de Ciencias Sociales, Artes y Humanidades - ECSAH";
 $scope.ecjp="Escuela de Ciencias Jurídicas y Políticas - ECJP";
 $scope.ff="Formación de Formadores";
 $scope.ff1="Formación Institucional a la Medida";
 $scope.vider="Vicerrectoría de Inclusión Social para el Desarrollo Regional y Proyección Comunitaria - VIDER";



}]);

})();


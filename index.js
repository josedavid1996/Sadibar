const $titleFirst = document.getElementById('title-first')
const $titleFirstIcon = document.getElementById('title-first-icon')
const $titleSecond = document.getElementById('title-second')
const $titleSecondIcon = document.getElementById('title-second-icon')
const $contentsTitleFirst = document.getElementById('contents-title-first')
const $contentsTitleSecond = document.getElementById('contents-title-second')
const $titleEfectoIcon = document.getElementById('title-efecto-icon')
const $contentsTitleEfecto = document.getElementById('contents-title-efecto')
const $subtitleSecond = document.getElementById('subtitle-second')
const $titlePrincipalesIcon = document.getElementById('title-princiales-icon')
const $contentsTitlePrincipales = document.getElementById(
  'contents-title-princiales'
)

const $titleCohechoIcon = document.getElementById('title-cohecho-icon')
const $contentsTitleCohecho = document.getElementById('contents-title-cohecho')

const $titlePresentacionIcon = document.getElementById(
  'title-presentacion-icon'
)
const $contentsTitlePresentacion = document.getElementById(
  'contents-title-presentacion'
)
const $titleConfianzaIcon = document.getElementById('title-confianza-icon')
const $contentsTitleConfianza = document.getElementById(
  'contents-title-confianza'
)
const $titleEsferasIcon = document.getElementById('title-esferas-icon')
const $contentsTitleEsfera = document.getElementById('contents-title-esfera')
const $titleConceptoIcon = document.getElementById('title-concepto-icon')
const $contentsTitleConcepto = document.getElementById(
  'contents-title-concepto'
)
const $titleActivoGenericoIcon = document.getElementById(
  'title-activo-generico-icon'
)
const $contentsTitleActivoGenerico = document.getElementById(
  'contents-title-activo-generico'
)
const $titlePropioIcon = document.getElementById('title-propio-icon')
const $contentsTitlePropio = document.getElementById('contents-title-propio')

const $titleConcusionIcon = document.getElementById('title-concusion-icon')
const $contentsTitleConcusion = document.getElementById(
  'contents-title-concusion'
)

const $titleConceptoConcusionIcon = document.getElementById(
  'title-concepto-concusion-icon'
)
const $contentsTitleConceptoConcusion = document.getElementById(
  'contents-title-concepto-concusion'
)
const $titlePeculadoIcon = document.getElementById('title-peculado-icon')
const $contentsTitlePeculado = document.getElementById(
  'contents-title-peculado'
)
const $titleConceptoPeculadoIcon = document.getElementById(
  'title-concepto-peculado-icon'
)
const $contentsTitleConceptoPeculado = document.getElementById(
  'contents-title-concepto-peculado'
)
const $titleMalversacionIcon = document.getElementById(
  'title-malversacion-icon'
)
const $contentsTitleMalversacion = document.getElementById(
  'contents-title-malversacion'
)
const $titleConceptoMalversacionIcon = document.getElementById(
  'title-concepto-malversacion-icon'
)
const $contentsTitleConceptoMalversacion = document.getElementById(
  'contents-title-concepto-malversacion'
)
const $titleColusionIcon = document.getElementById('title-colusion-icon')
const $contentsTitleColusion = document.getElementById(
  'contents-title-colusion'
)
const $titleConceptoColusionIcon = document.getElementById(
  'title-concepto-colusion-icon'
)
const $contentsTitleConceptoColusion = document.getElementById(
  'contents-title-concepto-colusion'
)
const $titleNegociacionIcon = document.getElementById('title-negociacion-icon')
const $contentsTitleNegociacion = document.getElementById(
  'contents-title-negociacion'
)
const $titleConceptoNegociacionIcon = document.getElementById(
  'title-concepto-negociacion-icon'
)
const $contentsTitleConceptoNegociacion = document.getElementById(
  'contents-title-concepto-negociacion'
)
const $titleTraficoIcon = document.getElementById('title-trafico-icon')
const $contentsTitleTrafico = document.getElementById('contents-title-trafico')
const $titleConceptoTraficoIcon = document.getElementById(
  'title-concepto-trafico-icon'
)
const $contentsTitleConceptoTrafico = document.getElementById(
  'contents-title-concepto-trafico'
)
const $titlePatrocinioIcon = document.getElementById('title-patrocinio-icon')
const $contentsTitlePatrocinio = document.getElementById(
  'contents-title-patrocinio'
)
const $titleConceptoPatrocinioIcon = document.getElementById(
  'title-concepto-patrocinio-icon'
)
const $contentsTitleConceptoPatrocinio = document.getElementById(
  'contents-title-concepto-patrocinio'
)
const $titleEnriquecimientoIcon = document.getElementById(
  'title-enriquecimiento-icon'
)
const $contentsTitleEnriquecimiento = document.getElementById(
  'contents-title-enriquecimiento'
)
const $titleConceptoEnriquecimientoIcon = document.getElementById(
  'title-concepto-enriquecimiento-icon'
)
const $contentsTitleConceptoEnriquecimiento = document.getElementById(
  'contents-title-concepto-enriquecimiento'
)
const $titleDenuciarIcon = document.getElementById('title-denunciar-icon')
const $contentsTitleDenuciar = document.getElementById(
  'contents-title-denunciar'
)
const $titleTipoDenunciaIcon = document.getElementById(
  'title-tipo-denuncia-icon'
)
const $contentsTitleTipoDenuncia = document.getElementById(
  'contents-title-tipo-denuncia'
)

const $titleEntidadesIcon = document.getElementById('title-entidades-icon')
const $contentsTitleEntidades = document.getElementById(
  'contents-title-entidades'
)
const $titleDenunciar = document.getElementById('title-denunciar')
const $titleEntidades = document.getElementById('title-entidades')
const $titlePrincipal = document.getElementById('title-principal')

// Desplegable de Presentacion
$titleFirstIcon.addEventListener('click', () => {
  $contentsTitleFirst.classList.toggle('is-active')
  $titleFirst.classList.toggle('title-select')
  $titleFirstIcon.classList.toggle('icon-red')

  $contentsTitleSecond.classList.remove('is-active')
  $titleSecond.classList.remove('title-select')
  $titleSecondIcon.classList.remove('icon-red')

  $contentsTitlePrincipales.classList.remove('is-active')
  $titlePrincipal.classList.remove('title-select')
  $titlePrincipalesIcon.classList.remove('icon-red')

  $contentsTitleDenuciar.classList.remove('is-active')
  $titleDenunciar.classList.remove('title-select')
  $titleDenuciarIcon.classList.remove('icon-red')

  $contentsTitleEntidades.classList.remove('is-active')
  $titleEntidades.classList.remove('title-select')
  $titleEntidadesIcon.classList.remove('icon-red')
})

// Desplegable de Guía de denuncias
$titleSecondIcon.addEventListener('click', () => {
  $contentsTitleSecond.classList.toggle('is-active')
  $titleSecond.classList.toggle('title-select')
  $titleSecondIcon.classList.toggle('icon-red')

  $contentsTitleFirst.classList.remove('is-active')
  $titleFirst.classList.remove('title-select')
  $titleFirstIcon.classList.remove('icon-red')

  $contentsTitlePrincipales.classList.remove('is-active')
  $titlePrincipal.classList.remove('title-select')
  $titlePrincipalesIcon.classList.remove('icon-red')

  $contentsTitleDenuciar.classList.remove('is-active')
  $titleDenunciar.classList.remove('title-select')
  $titleDenuciarIcon.classList.remove('icon-red')

  $contentsTitleEntidades.classList.remove('is-active')
  $titleEntidades.classList.remove('title-select')
  $titleEntidadesIcon.classList.remove('icon-red')
})

// Desplegable de Principales delitos de corrupción
$titlePrincipalesIcon.addEventListener('click', () => {
  $contentsTitlePrincipales.classList.toggle('is-active')
  $titlePrincipal.classList.toggle('title-select')
  $titlePrincipalesIcon.classList.toggle('icon-red')

  $contentsTitleFirst.classList.remove('is-active')
  $titleFirst.classList.remove('title-select')
  $titleFirstIcon.classList.remove('icon-red')

  $contentsTitleSecond.classList.remove('is-active')
  $titleSecond.classList.remove('title-select')
  $titleSecondIcon.classList.remove('icon-red')

  $contentsTitleDenuciar.classList.remove('is-active')
  $titleDenunciar.classList.remove('title-select')
  $titleDenuciarIcon.classList.remove('icon-red')

  $contentsTitleEntidades.classList.remove('is-active')
  $titleEntidades.classList.remove('title-select')
  $titleEntidadesIcon.classList.remove('icon-red')
})

// Desplegable de ¿Cómo denunciar un acto de corrupción?
$titleDenuciarIcon.addEventListener('click', () => {
  console.log('hola')
  $contentsTitleDenuciar.classList.toggle('active')
  $titleDenunciar.classList.toggle('title-select')
  $titleDenuciarIcon.classList.toggle('icon-red')

  $contentsTitleFirst.classList.remove('is-active')
  $titleFirst.classList.remove('title-select')
  $titleFirstIcon.classList.remove('icon-red')

  $contentsTitleSecond.classList.remove('is-active')
  $titleSecond.classList.remove('title-select')
  $titleSecondIcon.classList.remove('icon-red')

  $contentsTitlePrincipales.classList.remove('is-active')
  $titlePrincipal.classList.remove('title-select')
  $titlePrincipalesIcon.classList.remove('icon-red')

  $contentsTitleEntidades.classList.remove('is-active')
  $titleEntidades.classList.remove('title-select')
  $titleEntidadesIcon.classList.remove('icon-red')

  $contentsTitleDenuciar.classList.remove('is-active')
  $titleDenunciar.classList.remove('title-select')
  $titleDenuciarIcon.classList.remove('icon-red')
})
// Desplegable de Entidades del sistema de administración de justicia
$titleEntidadesIcon.addEventListener('click', () => {
  $contentsTitleEntidades.classList.toggle('is-active')
  $titleEntidades.classList.toggle('title-select')
  $titleEntidadesIcon.classList.toggle('icon-red')

  $contentsTitleFirst.classList.remove('is-active')
  $titleFirst.classList.remove('title-select')
  $titleFirstIcon.classList.remove('icon-red')

  $contentsTitleSecond.classList.remove('is-active')
  $titleSecond.classList.remove('title-select')
  $titleSecondIcon.classList.remove('icon-red')
})

// Desplegable de Efectos de la corrupción
$titleEfectoIcon.addEventListener('click', () => {
  $contentsTitleEfecto.classList.toggle('is-active')
})

// Desplegable de Cohecho
$titleCohechoIcon.addEventListener('click', () => {
  $contentsTitleCohecho.classList.toggle('is-active')
})
// Desplegable de Presentacion
// $titlePresentacionIcon.addEventListener('click', () => {
//   $contentsTitlePresentacion.classList.toggle('is-active')
// })

// Desplegable de En la confianza en las instituciones políticas
$titleConfianzaIcon.addEventListener('click', () => {
  $contentsTitleConfianza.classList.toggle('is-active')
})

// Desplegable En otras esferas
$titleEsferasIcon.addEventListener('click', () => {
  $contentsTitleEsfera.classList.toggle('is-active')
})
// Desplegable En otras Concepto
$titleConceptoIcon.addEventListener('click', () => {
  $contentsTitleConcepto.classList.toggle('is-active')
})
//  Desplegable de Artículo 397. Cohecho activo genérico
$titleActivoGenericoIcon.addEventListener('click', () => {
  $contentsTitleActivoGenerico.classList.toggle('is-active')
})
// Desplegable Artículo 393. Cohecho pasivo propio
$titlePropioIcon.addEventListener('click', () => {
  $contentsTitlePropio.classList.toggle('is-active')
})
//  Desplegable Concepto concusion
$titleConceptoConcusionIcon.addEventListener('click', () => {
  $contentsTitleConceptoConcusion.classList.toggle('is-active')
})
//  Desplegable Concusion
$titleConcusionIcon.addEventListener('click', () => {
  $contentsTitleConcusion.classList.toggle('is-active')
})
//  Desplegable Peculado
$titlePeculadoIcon.addEventListener('click', () => {
  $contentsTitlePeculado.classList.toggle('is-active')
})
//  Desplegable Concepto Peculado
$titleConceptoPeculadoIcon.addEventListener('click', () => {
  $contentsTitleConceptoPeculado.classList.toggle('is-active')
})
//  Desplegable Malversacion
$titleMalversacionIcon.addEventListener('click', () => {
  $contentsTitleMalversacion.classList.toggle('is-active')
})
//  Desplegable Concepto Malversacion
$titleConceptoMalversacionIcon.addEventListener('click', () => {
  $contentsTitleConceptoMalversacion.classList.toggle('is-active')
})
//  Desplegable colusion
$titleColusionIcon.addEventListener('click', () => {
  $contentsTitleColusion.classList.toggle('is-active')
})
//  Desplegable Concepto colusion
$titleConceptoColusionIcon.addEventListener('click', () => {
  $contentsTitleConceptoColusion.classList.toggle('is-active')
})
//  Desplegable Negociacion
$titleNegociacionIcon.addEventListener('click', () => {
  $contentsTitleNegociacion.classList.toggle('is-active')
})
//  Desplegable Concepto negociacion
$titleConceptoNegociacionIcon.addEventListener('click', () => {
  $contentsTitleConceptoNegociacion.classList.toggle('is-active')
})
//  Desplegable Trafico
$titleTraficoIcon.addEventListener('click', () => {
  $contentsTitleTrafico.classList.toggle('is-active')
})
//  Desplegable Concepto Trafico
$titleConceptoTraficoIcon.addEventListener('click', () => {
  $contentsTitleConceptoTrafico.classList.toggle('is-active')
})
//  Desplegable Patrocinio
$titlePatrocinioIcon.addEventListener('click', () => {
  $contentsTitlePatrocinio.classList.toggle('is-active')
})
//  Desplegable Concepto Patrocinio
$titleConceptoPatrocinioIcon.addEventListener('click', () => {
  $contentsTitleConceptoPatrocinio.classList.toggle('is-active')
})
//  Desplegable Enriquecimiento
$titleEnriquecimientoIcon.addEventListener('click', () => {
  $contentsTitleEnriquecimiento.classList.toggle('is-active')
})
//  Desplegable Concepto Enriquecimiento
$titleConceptoEnriquecimientoIcon.addEventListener('click', () => {
  $contentsTitleConceptoEnriquecimiento.classList.toggle('is-active')
})
//  Desplegable Tipo denuncia
$titleTipoDenunciaIcon.addEventListener('click', () => {
  $contentsTitleTipoDenuncia.classList.toggle('is-active')
})

const $container = document.getElementById('container')
const $titleFirst = document.getElementById('title-first')
const $titleFirstIcon = document.getElementById('title-first-icon')
const $titleSecond = document.getElementById('title-second')
const $titleSecondIcon = document.getElementById('title-second-icon')
const $contentsTitleFirst = document.getElementById('contents-title-first')
const $contentsTitleSecond = document.getElementById('contents-title-second')
const $subtitleFirstIcon = document.getElementById('subtitle-first-icon')
const $contentsSubtitleFirst = document.getElementById(
  'contents-subtitle-first'
)
const $subtitleSecond = document.getElementById('subtitle-second')
const $subtitleSecondIcon = document.getElementById('subtitle-second-icon')
const $contentsSubtitleSecond = document.getElementById(
  'contents-subtitle-second'
)
const $subtitleThird = document.getElementById('subtitle-third')
const $subtitleThirdIcon = document.getElementById('subtitle-third-icon')
const $contentsSubtitleThird = document.getElementById(
  'contents-subtitle-third'
)
const $subtitleFirst = document.getElementById('subtitle-first')

$container.addEventListener('click', (e) => {
  if (e.target === $titleFirstIcon) {
    $contentsTitleFirst.classList.toggle('is-active')
    $titleFirst.classList.toggle('title-select')
    $titleFirstIcon.classList.toggle('icon-red')
    $contentsTitleSecond.classList.remove('is-active')
    $titleSecond.classList.remove('title-select')
    $titleSecondIcon.classList.remove('icon-red')
  }
  if (e.target === $titleSecondIcon) {
    $contentsTitleSecond.classList.toggle('is-active')
    $titleSecond.classList.toggle('title-select')
    $titleSecondIcon.classList.toggle('icon-red')
    $contentsTitleFirst.classList.remove('is-active')
    $titleFirst.classList.remove('title-select')
    $titleFirstIcon.classList.remove('icon-red')
  }

  if (e.target === $subtitleFirstIcon) {
    $contentsSubtitleFirst.classList.toggle('is-active')
  }
  if (e.target === $subtitleSecondIcon) {
    $contentsSubtitleSecond.classList.toggle('is-active')
  }
  if (e.target === $subtitleThirdIcon) {
    $contentsSubtitleThird.classList.toggle('is-active')
  }
})
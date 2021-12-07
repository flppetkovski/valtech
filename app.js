const primaryButton = document.getElementById('primary-button')
const main = document.getElementById('main')
const footer = document.getElementById('footer')

const sectionOne = document.getElementById('section-one')
const sectionTwo = document.getElementById('section-two')
const sectionThree = document.getElementById('section-three')

const linkOne = document.getElementById('section-one-link')
const linkTwo = document.getElementById('section-two-link')
const linkThree = document.getElementById('section-three-link')
const logo = document.getElementById('footer-logo')
const nav = document.getElementById('nav')

const mobileOne = document.getElementById('mobile-one-link')
const mobileTwo = document.getElementById('mobile-two-link')
const mobileThree = document.getElementById('mobile-three-link')

const mobileMenu = document.getElementById('hamburger__menu')
const bar1 = document.getElementById('bar-1')
const bar2 = document.getElementById('bar-2')
const bar3 = document.getElementById('bar-3')
const nav__mobile = document.getElementById('nav__mobile')
const mobile__list = document.getElementById('mobile__list')
function smoothScroll(section) {
  section.scrollIntoView({
    behavior: 'smooth',
  })
}

linkOne.addEventListener('click', function (e) {
  e.preventDefault()
  linkOne.classList.add('active')
  linkTwo.classList.remove('active')
  linkThree.classList.remove('active')
})
linkTwo.addEventListener('click', function (e) {
  e.preventDefault()
  smoothScroll(sectionTwo)
  linkOne.classList.remove('active')
  linkThree.classList.remove('active')
  linkTwo.classList.add('active')
})
linkThree.addEventListener('click', function (e) {
  e.preventDefault()
  smoothScroll(sectionThree)
  linkOne.classList.remove('active')
  linkTwo.classList.remove('active')
  linkThree.classList.add('active')
})
logo.addEventListener('click', smoothScroll(document.getElementById('nav')))

mobileOne.addEventListener('click', function (e) {
  e.preventDefault()
  nav__list.classList.add('hidden')
  mobile__list.classList.add('hidden')
  smoothScroll(sectionOne)
  bar1.classList.toggle('change-1')
  bar2.classList.toggle('change-2')
  bar3.classList.toggle('change-3')
})

mobileTwo.addEventListener('click', function (e) {
  e.preventDefault()
  nav__list.classList.add('hidden')
  mobile__list.classList.add('hidden')
  smoothScroll(sectionTwo)
  bar1.classList.toggle('change-1')
  bar2.classList.toggle('change-2')
  bar3.classList.toggle('change-3')
})

mobileThree.addEventListener('click', function (e) {
  e.preventDefault()
  nav__list.classList.add('hidden')
  mobile__list.classList.add('hidden')
  smoothScroll(sectionThree)
  bar1.classList.toggle('change-1')
  bar2.classList.toggle('change-2')
  bar3.classList.toggle('change-3')
})

function sendMail() {
  let link = 'mailto:mk.contact@valtech.com'
  window.location.href = link
}
primaryButton.addEventListener('click', function () {
  sendMail()
})

window.onload = function () {
  document.getElementById('section-one-link').classList.add('active')
}

let scrollpos = window.scrollY

function addClassOnScroll() {
  linkOne.classList.add('active')
  linkTwo.classList.remove('active')
  linkThree.classList.remove('active')
}

function removeClassOnScroll() {
  linkOne.classList.remove('active')
}

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY

  if (scrollpos < 440) {
    addClassOnScroll()
  } else {
    removeClassOnScroll()
  }
})

primaryButton.addEventListener('mouseover', function () {
  primaryButton.classList.add('primary__button')
})

primaryButton.addEventListener('mouseleave', function () {
  primaryButton.classList.remove('primary__button')
  setTimeout(() => {
    primaryButton.classList.remove('primary__button')
  }, 2500)
})

primaryButton.addEventListener('click', function () {
  primaryButton.classList.add('clicked')
  primaryButton.classList.add('primary__button')

  setTimeout(() => {
    primaryButton.classList.remove('clicked')
    primaryButton.classList.remove('primary__button')
  }, 3000)
})

mobileMenu.addEventListener('click', function () {
  bar1.classList.toggle('change-1')
  bar2.classList.toggle('change-2')
  bar3.classList.toggle('change-3')
  main.classList.add('hidden')
  footer.classList.add('hidden')
  primaryButton.add('hidden')
})
mobileMenu.addEventListener('click', function () {
  nav__list.classList.toggle('hidden')
  mobile__list.classList.toggle('hidden')
})
// main.classList.remove('hidden')
// footer.classList.remove('hidden')
// primaryButton.remove('hidden')

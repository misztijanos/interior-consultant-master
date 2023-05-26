import './scss/main.scss'

let mobileButton = document.getElementsByClassName('header--hamburger')[0]
let logo = document.getElementsByClassName('header--logo')[0]
let main = document.getElementsByTagName('main')[0]
let footer = document.getElementsByTagName('footer')[0]
let mobileMenu = document.getElementsByClassName('mobile-menu')[0]
mobileButton.onclick = toggleMobileMenu

function toggleMobileMenu() {
  mobileButton.classList.toggle('clicked')
  logo.classList.toggle('hide')
  main.classList.toggle('hide')
  footer.classList.toggle('hide')
  mobileMenu.classList.toggle('show')
}

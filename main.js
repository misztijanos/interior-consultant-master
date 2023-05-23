import './scss/main.scss'

let mobileButton = document.getElementsByClassName('header--mobile-button')[0]

mobileButton.onclick = () => {
  mobileButton.classList.toggle('clicked')
}

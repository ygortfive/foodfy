const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modalOverlay')
const modal = modalOverlay.querySelector('.modal')

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector('img').src = card.querySelector('img').src
    modal.querySelector('h1').innerHTML = card.querySelector('h3').innerHTML
    modal.querySelector('p').innerHTML = card.querySelector('h4').innerHTML
    modalOverlay.classList.add('active')
  })
})

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove('active') 
})
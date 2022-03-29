import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault()

    modalTitle.innerHTML = 'Marcar como lido'
    modalDescription.innerHTML = 'Tem certeza que deseja marcar está pergunta como lida?'
    modalButton.innerHTML = 'Sim, marcar como lido'

    modal.open()
  })
})

const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault()
    modalTitle.innerHTML = 'Excluir pergunta'
    modalDescription.innerHTML = 'Tem certeza que dejesa excluir esta pergunta?'
    modalButton.innerHTML = 'Sim, excluir'


    modal.open()
  })
})






// 1:48 é a hora que fez a modal diferenciado, caso eu precise
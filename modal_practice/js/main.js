'use strict';

const openButton = document.querySelector('.open-btn');
const modalWindow = document.querySelector('.modal');
const decision = document.querySelector('.modal-btn');
const mainContainer = document.querySelector('container');

function openModal() {
    modalWindow.classList.add('active');
}

openButton.addEventListener('click', openModal);

function closeModal() {
    modalWindow.classList.remove('active');
}

decision.addEventListener('click', () => {
    closeModal();
});
mainContainer.addEventListener('click', (event) => {
   if(event.target === mainContainer) { closeModal();
   }
});
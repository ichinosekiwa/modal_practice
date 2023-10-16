'use strict';

const openModal = document.querySelector('.open-btn');
const modalWindow = document.querySelector('.modal');

openModal.addEventListener('click', function (){
    modalWindow.classList.add('active')
});

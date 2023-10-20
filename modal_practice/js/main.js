'use strict';

const openButton = document.querySelector('.open-btn');
const modalWindow = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-box');
const decision = document.querySelector('.modal-btn');
const mainContainer = document.querySelector('.container');

//modalをアクティブにして開く
function openModal() {
    modalWindow.classList.add('active');
}
openButton.addEventListener('click', openModal);

//modalを閉じる
function closeModal() {
    modalWindow.classList.remove('active');
}
//決定ボタンで閉じる
decision.addEventListener('click', (e) => {
    closeModal();
});

//modal領域外で閉じる
modalWindow.addEventListener('click', () => {
    closeModal();
});
//modal-boxのバブリングを止める
modalBox.addEventListener("click", function(e) {
    e.stopPropagation();
});
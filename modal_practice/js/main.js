'use strict';

const openButton = document.querySelector('.open-btn');
const modalWindow = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-box');
const decision = document.querySelector('.modal-btn');
const mainContainer = document.querySelector('.container');
// 選択した値をブラウザに表示
const radioAge = document.getElementsByName('age');

//modalを開く
function openModal() {
    modalWindow.classList.add('active');
}
openButton.addEventListener('click', openModal);

//modalを閉じる
function closeModal() {
    modalWindow.classList.remove('active');
}
//決定ボタン
decision.addEventListener('click', () => {
    closeModal();
});

//modal領域外
modalWindow.addEventListener('click', () => {
    closeModal();
});
//modal-box バブリングを止める
modalBox.addEventListener("click", function(e) {
    e.stopPropagation();
});

// ラジオボタンの値を取り出す
function buttonClick() {
    let checkValue = '';

    radioAge.forEach((radio) => {
        if (radio.checked) {
            checkValue = radio.value;
        }
    });
    const resultItem = document.getElementById('result');
    resultItem.textContent = checkValue;
}
let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);




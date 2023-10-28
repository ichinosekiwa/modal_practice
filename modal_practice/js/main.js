'use strict';

const openButton = document.querySelector('.open-btn');
const modalWindow = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-box');
const nextBtn = document.querySelector('.modal-btnNext');
const decision = document.querySelector('.modal-btn');
const mainContainer = document.querySelector('.container');
const modalAge = document.getElementById('modal-age');
const modalArea = document.getElementById('modal-area');
// 選択した値をブラウザに表示
const radioAge = document.getElementsByName('age');
const radioArea = document.getElementsByName('area');

//modalを開く
function openModal() {
    modalWindow.classList.add('active');
}
openButton.addEventListener('click', openModal);

// 次へクリックでmodalを切り替える
function nextModal() {
    modalAge.classList.remove('is-show');
    modalArea.classList.add('is-show');
}
nextBtn.addEventListener('click', nextModal);

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

// ラジオボタンの値を取り出す
function buttonClick() {
    let checkValueAge = '';
    let checkValueArea = '';

    radioAge.forEach((radio) => {
        if (radio.checked) {
            checkValueAge = radio.value;
        }
    });

    radioArea.forEach((radio) => {
        if (radio.checked) {
            checkValueArea = radio.value;
        }
    });

    const resultItem = document.getElementById('result');
    resultItem.textContent = `${checkValueAge}　${checkValueArea}`;
}
const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);

//modal-box バブリングを止める
modalBox.addEventListener("click", function(e) {
    e.stopPropagation();
});
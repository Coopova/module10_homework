// Задание 1.

// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const btn = document.querySelector('.btn');
const btnIcon1 = document.querySelector('.btn_icon_1');
const btnIcon2 = document.querySelector('.btn_icon_2');

btn.addEventListener('click', () => {
    btnIcon1.classList.toggle('invis');
    btnIcon2.classList.toggle('invis');
})
// Задание 2.

// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
// При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const width = window.screen.width;
    const height = window.screen.height;
    alert(`Размеры вашего экрана: ширина - ${width}, высота - ${height}`);
})
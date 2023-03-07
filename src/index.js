//Задание 1. Создайте страницу, подключите скрипт. Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!».
function getMessage() {
  console.log('Я учу JavaScript!');
}

getMessage();

//Задание 2. Создайте галерею переключения изображений. В ней будет две кнопки: вперёд и назад, которые должны переключать изображение.

function Previous() {
  document.getElementById('garryPotter')
  .src="img/1.jpg";
  }

function Next() {
document.getElementById('garryPotter')
.src="img/2.jpg";
}

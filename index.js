// Задание в начале
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > 8 && num2 > 8) {
    alert(`Сумма чисел: ${num1 + num2}`);
} else if (num1 < 5 || num2 < 5) {
    alert(`Произведение чисел: ${num1 * num2}`);
} else {
    alert(`Разность чисел: ${num1 - num2}`);
}

// оценка
let mark = prompt("Введите оценку (1-5):");
mark = Number(mark);

switch (mark) {
    case 1:
        alert("Оценка: плохо");
        break;
    case 2:
        alert("Оценка: неудовлетворительно");
        break;
    case 3:
        alert("Оценка: удовлетворительно");
        break;
    case 4:
        alert("Оценка: хорошо");
        break;
    case 5:
        alert("Оценка: отлично");
        break;
    default:
        alert("Неверная оценка! Введите число от 1 до 5");
}

// циклы
for (let i = 100; i >= 20; i -= 10) {
    console.log(i);
}

for (let i = 3; i <= 21; i += 2) {
    console.log(i);
}
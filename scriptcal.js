// Находим элементы на странице
const productSelect = document.getElementById('productSelect');
const quantityInput = document.getElementById('quantityInput');
const calculateBtn = document.getElementById('calculateBtn');
const resultOutput = document.getElementById('resultOutput');

// Функция расчета
function calculateTotal() {
    // Получаем цену (из значения value выбранной опции)
    const price = parseFloat(productSelect.value);

    // Получаем количество и преобразуем в число
    const quantity = parseInt(quantityInput.value);

    // Проверка на корректность ввода количества
    if (isNaN(quantity) || quantity < 1) {
        resultOutput.textContent = "Введите корректное количество!";
        resultOutput.style.color = "red";
        return;
    }

    // Вычисляем итоговую стоимость
    const totalCost = price * quantity;

    // Выводим результат на страницу
    resultOutput.textContent = ` ${totalCost} rub.`;
    resultOutput.style.color = "#333";
}

// Привязываем событие клика к кнопке
calculateBtn.addEventListener('click', calculateTotal);
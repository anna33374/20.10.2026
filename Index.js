let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

console.log("Начальный груз:", cargoHold);
console.log(" ");

console.log("Проверка Безопасности:");
cargoHold.forEach(el => {
    console.log(`Внимание: груз ${el} проверен`);
    if (el === "Кристаллы") {
        console.log("Внимание!!! Обнаружен ценный груз");
    }
});
console.log(" ");

console.log("Срочная разгрузка");
let removItem = cargoHold.pop();
console.log(`Разгружен последний отсек: ${removItem}`);
console.log("Текущий груз:", cargoHold);
console.log(" ");


console.log("Секретная Миссия");
let scienceCargo = cargoHold.slice(1, 4);
console.log("Грузы для учёных:", scienceCargo);
console.log("Оригинальный массив:", cargoHold);
console.log(" ");

console.log("Атака Пиратов");
cargoHold.splice(1, 2);
console.log("После атаки пиратов:", cargoHold);
console.log(" ");

console.log("Контрабанда");
cargoHold.splice(1, 0, "Золото", "Детектор лжи");
console.log("Итоговый груз корабля:", cargoHold);

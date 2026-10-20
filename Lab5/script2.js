const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');
let counter = 1;
const myVariantNum = 7; // Задаємо номер варіанту, на який буде реагувати hover

// Створення таблиці 6x6
for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        cell.innerText = counter;
        
        // Події
        // 1. Наведення (mouseover) на клітинку, що відповідає номеру варіанта (7) -> випадковий колір
        cell.addEventListener('mouseover', function() {
            if (parseInt(this.innerText) === myVariantNum) {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                this.style.backgroundColor = randomColor;
            }
        });

        // 2. Click -> зміна кольору на обраний з палітри
        cell.addEventListener('click', function() {
            this.style.backgroundColor = colorPicker.value;
        });

        // 3. dblClick -> зміна кольору рядків таблиці, починаючи з обраного, через один (Варіант 7)
        cell.addEventListener('dblclick', function() {
            const startRowIndex = this.parentElement.rowIndex; // Отримуємо індекс рядка, де клікнули
            const selectedColor = colorPicker.value;

            // Проходимо по всіх рядках, починаючи з обраного, з кроком 2 (через один)
            for (let r = startRowIndex; r < table.rows.length; r += 2) {
                const targetRow = table.rows[r];
                for (let c = 0; c < targetRow.cells.length; c++) {
                    targetRow.cells[c].style.backgroundColor = selectedColor;
                }
            }
        });

        counter++;
    }
}
// --- Завдання 1: Зміна кольору 8-го та 9-го елементів ---
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Отримуємо 8-й елемент через getElementById
const element1 = document.getElementById('target1');
let isFirstClick1 = true; // Змінна для відстеження першого кліку

if (element1) {
    element1.addEventListener('click', function() {
        if (isFirstClick1) {
            // При першому кліку задаємо конкретні кольори
            this.style.backgroundColor = 'blue'; 
            this.style.color = 'white';          
            isFirstClick1 = false;
        } else {
            // При повторних кліках задаємо рандомні кольори
            this.style.backgroundColor = getRandomColor();
            this.style.color = getRandomColor();
        }
    });
}

// Отримуємо 9-й елемент через querySelector
const element2 = document.querySelector('.target2');
let isFirstClick2 = true;

if (element2) {
    element2.addEventListener('click', function() {
        if (isFirstClick2) {
            // При першому кліку задаємо конкретні кольори
            this.style.backgroundColor = 'green'; 
            this.style.color = 'white';
            isFirstClick2 = false;
        } else {
            // При повторних кліках задаємо рандомні кольори
            this.style.backgroundColor = getRandomColor();
            this.style.color = getRandomColor();
        }
    });
}

// --- Завдання 2: Керування зображенням ---

const addBtn = document.getElementById('add-btn');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const removeBtn = document.getElementById('remove-btn');
const imageLink = document.getElementById('city-link');

const originalImageHTML = '<img id="city-image" src="https://travel.24tv.ua/resources/photos/news/202104/1605159.jpg?v=1661263409000&w=1200&h=675&fit=cover&output=webp&q=70&role=mainNewsPhoto" alt="Фото улюбленого міста" width="600">';

// Додати
addBtn.addEventListener('click', () => {
    if (!document.getElementById('city-image')) {
        imageLink.innerHTML = originalImageHTML;
    }
});

// Збільшити
increaseBtn.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        img.width += 50;
    }
});

// Зменшити
decreaseBtn.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img && img.width > 50) {
        img.width -= 50;
    }
});

// Видалити
removeBtn.addEventListener('click', () => {
    const img = document.getElementById('city-image');
    if (img) {
        img.remove();
    }
});
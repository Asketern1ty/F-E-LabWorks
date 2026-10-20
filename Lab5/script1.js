function validateForm() {
    let isValid = true;
    const resultBox = document.getElementById('resultBox');
    resultBox.style.display = 'none'; // Ховаємо результати перед новою перевіркою

    // Отримуємо значення
    const pib = document.getElementById('pib');
    const idcard = document.getElementById('idcard');
    const birthdate = document.getElementById('birthdate');
    const address = document.getElementById('address');
    const email = document.getElementById('email');

    // Регулярні вирази
    const regPib = /^[А-ЯІЇЄҐа-яіїєґ]+\s[А-ЯІЇЄҐа-яіїєґ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/;
    const regIdcard = /^[А-ЯІЇЄҐA-Z]{2}\s№\d{6}$/;
    const regBirthdate = /^\d{2}\.\d{2}\.\d{4}$/;
    const regAddress = /^м\.\s\d{6}$/; // Або /^м\.\s[А-ЯІЇЄҐа-яіїєґ]+$/ якщо це назва міста
    const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;

    // Функція для перевірки та зміни стилів
    function checkField(inputElement, regex) {
        if (!regex.test(inputElement.value)) {
            inputElement.className = 'error';
            return false;
        } else {
            inputElement.className = 'success';
            return true;
        }
    }

    if (!checkField(pib, regPib)) isValid = false;
    if (!checkField(idcard, regIdcard)) isValid = false;
    if (!checkField(birthdate, regBirthdate)) isValid = false;
    if (!checkField(address, regAddress)) isValid = false;
    if (!checkField(email, regEmail)) isValid = false;

    if (isValid) {
        // Виведення даних
        document.getElementById('resPib').innerText = "ПІБ: " + pib.value;
        document.getElementById('resIdcard').innerText = "ID-card: " + idcard.value;
        document.getElementById('resBirthdate').innerText = "Дата народж.: " + birthdate.value;
        document.getElementById('resAddress').innerText = "Адреса: " + address.value;
        document.getElementById('resEmail').innerText = "e-mail: " + email.value;
        resultBox.style.display = 'block';
    } else {
         alert("Перевірте правильність введених даних. Помилкові поля виділені червоним.");
    }
}
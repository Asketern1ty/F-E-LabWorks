document.getElementById('downloadBtn').addEventListener('click', () => {
    const statusMessage = document.getElementById('statusMessage');
    const usersContainer = document.getElementById('usersContainer');

    statusMessage.textContent = "Завантаження...";
    statusMessage.style.color = "black";
    usersContainer.innerHTML = ""; 

    fetch('https://randomuser.me/api/?results=5')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Помилка мережі');
            }
            return response.json();
        })
        .then((data) => {
            data.results.forEach(user => {
                const cardHTML = `
                    <div class="user-card">
                        <img src="${user.picture.large}" alt="User Picture">
                        <div class="info-group"><strong>City:</strong> ${user.location.city}</div>
                        <div class="info-group"><strong>Postcode:</strong> ${user.location.postcode}</div>
                        <div class="info-group"><strong>Cell:</strong> ${user.cell}</div>
                        <div class="info-group"><strong>E-mail:</strong> <a href="mailto:${user.email}">${user.email}</a></div>
                    </div>
                `;
                usersContainer.innerHTML += cardHTML;
            });

            statusMessage.textContent = "success!";
            statusMessage.style.color = "green";
        })
        .catch((error) => {
            console.error('Помилка:', error);
            statusMessage.textContent = "Помилка завантаження даних.";
            statusMessage.style.color = "red";
        });
});
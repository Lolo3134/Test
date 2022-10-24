async function start() {
    let usersCardBox = document.querySelector('#cardBox');
    let usersPopup = document.querySelector('#userPopup');
    let users = await fetchUsers();

    usersPopup.innerHTML = getUserModals(users).join('');
    usersCardBox.innerHTML = getUserCards(users).join('');

}


function fetchUsers() {
    const url = 'http://127.0.0.1:3000'

    return fetch(url).then(res => res.json())
}

function getUserCard(user) {
    let userName = user.name.replace(/\s+/g, '');
    return `
        <div class="card" data-id="${userName}">
          <h3 class="card--title">${user.name}</h3>
          <div class="card--phone">
            <img src="style/icon/phone.svg" width="16" height="16" alt="телефон">
            <p>${user.phone}</p>
          </div>
          <div class="card--mail">
            <img src="style/icon/envelope.svg" width="16" height="16" alt="почта">
            <a href="mailto:${user.email}">${user.email}</a>
          </div>
        </div>
        `;
}

function getUserModal(user) {
    let userName = user.name.replace(/\s+/g, '');
    return `
        
            <div class="pop-up" data-id="${userName}">
              <button class="pop-up--close"><img src="style/icon/popup-close.svg" width=""></button>
              <h3 class="pop-up--title">${user.name}</h3>
              <div class="pop-up--phone pop-up--flex">
                <p class="pop-up--subtitle">Телефон:</p>
                <a class="color-gray" href="tel:${user.phone}">${user.phone}</a>
              </div>
              <div class="pop-up--mail pop-up--flex">
                <p class="pop-up--subtitle">Почта:</p>
                <a class="color-gray" href="mailto:${user.email}">${user.email}</a>
              </div>
              <div class="pop-up--date pop-up--flex">
                <p class="pop-up--subtitle">Дата приема:</p>
                <p class="color-gray">${user.hire_date}</p>
              </div>
              <div class="pop-up--position pop-up--flex">
                <p class="pop-up--subtitle">Должность:</p>
                <p class="color-gray text-overflow">${user.position_name}</p>
              </div>
              <div class="pop-up--subdivision pop-up--flex">
                <p class="pop-up--subtitle">Подразделение:</p>
                <p class="color-gray text-overflow">${user.department}</p>
              </div>
              <div class="pop-up--info">
                <p class="pop-up--subtitle">Дополнительная информация:</p>
                <p class="color-gray">${user.address}</p>
              </div>
            </div>
        `;
}

function getUserCards(users) {
    return  users.map(el => getUserCard(el))
}

function getUserModals(users) {
    return users.map(el => getUserModal(el))
}


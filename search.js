const input = document.querySelector('#input')

input.oninput = function () {
    let value = this.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card')

    if (value !== '') {
        cards.forEach(function (card) {

            let title = card.querySelector('.card--title')
            if (title.innerText.toLowerCase().search(value) === -1) {
                card.classList.add('hide')
            } else {
                card.classList.remove('hide')
            }
        })
    } else {
        cards.forEach(card => {
            card.classList.remove('hide')
        })
    }
}


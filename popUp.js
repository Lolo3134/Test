const cardContainer = document.querySelector('.content')
const popupBg = document.querySelector('.pop-up--bg')


cardContainer.addEventListener('click', (e) => {
    e.preventDefault()
    const target = e.target;
    const popups = document.querySelectorAll('.pop-up')

    for (let popup of popups) {
        const closePopupBtns = document.querySelectorAll('.pop-up--close')

        if (target.getAttribute('data-id') === popup.getAttribute('data-id')) {
            popupBg.classList.add('active')
            popup.classList.add('active')
        }

        for (let closePopupBtn of closePopupBtns)
        closePopupBtn.addEventListener('click', () => {
            popupBg.classList.remove('active')
            popup.classList.remove('active')
        })

        document.addEventListener('click', (e) => {
            if (e.target === popupBg) {
                popupBg.classList.remove('active')
                popup.classList.remove('active')
            }
        })
    }

})


// window.onload = () => {
//     const openPopup = document.querySelectorAll('.card')
//     const popupBg = document.querySelector('.pop-up--bg')
//     const closePopupBtns = document.querySelectorAll('.pop-up--close')
//
//     for (let card of openPopup) {
//         card.addEventListener('click', (e) => {
//             e.preventDefault()
//             let cardId = card.getAttribute('data-id')
//             console.log(cardId)
//             let popupElem = document.querySelector('.pop-up[data-id="cardId"]');
//             console.log(popupElem)
//                 popupBg.classList.add('active')
//             popupElem.classList.add('active')
//         })
//     }
//
//     for (let closePopupBtn of closePopupBtns) {
//         closePopupBtn.addEventListener('click', () => {
//             for (let popupBg of popupBgs) {
//                 popupBg.classList.remove('active')
//             }
//             for (let popup of popups) {
//                 popup.classList.remove('active')
//             }
//         })
//     }
//
//     document.addEventListener('click', (e) => {
//         if (e.target === popupBg) {
//             for (let popupBg of popupBgs) {
//                 popupBg.classList.remove('active')
//             }
//             for (let popup of popups) {
//                 popup.classList.remove('active')
//             }
//         }
//     })
// }

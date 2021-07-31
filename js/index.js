window.addEventListener('load', function() {
    const headerBtn = document.querySelector('header > div div');
    const headerBtnIcon = document.querySelectorAll('header > div div i');
    const filters = document.querySelector('.filters');
    const cards = document.querySelectorAll('.card');

    console.log(cards);
    headerBtn.addEventListener('click', function() {
        headerBtnIcon.forEach(icon => {
            icon.classList.toggle('hide');
        });
        filters.classList.toggle('hide');
    });

    cards.forEach(card => {
        let cardDetailOpen = card.childNodes[7].childNodes[3];
        let cardDetailClose = card.childNodes[7].childNodes[5];
        let cardAditionalContent = card.childNodes[5];

        cardDetailOpen.addEventListener('click', function() {
            cardDetailOpen.classList.toggle('hide');
            cardDetailClose.classList.toggle('hide');
            cardAditionalContent.classList.toggle('hide');
        });

        cardDetailClose.addEventListener('click', function() {
            cardDetailOpen.classList.toggle('hide');
            cardDetailClose.classList.toggle('hide');
            cardAditionalContent.classList.toggle('hide');
        });
    })



    
})
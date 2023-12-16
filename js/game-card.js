const buttons = document.querySelectorAll('.tab-button');
const cards = document.querySelectorAll('.tab');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach((button) => {
            button.classList.remove('tab-button-active');
            buttons[index].classList.add('tab-button-active');

        });
        cards.forEach(card => {
            card.classList.remove('tab-active');
            cards[index].classList.add('tab-active');
        });
    })
});

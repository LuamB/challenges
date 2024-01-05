import caesarCipher from '../utils/caesarCipher.js';

export default function Card(author) {
    const card = document.createElement('section');
    card.className = 'card';

    const title = createTitle(author.name);

    const text = document.createElement('p');
    text.className = 'card__text';
    text.textContent = caesarCipher(author.text);

    const button = document.createElement('button');
    button.className = 'card__button';
    button.textContent = 'Decipher';
    button.addEventListener('click', handleDecipherButtonClick);

    card.append(title, text, button);

    function handleDecipherButtonClick() {
        text.textContent = author.text;
        button.setAttribute('disabled', '');
        card.classList.add('card--deciphered');
    }
    return card;
}

export function createTitle(titleName) {
    const title = document.createElement('h2');
    title.className = 'card__title';
    title.textContent = titleName;
    return title;
}

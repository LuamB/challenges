import caesarCipher13 from '../utils/caesarCipher.js';

// Option 1: Leave the function outside.
// Need to pass all the variables used in it.
function handleDecipherHeadlineButtonClick(headlineText, headline, button) {
    headline.textContent = headlineText;
    button.setAttribute('disabled', '');
}

export function Header(headlineText) {
    const header = document.createElement('header');
    header.className = 'header';

    const headline = document.createElement('h1');
    headline.textContent = caesarCipher13(headlineText);

    const button = document.createElement('button');
    button.textContent = 'Decipher Headline';
    button.type = 'button';
    button.className = 'header__button';

    //Option 1
    button.addEventListener('click', () => {
        handleDecipherHeadlineButtonClick(headlineText, headline, button);
    });

    /*     //Option 2:
    button.addEventListener('click', handleDecipherHeadlineButtonClick);

    //Option 2: Define the function within the function.
    function handleDecipherHeadlineButtonClick() {
        headline.textContent = headlineText;
        button.setAttribute('disabled', '');
    } */

    header.append(headline, button);
    return header;
}

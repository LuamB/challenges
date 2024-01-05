import { Header } from './header.js';
import HelloCard, { createTitle } from './card.js';
import { authors } from '../utils/authors.js';

/** Get root element */
const root = document.querySelector('#root');

/** Header */
const headlineText = 'Classical Authors';
const header = Header(headlineText);
root.append(header);

/** Main: Author Cards */
authors.forEach((author) => {
    const card = HelloCard(author);
    root.append(card);
});

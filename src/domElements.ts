import { domPointers, modalElements } from './interfaces.js';

const modalElements: modalElements = {
    booksPopup: document.getElementById('popup'),
    sideBook: document.getElementById('side-book'),
    sideTitle: document.getElementById('side-title'),
    sideAuthor: document.getElementById('side-author'),
    bookTitle: document.getElementById('title'),
    bookAuthor: document.getElementById('author'),
    bookPublisher: document.getElementById('publisher'),
    bookYear: document.getElementById('year'),
    bookPages: document.getElementById('pages'),
    bookAudience: document.getElementById('audience'),
    bookDescription: document.getElementById('plot'),
    backBtn: document.getElementById('back') // Skapar en pekare till bakåtknappen, pilen 
}

// Objekt/arrayer med pekare till element som ska vara åtkomliga
const mainPagePointers: domPointers = {
    bookNames: document.getElementsByClassName('book-title'),
    bookAuthors: document.getElementsByClassName('small'),
    bookArea: document.getElementsByClassName('book'),
    libHeader: document.getElementsByClassName('header'),
    domLibrary: document.getElementsByClassName('library')
}


const searchForm: HTMLFormElement = (document.getElementById('search-form') as HTMLFormElement);


export { modalElements, mainPagePointers, searchForm };
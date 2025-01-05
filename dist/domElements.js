// Array med pekare till objekt som ska vara åtkomliga i HTML DOM
const modalElements = {
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
};
// Objekt/arrayer med pekare till element som ska vara åtkomliga
const mainPagePointers = {
    bookNames: document.getElementsByClassName('book-title'),
    bookAuthors: document.getElementsByClassName('small'),
    bookArea: document.getElementsByClassName('book'),
    libHeader: document.getElementsByClassName('header'),
    domLibrary: document.getElementsByClassName('library')
};
// Pekare till sök formuläret
const searchForm = document.getElementById('search-form');
export { modalElements, mainPagePointers, searchForm };

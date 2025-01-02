// **************************************************
// Modul med pekarna för att kunna förändra HTML DOM objekten
// Har delat alla pekare i en modul för att de inte ska finnas på flera ställen i koden
// **************************************************

// Objekt med array med pekare till alla boktitlar och array med pekare till platser för författarnamn
const domBooks: object = {
    bookTitles: document.getElementsByClassName('book-title'),
    bookAuthors: document.getElementsByClassName('small')
}

// Objekt/array med pekare till alla element i popup modal som visar detaljinformation
const modalElements: object = {
    booksPopup: document.getElementById('popup'),
    sideBook: document.getElementById('side-book'),
    bookTitle: document.getElementById('title'),
    bookAuthor: document.getElementById('author'),
    bookPublisher: document.getElementById('publisher'),
    bookYear: document.getElementById('year'),
    bookPages: document.getElementById('pages'),
    bookAudience: document.getElementById('audience'),
    bookDescription: document.getElementById('description'),
    closeBtn: document.getElementById('close') // Skapar en pekare till stängningsknappen, krysset
}

// Objekt/arrayer med pekare till element som ska vara åtkomliga
const mainPagePointers: object = {
    libHeader: document.getElementsByClassName('header'),
    domLibrary: document.getElementsByClassName('library')
}

export { domBooks, modalElements, mainPagePointers }; 
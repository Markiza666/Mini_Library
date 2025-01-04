import { bookArray } from './apiRequest.js';
import { mainPagePointers } from './domElements.js';
import { presentBook } from './modalFunctions.js';
import { initSearch } from './search.js';
const titlesOfBooks = [];
const showLibrary = (libraryData) => {
    libraryData.forEach(book => {
        titlesOfBooks.push(book.title.toUpperCase().replace(/[^\w\s]/g, '').trimEnd());
        if (mainPagePointers.bookNames[(book.id - 1)]) {
            mainPagePointers.bookNames[(book.id - 1)].innerHTML = book.title;
        }
        if (mainPagePointers.bookAuthors[(book.id - 1)]) {
            mainPagePointers.bookAuthors[(book.id - 1)].innerHTML = book.author;
        }
        if (mainPagePointers.bookArea[(book.id - 1)]) {
            mainPagePointers.bookArea[(book.id - 1)].style.backgroundColor = book.color;
            mainPagePointers.bookArea[(book.id - 1)].addEventListener('click', () => { presentBook(book); });
        }
        else {
            console.log('Problem!');
        }
    });
    console.log(titlesOfBooks);
};
showLibrary(bookArray);
initSearch();
export { titlesOfBooks };

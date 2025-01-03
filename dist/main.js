import { getBooksInfo } from './apiRequest.js';
import { mainPagePointers } from './domElements.js';
import { presentBook } from './modalFunctions.js';
const showLibrary = (libraryData) => {
    libraryData.forEach(book => {
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
};
getBooksInfo().then(data => { showLibrary(data); }).catch(error => { console.log(error); });

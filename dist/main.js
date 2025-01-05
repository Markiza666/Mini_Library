import { bookArray } from './apiRequest.js';
import { mainPagePointers } from './domElements.js';
import { presentBook } from './modalFunctions.js';
import { initSearch } from './search.js';
// Skapar en bas för att kunna få en sökbar array med boktitlar
const titlesOfBooks = [];
// Funktion som loopar igenom ett objekt med bookData och tar ut infon för att visa i HTML och till den sökbara arrayen
const showLibrary = (libraryData) => {
    libraryData.forEach(book => {
        // Gör en array med titlarna som konstanter som fixas till, görs till stora bokstäver, tar bort allt som inte är bokstäver, siffror eller mellanslag med replace (^ i det reguljära uttrycket betyder NOT) och trimmar bort mellanslag i slutet av strängen. Allt för att förenkla sökning.
        titlesOfBooks.push(book.title.toUpperCase().replace(/[^\w\s]/g, '').trimEnd());
        // Om pekaren till platsen för bokens titel inte är null så läggs titel in i HTML-elementet
        if (mainPagePointers.bookNames[(book.id - 1)]) {
            mainPagePointers.bookNames[(book.id - 1)].innerHTML = book.title;
        }
        // Om pekaren till platsen för bokens författare inte är null så läggs författarens namn in i HTML-elementet
        if (mainPagePointers.bookAuthors[(book.id - 1)]) {
            mainPagePointers.bookAuthors[(book.id - 1)].innerHTML = book.author;
        }
        if (mainPagePointers.bookArea[(book.id - 1)]) {
            // Skapar pekaren till själva boken som HTMLElement för att kunna sätta style.backgroundColor.
            mainPagePointers.bookArea[(book.id - 1)].style.backgroundColor = book.color;
            mainPagePointers.bookArea[(book.id - 1)].addEventListener('click', () => { presentBook(book); });
        }
        else {
            // Signalera i konsolen om inga pekare har fungerat
            console.log('Problem!');
        }
    });
};
// Kör funktioner som initierar sidan med böcker och sökfält
showLibrary(bookArray);
initSearch();
// Exportera den skapade arrayen med boktitlar för att kunna t ex söka i den.
export { titlesOfBooks };

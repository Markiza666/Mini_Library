import { getBooksInfo, bookData } from './apiRequest';
import { domBooks, modalElements, mainPagePointers } from './domElements';



// const bookShelf: HTMLCollectionOf<Element> = document.getElementsByClassName( 'library');

// const showLibrary = ( libraryData: Array<object> ) => {
//     let books: string = '';
//     let i: number = 1;
//     for ( const book in libraryData ) {
//         let c: number = i;
//         // books += '<section id="book' + c + '" class="book"><article class="vl"><hgroup class="book-title"><h5>' + book.title + '</h5><p class="p-small"><small>' + book.author + '</small></p></hgroup></article></section>';
//         i++;
//         if (Object.prototype.hasOwnProperty.call( libraryData, book )) {
//             domObjects[c].addEventListener('click', () => {
//                 presentBook(libraryData[c])       // Lägger en händelselyssnare på böckerna
//             });
//         }
//     }
//     bookShelf[0].innerHTML = books;
// }
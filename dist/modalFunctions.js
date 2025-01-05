import { modalElements } from './domElements.js';
// **************************************************
// Modul med funktionerna som presenterar informationen i modal-popup
// Har lagt alla presentationsfunktioner i denna modul för att få enkel överblick
// **************************************************
// Öppnar modalen för att visa information om klickad bok med korrekt färg
const showModal = (color) => {
    // Visar modalen med boken i rätt färg
    if (modalElements.booksPopup) {
        modalElements.booksPopup.style.display = 'block';
    }
    if (modalElements.sideBook) {
        modalElements.sideBook.style.backgroundColor = color;
    }
    // Lägger lyssnare på bakåtknappen och säger vad som ska hända, dvs dölja modalen
    if (modalElements.backBtn) {
        modalElements.backBtn.addEventListener('click', () => {
            if (modalElements.booksPopup) {
                modalElements.booksPopup.style.display = 'none';
            }
        });
    }
};
// Lägger in informationsdetaljer i modalen om alla pekare har blivit korrekta
const showDetails = (details) => {
    if (modalElements.bookTitle && modalElements.bookAuthor && modalElements.bookPublisher && modalElements.bookYear && modalElements.bookPages && modalElements.bookAudience && modalElements.bookDescription) {
        modalElements.bookTitle.innerText = details.title;
        modalElements.bookAuthor.innerText = details.author;
        modalElements.bookPublisher.innerText = details.publisher;
        modalElements.bookYear.innerText = details.year;
        modalElements.bookPages.innerText = details.pages;
        modalElements.bookAudience.innerText = details.audience;
        modalElements.bookDescription.innerText = details.plot;
    }
    if (modalElements.sideTitle && modalElements.sideAuthor) {
        modalElements.sideTitle.innerText = details.title;
        modalElements.sideAuthor.innerText = details.author;
    }
};
// Funktionen för att öppna modal/popup och presentera informationen
const presentBook = (dataToPresent) => {
    showModal(dataToPresent.color);
    showDetails(dataToPresent);
};
// Om boken inte finns vid sökning så visas en alert
const bookNotExist = (title) => {
    const alertText = title + " does not exist in our mini library.";
    alert(alertText);
};
export { presentBook, bookNotExist };

import { modalElements } from './domElements.js';
// **************************************************
// Modul med funktionerna som presenterar informationen i modal-popup
// Har lagt alla presentationsfunktioner i denna modul för att få enkel överblick
// **************************************************
// Öppnar modalen för att visa information om klickad himlakropp med korrekt färg till vänster
const showModal = (color) => {
    // Visar modalen med de extra färgringarna och döljer bakomliggande element
    if (modalElements.booksPopup) {
        modalElements.booksPopup.style.display = 'block';
    }
    // modalElements.sideBook.style.visibility = 'hidden';
    if (modalElements.sideBook) {
        modalElements.sideBook.style.backgroundColor = color;
    }
    // Lägger lyssnare på stängningsknappen och säger vad som ska hända
    if (modalElements.backBtn) {
        modalElements.backBtn.addEventListener('click', () => {
            if (modalElements.booksPopup) {
                modalElements.booksPopup.style.display = 'none';
            }
        });
    }
};
// Lägger in informationsdetaljer i modalen
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
let presentBook = (dataToPresent) => {
    showModal(dataToPresent.color);
    showDetails(dataToPresent);
};
export { presentBook };

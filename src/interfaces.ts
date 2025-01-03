// Definierar en egen typ för API data
interface bookData {
    id: number;
    title: string;
    author: string;
    publisher: string;
    year: string;
    pages: string;
    plot: string;
    audience: string;
    color: string;
}

interface domPointers {
    bookNames: HTMLCollectionOf<Element>;
    bookAuthors: HTMLCollectionOf<Element>;
    bookArea: HTMLCollectionOf<Element>;
    libHeader: HTMLCollectionOf<Element>;
    domLibrary: HTMLCollectionOf<Element>;
}

interface modalElements {
    booksPopup: HTMLElement | null;
    sideBook: HTMLElement | null;
    sideTitle: HTMLElement | null;
    sideAuthor: HTMLElement | null;
    bookTitle: HTMLElement | null;
    bookAuthor: HTMLElement | null;
    bookPublisher: HTMLElement | null;
    bookYear: HTMLElement | null;
    bookPages: HTMLElement | null;
    bookAudience: HTMLElement | null;
    bookDescription: HTMLElement | null;
    backBtn: HTMLElement | null;
}

export { bookData, domPointers, modalElements };
import { searchForm } from "./domElements.js";
import { titlesOfBooks } from "./main.js";
import { presentBook, bookNotExist } from "./modalFunctions.js";
import { bookArray } from "./apiRequest.js";
// import { bookData } from "./interfaces.js";
const initSearch = () => {
    searchForm.search.addEventListener("click", (event) => {
        event.preventDefault();
        searchForm.search.value = "";
    });
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(searchForm);
        const titleToFind = (Object.fromEntries(formData)).search.toString();
        findBook(titlesOfBooks, titleToFind);
        console.log(titleToFind);
        searchForm.search.value = "Search a book";
    });
};
const findBook = (searchObject, title) => {
    // Gör en konstant av söksträngen som fixas till, görs till stora bokstäver, tar bort allt som inte är bokstäver, siffror eller mellanslag med replace (^ betyder NOT) och trimmar bort mellanslag i slutet av strängen.
    const titleUpperCase = title.toUpperCase().replace(/[^\w\s]/g, '').trimEnd();
    const titleFound = searchObject.indexOf(titleUpperCase);
    console.log(titleFound);
    if (titleFound === -1) {
        console.log(titleUpperCase);
        bookNotExist(title);
    }
    else if (titleFound >= 0) {
        console.log(bookArray[titleFound]);
        console.log(titleUpperCase);
        presentBook(bookArray[titleFound]);
    }
};
export { initSearch };

import { searchForm } from "./domElements.js";
import { titlesOfBooks } from "./main.js";
import { presentBook, bookNotExist } from "./modalFunctions.js";
import { bookArray } from "./apiRequest.js";

// Funktion son initierar sökformuläret med lyssnare som 
const initSearch = (): void => {
    searchForm.search.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        searchForm.search.value = "";
    });
    
    searchForm.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();

        const formData: FormData = new FormData(searchForm);
        const titleToFind: string = (Object.fromEntries(formData)).search.toString();
    
        findBook(titlesOfBooks, titleToFind);
        console.log(titleToFind);
        
        searchForm.search.value = "Search a book";
    });
}

const findBook = (searchObject: Array<string>, title: string): void => {
    // Gör en konstant av söksträngen som fixas till, görs till stora bokstäver, tar bort allt som inte är bokstäver, siffror eller mellanslag med replace (^ i det reguljära uttrycket betyder NOT) och trimmar bort mellanslag i slutet av strängen.
    const titleUpperCase: string = title.toUpperCase().replace(/[^\w\s]/g, '').trimEnd();

    // Kolla om vi hittar en titel som söks i en array med titlar
    const titleFound: number = searchObject.indexOf(titleUpperCase);
    console.log(titleFound);
    if (titleFound === -1) { // Om inget hittas i arrayen så blir resultatet -1 och en funktion körs som hanterar felet.
        bookNotExist(title);
    }
    else if (titleFound >= 0) { // Om man får ett giltigt indexnummer så körs funktioner för att visa information om boken
        presentBook(bookArray[titleFound]);
    }
}

// Funktionen som initierar sökformuläret exporteras.
export { initSearch };
import {bookData} from './interfaces.js';

// Asynkron funktion som hämtar data från API
async function getBooksInfo(): Promise<bookData[]> {        
    
    // Adressen som data ska hämtas ifrån
    const baseUrl: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

    // Hämta data med fetch som läggs in i response
    const response = await fetch(baseUrl);

    // Justera data till ett json objekt som läggs in i apiData
    const apiData: bookData[] = await response.json();
    return apiData;
}

// Konstanten skapas med rätt typ genom att vänta på att funktionen körs färdigt
const bookArray: bookData[] = await getBooksInfo();

export { bookArray }
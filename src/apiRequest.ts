import {bookData} from './interfaces.js';

async function getBooksInfo(): Promise<bookData[]> {
    const baseUrl: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl);
    const apiData: bookData[] = await response.json();
    console.log('API hämtat');
    return apiData;
}

let bookArray: bookData[] = await getBooksInfo();

export { bookArray }
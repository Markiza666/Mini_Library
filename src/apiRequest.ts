import {bookData} from './interfaces.js';

async function getBooksInfo(): Promise<bookData[]> {
    const baseUrl: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl);
    const apiData: bookData[] = await response.json();
    return apiData;
}


export {getBooksInfo};
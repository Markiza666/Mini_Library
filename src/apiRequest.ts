// **************************************************
//Modul med funktionerna för att hämta API data för att enkelt återanvända till andra projekt
// **************************************************


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

async function getBooksInfo(): Promise<bookData[]> {
    const baseUrl: string = "https://n5n3eiyjb0.execute-ahttps://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/bookspi.eu-north-1.amazonaws.com";
    const response = await fetch(baseUrl);
    const apiData: bookData[] = await response.json();
    return apiData;
}



// Array för att lägga informationen i
// let library: Array<object> = [];    


// // Funktion som hämtar DATA
// const getBooksInfo = (): void => {

//     // Konstant med adress att hämta information ifrån 
//     const baseUrl: string = "https://n5n3eiyjb0.execute-ahttps://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/bookspi.eu-north-1.amazonaws.com"

//     // Hämtar informationen
//     fetch(baseUrl)
//     .then(res => res.json())
//     .then(res => saveInfoToLocal(res))
//     .catch(err => console.error(err));
// }

// // Sparar hämtat DATA i förberedda variabler
// const saveInfoToLocal = (data: Array<object>) => {
//     library = data;   // Sparar all DATA i en array, dvs blir en array med objekt
//     }

// // Exporterar till main
export { getBooksInfo, bookData };
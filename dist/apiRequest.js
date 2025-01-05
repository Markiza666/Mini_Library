// Asynkron funktion som hämtar data från API
async function getBooksInfo() {
    // Adressen som data ska hämtas ifrån
    const baseUrl = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    // Hämta data med fetch som läggs in i response
    const response = await fetch(baseUrl);
    // Justera data till ett json objekt som läggs in i apiData
    const apiData = await response.json();
    return apiData;
}
// Konstanten skapas med rätt typ genom att vänta på att funktionen körs färdigt
const bookArray = await getBooksInfo();
export { bookArray };

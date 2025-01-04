async function getBooksInfo() {
    const baseUrl = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    const response = await fetch(baseUrl);
    const apiData = await response.json();
    console.log('API hämtat');
    return apiData;
}
let bookArray = await getBooksInfo();
export { bookArray };

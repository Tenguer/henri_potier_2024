export const getBooks = async () => {
    const response = await fetch('https://henri-potier.techx.fr/books');
    const books = await response.json();

    return books;
}
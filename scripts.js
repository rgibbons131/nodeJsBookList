//This is just to clear the area on the page to help demonstrate the code.
//   It works by grabbing the element holding the book list and replacing it with empty text
function clearBooks() {
    document.querySelector('#shelf').innerHTML = '';    
}

//An async function is used whenever you are calling a server so that the code has time to recieve a response before using the information
//    This function calls the server running in the app.js folder, which must be started first with npm start. It then replaces the space
//    in the HTML file with the list of books that I have recently read
async function displayBooks() {
    var books;
    const res = await fetch("http://localhost:8080");
    books = await res.text();
    document.querySelector('#shelf').innerHTML = books;    
}
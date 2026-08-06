
function Book(name,author,pages,id) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.id = crypto.randomUUID()
};
const library_books_array = [];

function addBookToLibrary(name,author,pages) {
    const book = new Book(name,author,pages);
    library_books_array.push(book);
    return book;
}

const dialog = document.querySelector("dialog.new-book-dialog");
const closebutton = document.querySelector(".new-book-dialog-close-button");
const addnewbook = document.querySelector(".new-book-dialog-add-button");
const submitbutton = document.querySelector(".new-book-dialog-submit-button");
const bookname = document.querySelector("#book-name");
const authorname = document.querySelector("#author-name")
const pages = document.querySelector("#book-pages")
const checkbox = document.querySelector("#book-status")


addnewbook.addEventListener("click",() => {
    dialog.showModal();
});

closebutton.addEventListener("click", () => {
    dialog.close();

    
});

submitbutton.addEventListener("click",() => {
    let title = bookname.value;
    let author = authorname.value;
    let page = pages.value;
    let check = checkbox.checked;
    
    console.log(`${title} , ${author} ,${page} ,${check}`)
    dialog.close();
    // console.log(bookinfo)

    
    const book = addBookToLibrary(title, author, page);

    
    
    const bookinfo = document.querySelector(".book-info");
    const para = document.createElement("p"); 
    const status = document.createElement("p")
    const bnt = document.createElement("button");
    const checkButton = document.createElement("button");
    para.innerHTML = `Title: ${title} <br> Author: ${author} <br> Pages: ${page} <br>`
    
    bnt.innerText = "Remove Book"
    checkButton.innerText = "Change Status"
    para.setAttribute("data-book-id",book.id)
    bookinfo.appendChild(para);

    
    function BookStatus() {
        if(check == true){
          status.innerHTML = `Book Status: Read <br>`
        }else {
            status.innerHTML = `Book Status: Not Read <br>`
        }
        para.appendChild(status)  
    }
    BookStatus();
    para.appendChild(bnt);
    para.appendChild(checkButton);


    checkButton.addEventListener("click", () => {
        if(check == true){
            status.innerHTML = `Book Status: Not Read <br>`
            check = false;
        }else {
            status.innerHTML = `Book Status: Read <br>`
            check = true;
        }
    })
    
    bnt.addEventListener("click",(e) => {
        e.preventDefault();
        removeBook(book.id);
        
    })
})


function removeBook(bookId) {
    const bookinfo = document.querySelector(".book-info");
    const inventoryRemoveButton = document.querySelector(`[data-book-id="${bookId}"]`);
    bookinfo.removeChild(inventoryRemoveButton);
    
    let bookIndex = -1;
    
    for (let i = 0; i < library_books_array.length; i++) {
        if (library_books_array[i].id === bookId) {
            bookIndex = i;
            break;
        }
    }
    
    if (bookIndex !== -1) {
        library_books_array.splice(bookIndex, 1);
    }
    
    
}






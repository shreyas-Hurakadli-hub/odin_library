
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

const book_name_error = document.querySelector(".book-name-error");
const author_name_error = document.querySelector(".author-name-error");
const book_pages_error = document.querySelector(".book-pages-error");

const form = document.querySelector("form");


addnewbook.addEventListener("click",() => {

    dialog.showModal();
    form.reset();
});

closebutton.addEventListener("click", () => {
    book_pages_error.textContent = ""
    book_name_error.textContent = ""
    author_name_error.textContent = ""
    dialog.close();

    
});


bookname.addEventListener("input",() => {
    if(bookname.validity.valid){
        book_name_error.textContent = ""
        book_name_error.className = "book-name-error";
    }else{
        showBookNameError();
    }
})
authorname.addEventListener("input",() => {
    if(authorname.validity.valid){
        author_name_error.textContent = ""
        author_name_error.className = "author-name-error";
    }else{
        showAuthorNameError();
    }
})
pages.addEventListener("input",() => {
    if(pages.validity.valid){
        book_pages_error.textContent = ""
        book_pages_error.className = "book-pages-error";
    }else{
        showBookPagesError();
    }
})


form.addEventListener("submit",(event) => {
    if(!bookname.validity.valid){
        showBookNameError();
        event.preventDefault();
    }
    if(!authorname.validity.valid){
        showAuthorNameError();
        event.preventDefault();
    }
    if(!pages.validity.valid){
        showBookPagesError();
        event.preventDefault();
    }else{
        event.preventDefault();
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
        
        
        checkButton.addEventListener("click", (e) => {
            e.preventDefault();
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
    }
})
function showBookNameError(){
    if(bookname.validity.valueMissing){
        book_name_error.textContent = "*Book name cannot be empty"
    }
    book_name_error.className = "active book-name-error"
}
function showAuthorNameError(){
    if(authorname.validity.valueMissing){
        author_name_error.textContent = "*Author name cannot be empty"
    }
    author_name_error.className = "active author-name-error"
}
function showBookPagesError(){
    if(pages.validity.valueMissing){
        book_pages_error.textContent = "*Book name cannot be empty"
    }
    book_pages_error.className = "active book-pages-error"
}

// submitbutton.addEventListener("submit",(event) => {
//     event.preventDefault();
// })

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

//form validity
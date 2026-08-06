
function Book(name,author,pages,id) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.id = crypto.randomUUID()
};

function addBookToLibrary(name,author,pages) {
    const book = new Book(name,author,pages);
    library_books_array.push(book);
}
const library_books_array = [];

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
    addBookToLibrary(bookname.value,authorname.value,pages.value);
    
    const bookinfo = document.querySelector(".book-info");
    const para = document.createElement("p"); 
    const bnt = document.createElement("button");
    para.innerHTML = `Title: ${title} <br> Author: ${author} <br> Pages: ${page}`
    bnt.className = "remove-button"
    bnt.innerText = "Remove Book"
    bookinfo.appendChild(para);
    bookinfo.appendChild(bnt);
    
    const removebutton = document.querySelector(".remove-button");
    removebutton.addEventListener("click",() => {
        
    })
})

// testing


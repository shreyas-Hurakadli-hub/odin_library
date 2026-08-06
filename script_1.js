const myLibrary =[];

function Book(title,author,id){
    this.title = title;
    this.author = author;
    this.id = id;
}
function addBookToLibrary(title,author){
    let newBook = new Book(title,author,crypto.randomUUID());
    myLibrary.push(newBook);
}
function displayBooks() {
    const container = document.querySelector("#library");
    const heading = document.querySelector("#head");

    heading.innerHTML = "";
    
    const card = document.createElement("tr");
    card.innerHTML = `
    <td>Title</td>
    <td>Author</td>
    <td>ID</td>
    `;
    heading.appendChild(card);
    
    
    // Clear previous display
    container.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("tr");

        card.innerHTML = `
            <td>${myLibrary[i].title}</td>
            <td>${myLibrary[i].author}</td>
            <td>${myLibrary[i].id}</td>
        `;

        container.appendChild(card);
    }
}

const display = document.querySelector('.display');
if(display){

    display.addEventListener("click",displayBooks);
}

const submit = document.querySelector("#BookForm");
if(submit){

    submit.addEventListener("submit",function (event) {
        event.preventDefault();
        let Inputtitle = document.querySelector("#title")
        console.log(Inputtitle);
        let Inputauthor = document.querySelector("#author");
        let title = Inputtitle.value;
        let author = Inputauthor.value;
        addBookToLibrary(title,author);
        displayBooks();
        Inputtitle.value="";
        Inputauthor.value="";
    })
}

const add = document.querySelector(".addnewbook");
add.addEventListener("click",() => {
    
})



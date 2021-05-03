let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    let bookInfo = `${title}, by ${author}, ${pages} pages, ${read}.`;
    return bookInfo;
  }
}

function addBookToLibrary(title, author, pages, read) {
  this.title = prompt('Enter the title of the book');
  this.author = prompt('Enter the author of the book');
  this.pages = prompt('How many pages is the book?');
  this.read = prompt(`Are you 'reading', have you 'read', or do you 'want to read' this book?`);
  let bookKey = this.title.toLowerCase().replace(/\s/g, '');
}


const theHobbit = new Book(
  'The Hobbit',
  'J.R.R. Tolkien',
  '295',
  true
);

theHobbit.info();
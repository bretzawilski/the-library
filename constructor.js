function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
  this.read = Boolean;
  this.info = () => {
    if (this.read) {
      var readStatus = 'read';
    } else {
      var readStatus = 'not read yet'
    }
    let bookInfo = `${title}, by ${author}, ${pages} pages, ${readStatus}.`;
    return bookInfo;
  }
}

const theHobbit = new Book(
  'The Hobbit',
  'J.R.R. Tolkien',
  '295',
  true
);

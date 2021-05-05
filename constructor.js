function Book(title, director, runtime, watched) {
  this.title = title;
  this.director = director;
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

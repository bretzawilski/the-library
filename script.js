let myLibrary = [];

function Movie(title, director, runtime, watched) {
  this.title = title;
  this.director = director;
  this.runtime = runtime;
  this.watched = watched;
  this.info = () => {
    if (watched) {
      var status = `I've watched this movie`;
    } else {
      var status = `I haven't watched this movie`;
    }
    let movieInfo= `${title}, by ${director}, ${runtime} minutes, and ${status}.`;
    return movieInfo;
  }
}

// function addMovieToLibrary(shortCode) {
//   myLibrary.push(shortCode);
// }

function addMovieToLibrary(title, director, runtime, watched) {
  let newMovie = new Movie(
    title,
    director,
    runtime,
    watched,
  );

  myLibrary.push(newMovie);
}

function getMovieInfo(pos) {
  console.log(myLibrary[pos].info());
}

function viewModal() {
  modal.style.display = 'block';
}

function modalClose() {
  modal.style.display = 'none';
}

const modal = document.getElementById('my-modal');

const modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click', viewModal);

const closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', modalClose);

const addMovieButton = document.getElementById('add-movie');
addMovieButton.addEventListener('click', addMovieToLibrary);

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
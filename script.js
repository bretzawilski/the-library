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

function displayMovies() {
  let main = document.getElementById('main');
  let card = document.createElement('div');
  card.classList = 'movie-card';
  let cardInfo = document.createElement('ul');
  
  myLibrary[i].title;
  cardInfo.innerHTML = "Movie Data";

  card.appendChild(cardInfo);
  main.appendChild(card);

}

function addMovieToLibrary() {
  let title = document.getElementById('title').value;
  let director = document.getElementById('director').value;
  let runtime = document.getElementById('runtime').value;
  let watched = document.getElementById('watched').value;

  let newMovie = new Movie(
    title,
    director,
    runtime,
    watched,
  );

  myLibrary.push(newMovie);
  clearSelections();
  modalClose();
}

function clearSelections() {
 document.getElementById('title').value = null;
 document.getElementById('director').value = null;
 document.getElementById('runtime').value = null;
 document.getElementById('watched').value = undefined;

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

const resetModalButton = document.getElementById('reset-modal');
resetModalButton.addEventListener('click', clearSelections);

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
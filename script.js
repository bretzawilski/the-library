// Movies live in this array
let myLibrary = [
  {
    'title': 'The Hobbit',
    'director': 'Peter Jackson',
    'runtime': 200,
    'watched': 'Watched',
  },
  {
    'title': 'Spiderman 2',
    'director': 'Sam Raimi',
    'runtime': 120,
    'watched': 'Watched',
  }
];

class Movie {
  constructor(title, director, runtime, watched){
    this.title = title;
    this.director = director;
    this.runtime = runtime;
    this.watched = watched;
  }
  info = () => {
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
  main.innerHTML = '';

  for (i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    card.id = i;
    card.classList = 'movie-card';
    let cardButtons = document.createElement('div');
    cardButtons.classList = 'card-buttons';
    let delButton = document.createElement('button');
    delButton.id = 'del-item-' + i ;
    delButton.textContent = 'Remove Movie';
    delButton.classList = 'del-button';

    let toggleMovie = document.createElement('button');
    toggleMovie.id = 'toggle-movie';
    toggleMovie.textContent = 'Toggle';

    let cardInfo = document.createElement('ul');
    let movieFile1 = document.createElement('li');
    let movieFile2 = document.createElement('li');
    let movieFile3 = document.createElement('li');
    let movieFile4 = document.createElement('li');  
    
    movieFile1.innerText = myLibrary[i].title;
    movieFile2.innerText = myLibrary[i].director;
    movieFile3.innerText = myLibrary[i].runtime + ' minutes';
    movieFile4.innerText = myLibrary[i].watched;
    movieFile4.appendChild(toggleMovie);
    cardButtons.appendChild(delButton);
    cardInfo.appendChild(movieFile1);
    cardInfo.appendChild(movieFile2);
    cardInfo.appendChild(movieFile3);
    cardInfo.appendChild(movieFile4);
    cardInfo.appendChild(cardButtons);
    card.appendChild(cardInfo); 
    main.append(card);
  }


}

function addMovieToLibrary() {
  let title = document.getElementById('title').value;
  let director = document.getElementById('director').value;
  let runtime = document.getElementById('runtime').value;
  let watched = document.getElementById('watched').value;

  if (watched === 'true') {
    watched = 'Watched';
  } else {
    watched = 'Unwatched';
  }

  let newMovie = new Movie(
    title,
    director,
    runtime,
    watched,
  );

  myLibrary.push(newMovie);
  clearSelections();
  modalClose();
  displayMovies();
}

const remove = (event) => {
  let pos = event.currentTarget.id.split('-')[2];
  myLibrary.splice(pos, 1);
  displayMovies();
  removeSetup();
  console.log('Bye Felicia');
}

function clearSelections() {
 document.getElementById('title').value = null;
 document.getElementById('director').value = null;
 document.getElementById('runtime').value = null;
 document.getElementById('watched').checked = false;

}

function getMovieInfo(pos) {
  console.log(myLibrary[pos].info());
}

function viewModal() {
  modal.style.display = 'flex';
}

function modalClose() {
  modal.style.display = 'none';
}

function removeSetup() {
  for (let i = 0; i < removeMovieButton.length; i++) {
    removeMovieButton[i].addEventListener('click', remove);
  }
}

displayMovies();

const modal = document.getElementById('my-modal');

const modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click', viewModal);

const closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', modalClose);

const addMovieButton = document.getElementById('add-movie');
addMovieButton.addEventListener('click', addMovieToLibrary);

const resetModalButton = document.getElementById('reset-modal');
resetModalButton.addEventListener('click', clearSelections);

const removeMovieButton = document.querySelectorAll('.del-button');
removeSetup();


window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
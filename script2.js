// Movies live in this array
const myLibrary = [
  {
    title: "The Hobbit",
    director: "Peter Jackson",
    year: 2019,
    watched: "Watched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
];

class Movie {
  constructor(title, director, year, watched) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.watched = watched;
  }
}

function addMovieToLibrary() {
  let title = document.getElementById("title").value;
  let director = document.getElementById("director").value;
  let year = document.getElementById("year").value;
  let watched = document.getElementById("watched").value;

  let newMovie = new Movie(title, director, year, watched);

  myLibrary.push(newMovie);
  // clearSelections();
  hideModal();
  displayMovies();
}

// let [ title, director, year, watched ] = myLibrary[0];

const displayMovies = () => {
  main.innerHTML = "";
  for (i = 0; i < myLibrary.length; i++) {
    let title = myLibrary[i].title;
    let director = myLibrary[i].director;
    let year = myLibrary[i].year;
    let watched = myLibrary[i].watched;

    const movieCard = document.createElement("div");
    movieCard.classList = "movie-card";
    const displayUl = document.createElement("ul");

    const addTitle = document.createElement("li");
    addTitle.innerText = title;

    const addDirector = document.createElement("li");
    addDirector.innerText = director;

    const addYear = document.createElement("li");
    addYear.innerText = year;

    const addWatched = document.createElement("li");
    addWatched.innerText = watched;

    displayUl.appendChild(addTitle);
    displayUl.appendChild(addDirector);
    displayUl.appendChild(addYear);
    displayUl.appendChild(addWatched);

    movieCard.appendChild(displayUl);

    main.appendChild(movieCard);
  }
};

// const accessModal = () => {
//   const modal = document.getElementById("my-modal");
//   const viewModal = () => (modal.style.display = "grid");
//   const hideModal = () => (modal.style.display = "none");

//   return {
//     modal,
//     viewModal,
//     hideModal,
//   };
// };

// function viewModal() {
//   modal.style.display = "grid";
// }

// function hideModal() {
//   modal.style.display = "none";
// }

// Buttons and eventListeners
const initialize = () => {
  const modal = document.getElementById("my-modal");
  const viewModal = () => (modal.style.display = "grid");
  const hideModal = () => (modal.style.display = "none");
  const main = document.getElementById("main");

  const addNewMovieButton = document.getElementById("add-new-movie");
  addNewMovieButton.addEventListener("click", viewModal);

  const addMovieToLibraryButton = document.getElementById("add-movie");
  addMovieToLibraryButton.addEventListener("click", addMovieToLibrary);

  const cancelButton = document.getElementById("cancel-button");
  cancelButton.addEventListener("click", hideModal);

  return {
    modal,
    viewModal,
    hideModal,
    main,
    addNewMovieButton,
    addMovieToLibraryButton,
    cancelButton,
  };
};

// Initial Program Run
initialize();
displayMovies();

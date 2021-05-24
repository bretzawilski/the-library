// import "firebase";

// (function () {
//   const config = {
//     apiKey: "AIzaSyB2yPj9v-6gxX8ecAv2nBTOFjeOfbXARck",
//     authDomain: "movie-library-cdbba.firebaseapp.com",
//     databaseURL: "https://movie-library-cdbba-default-rtdb.firebaseio.com",
//     projectId: "movie-library-cdbba",
//     storageBucket: "movie-library-cdbba.appspot.com",
//     messagingSenderId: "551772194474",
//     appId: "1:551772194474:web:bde28f82bee7a7a99772d3",
//     measurementId: "G-KCSL2860PK",
//   };
//   firebase.initializeApp(config);

//   constpreObject = document.getElementById("object");

//   const dbRefObject = firebase.database().ref().child("object");

//   dbRefObject.on("value", (snap) => console.log(snap.val()));
// })();

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
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
  },
  {
    title: "Spiderman 2",
    director: "Sam Raimi",
    year: 2002,
    watched: "Unwatched",
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

const addMovieToLibrary = () => {
  let title = document.getElementById("title").value;
  let director = document.getElementById("director").value;
  let year = document.getElementById("year").value;
  let watched = document.getElementById("watched").value;

  let newMovie = new Movie(title, director, year, watched);

  myLibrary.push(newMovie);
  // clearSelections();
  active.hideModal();
  displayMovies();
};

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
    movieCard.id = "div-" + i;

    const displayUl = document.createElement("ul");

    const addTitle = document.createElement("li");
    addTitle.innerText = title;

    const addDirector = document.createElement("li");
    addDirector.innerText = director;

    const addYear = document.createElement("li");
    addYear.innerText = year;

    const addWatched = document.createElement("li");
    addWatched.innerText = watched;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove Movie";
    removeButton.id = "remove-" + i;
    removeButton.addEventListener("click", removeMovieFromLibrary);

    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Watched";
    toggleButton.id = "toggle-" + i;
    toggleButton.addEventListener("click", toggleMovie);

    displayUl.appendChild(addTitle);
    displayUl.appendChild(addDirector);
    displayUl.appendChild(addYear);
    displayUl.appendChild(addWatched);
    displayUl.appendChild(toggleButton);
    displayUl.appendChild(removeButton);

    movieCard.appendChild(displayUl);

    main.appendChild(movieCard);
  }
};

const removeMovieFromLibrary = (event) => {
  let pos = event.currentTarget.id.split("-")[1];
  myLibrary.splice(pos, 1);
  displayMovies();
};

const toggleMovie = (event) => {
  let pos = event.currentTarget.id.split("-")[1];
  if (myLibrary[pos].watched === "Watched") {
    myLibrary[pos].watched = "Unwatched";
  } else {
    myLibrary[pos].watched = "Watched";
  }
  displayMovies();
};

// Buttons and eventListeners
const initialize = () => {
  const modal = document.getElementById("my-modal");
  const viewModal = () => (modal.style.display = "grid");
  const hideModal = () => (modal.style.display = "none");

  const addNewMovieButton = document.getElementById("add-new-movie");
  addNewMovieButton.addEventListener("click", viewModal);

  const cancelButton = document.getElementById("cancel-button");
  cancelButton.addEventListener("click", hideModal);

  const main = document.getElementById("main");

  const addMovieToLibraryButton = document.getElementById("add-movie");
  addMovieToLibraryButton.addEventListener("click", addMovieToLibrary);

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
const active = initialize();
displayMovies();

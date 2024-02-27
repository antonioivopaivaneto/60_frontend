const API_URL =
  "https://api.themoviedb.org/3/discover/movie?language=pt-BR&sort_by=popularity.desc&api_key=42aac23a36f2adeac472fe824f17fda0&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=42aac23a36f2adeac472fe824f17fda0&query=";

const main = document.getElementById("main");
const search = document.getElementById("search");
const form = document.getElementById("form");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="" class="movie-info">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>`;

        main.appendChild(movieEl);
  });
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    } else if(vote >=5 ){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    console.log(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

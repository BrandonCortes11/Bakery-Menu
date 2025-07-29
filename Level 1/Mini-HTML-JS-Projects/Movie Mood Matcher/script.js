const movieRecs = {
    happy: [
        "Failure To Launch",
        "How to Lose A Guy In 10 Days",
        "The Wedding Planner",
    ],
    sad: [
        "The Notebook",
        "Sleepless In Seattle",
        "Marley & Me",
    ],
    excited: [
        "Top Gun",
        "Jurassic Park",
        "The Matrix",
    ],
};

const happyBtn = document.getElementById("happy-btn");
const sadBtn = document.getElementById("sad-btn");
const excitedBtn = document.getElementById("excited-btn");
const movieList = document.getElementById("movie-list");

function showMovies(mood) {
    movieList.innerHTML = "";

    movieRecs[mood].forEach(function (movies) {
        const movieRec = document.createElement("li");
        movieRec.textContent = movies;
        movieList.appendChild(movieRec);
    });
};

happyBtn.addEventListener("click", function () {
    showMovies("happy");
});

sadBtn.addEventListener("click", function () {
    showMovies("sad");
});

excitedBtn.addEventListener("click", function () {
    showMovies("excited");
});
const darkLightToggle = document.querySelector("#toggle");
const root = document.documentElement;
let dark;

function LDToggle() {
  //toggles the page to put it into dark mode

  //once clicked on, set dark to false and change the color of the scene
  if (dark == false) {
    dark = true;
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    darkLightToggle.value = "🌑";

    root.style.setProperty("--circle-color", "blue");
  } else {
    dark = false;
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    darkLightToggle.value = "☀️";

    root.style.setProperty("--circle-color", "#ffb100");
  }
}

// read from local storage
function readStorage() {
  // if there is data inside of the local storage then take that data and read it
  if (JSON.parse(localStorage.getItem("dark")) !== null) {
    dark = JSON.parse(localStorage.getItem("dark"));
  }
  return dark;
}

function writeStorage() {
  // take the value from dark and push it to storage so that it can be read on other pages
  localStorage.setItem("dark", JSON.stringify(dark));
}

darkLightToggle.addEventListener("click", function (event) {
  //toggle the light/dark
  LDToggle();
  //write the result into storage
  writeStorage();
});

function init() {
  //read storage on startup
  readStorage();

  // change the color if the page data has been set to dark mode
  if (dark == true) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    darkLightToggle.value = "🌑";

    root.style.setProperty("--circle-color", "blue");
  }
}

//run init on startup
init();
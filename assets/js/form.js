const formEl = document.getElementsByTagName("form");
const error = document.querySelector("#error");
const usernameId = document.getElementById("username");
const titleId = document.getElementById("title");
const bodyId = document.getElementById("content");
const submitId = document.getElementById("submit");
const blogRedirect = document.getElementById("back");

// set the url to blank. Define the storage
let redirectURL = "";
let infoStorage = [];

// initilize at page startup. Keeps infostorage from being overwritten to be blank
function initilize() {
  if (JSON.parse(localStorage.getItem("blogs")) !== null) {
    console.log("Information inside");
    infoStorage = JSON.parse(localStorage.getItem("blogs"));
  }

  return infoStorage;
}

function storeLocalStorage(object) {
  localStorage.setItem("blogs", JSON.stringify(object));
}

function formSubmission() {
  let tempPageStorage = {
    username: usernameId.value,
    title: titleId.value,
    content: bodyId.value,
  };
  infoStorage.push(tempPageStorage);

  // sends the collected information to local storage
  storeLocalStorage(infoStorage);
}

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

blogRedirect.addEventListener("click", function () {
  // redirect to the blog page if button pressed
  redirectPage("./blog.html");
});

submitId.addEventListener("click", function (event) {
  event.preventDefault();

  // check is there is information inside of the boxes on click of the submission button
  if (
    usernameId.value == null ||
    titleId.value == null ||
    bodyId.value == null
  ) {
    error.textContent = "Please complete the form.";
    error.append;

    throw new Error("Username, title, or body is missing!)");

    // if theres info inside of all the boxes send that info to storage and switch pages
  } else {
    //push info to local storage
    formSubmission();

    //redirect page
    redirectPage("./blog.html");
  }
});

//initialize page. Prepare everything at page startup
initilize();
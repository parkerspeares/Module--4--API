const mainEl = document.querySelector("main");
const pageBody = document.getElementById("body");
const backButton = document.getElementById("back");
const clearButton = document.getElementById("clear");

let redirectURL = "";

// sends user back to first page to add another blog
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// builds the page by appending tags to the html
function pageBuild(storage) {
  if (storage == null) {
    noBlog();
  } else {
    for (let i = 0; i < storage.length; i++) {
      const article = document.createElement("article");
      pageBody.appendChild(article);

      const titleEl = document.createElement("h2");
      titleEl.textContent = storage[i].title;
      article.appendChild(titleEl);

      const bodyEl = document.createElement("blockquote");
      bodyEl.textContent = storage[i].content;
      article.appendChild(bodyEl);

      const usernameEl = document.createElement("p");
      usernameEl.textContent = `Posted by : ${storage[i].username}`;
      article.appendChild(usernameEl);

      article;
      pageBody.appendChild(article);
    }
  }
}

// function for displaying a message when there are no blogs in storage
function noBlog() {
  const article = document.createElement("article");
  pageBody.appendChild(article);

  const noBlog = document.createElement("h4");
  noBlog.textContent = "No Blog posts yet...";
  article.appendChild(noBlog);
}

// Reads the data from local storage and returns it
function readLocalStorage() {
  if (JSON.parse(localStorage.getItem("blogs")) !== null) {
    const infoStorage = JSON.parse(localStorage.getItem("blogs"));
    console.log(infoStorage);

    return infoStorage;
  } else {
    return null;
  }
}

// runs createPage at page startup and adds blogs to page
function createPage() {
  const infoStorage = readLocalStorage();

  pageBuild(infoStorage);
}

function clearLocalStorage() {
  localStorage.clear();
}

backButton.addEventListener("click", function (event) {
  // redirect to first page if button clicked
  redirectPage("./index.html");
});

//clear local storage when clicked on
clearButton.addEventListener("click", () => {
  clearLocalStorage();
});

createPage();
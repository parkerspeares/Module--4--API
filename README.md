Challenge 04: Blog Website
Introduction
Welcome to my Challenge 04 Blog Website, created as part of the 4th-week challenge for a coding bootcamp. This project features a simple blog website where users can post blogs directly on the page.

Installation
No installation is necessary! Simply click this link to visit the Employee Tracker Website and view the deployed application.

Usage
Using the site is straightforward:

Open the page to access the starting screen.
Fill in the input fields for your Username, Title, and Content.
Click the Submit button to post your blog. You'll be redirected to the blog page, where all posts are displayed.
Each post features a Title (at the top), Content (in the middle), and the Username (at the bottom) of the person who posted it.
Use the Add Post button at the top of the blog page to return to the starting screen and create another blog post.
Persistent Storage
All posts are stored in localStorage, allowing them to remain on the site even if you leave and return later.

Dark Mode
A sun icon at the top of the blog page toggles Dark Mode, switching the page's background to black and text/borders to white. Your preference for light or dark mode is saved in localStorage and applied automatically when the page loads.

Code Snippet
Below is a key snippet from the blog.js script. This function dynamically generates blog posts from data stored in localStorage. It creates HTML elements (<article>, <h2>, <blockquote>, and <p>) and appends them to the page.

javascript
Copy code
function pageBuild(storage) {
    for (let i = 0; i < storage.length; i++) {
        const article = document.createElement('article');
        pageBody.appendChild(article);

        const titleEl = document.createElement('h2');
        titleEl.textContent = storage[i].title;
        article.appendChild(titleEl);

        const bodyEl = document.createElement('blockquote');
        bodyEl.textContent = storage[i].body;
        article.appendChild(bodyEl);

        const usernameEl = document.createElement('p');
        usernameEl.textContent = `Posted by: ${storage[i].username}`;
        article.appendChild(usernameEl);

        pageBody.appendChild(article);
    }
}
Credits
Parker Speares

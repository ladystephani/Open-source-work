const repoContainerEl = document.querySelector("#single-repo");// (big element)
const userSearchTerm = document.querySelector("#username-search-term");
const displayRepos = function(repos, user) {
    // console.log(repos)
    // console.log(user)

    // clear old content every time search is performed
    repoContainerEl.textContent = "";
    userSearchTerm.textContent = user;

    for (let i = 0; i < repos.length; i++) {
        // (middle element) create a container for each repo
        const repoEl = document.createElement("div");// each repo
        repoEl.classList = "list-item flex-row justify-space-between align-center"

        // Format the line of repo info
        const repoName = repos[i].owner.login + "/" + repos[i].name;

        // (Smaller elemnt for repo) Create span element inside repo container
        const titleEl = document.createElement("span");
        titleEl.textContent = repoName;

        // Add to container
        repoEl.appendChild(titleEl);// (middle element adds small element)


        // (smaller element for Number of Issues) create a status element
        const statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";

        // check for number of issues (if no, display checkmark)
        // the classes fas fa-times fa-check-square might be in font CDN (cannot be found in css)
        // the status-icon CSS property gives the white square; the icon-danger icon-success CSS properties determine the color (red or blue)
        if (repos[i].open_issues_count > 0) {
            statusEl.innerHTML = "<i class='status-icon icon-danger fas fa-times'></i>" + repos[i].open_issues_count + " issue(s)";
        } else {
            statusEl.innerHTML = "<i class='status-icon icon-success fas fa-check-square'></i>"
        }

        // Add to container
        repoEl.appendChild(statusEl);


        // finally, append container to the DOM
        repoContainerEl.appendChild(repoEl);// (big element adds middle element)
    }
}

const getUserRepos = function(user) {
    // Format the URL
    const apiUrl = "https://api.github.com/users/" + user + "/repos";

    // Request response from API server
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
        })
    })
};
// getUserRepos();// moved to handler function on form submission

const userFormEl = document.querySelector("#user-form");// #1
const nameInputEl = document.querySelector("#username");// #2

var formSubmitHandler = function(event) {
    event.preventDefault();
    // store value from inputEl
    const username = nameInputEl.value.trim();// #2 record value from the input box

    if (username) {
        getUserRepos(username);// pass in localStorage value
        nameInputEl.value = "";// clear
    } else {
        alert("Please enter a username");
    }
}
userFormEl.addEventListener("submit", formSubmitHandler);// #1 event listener on the form

const getUserRepos = function(user) {
    // Format the URL
    const apiUrl = "https://api.github.com/users/" + user + "/repos";

    // Request response from API server
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
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
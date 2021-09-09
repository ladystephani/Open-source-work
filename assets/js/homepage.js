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
getUserRepos("ladystephani");// pass in localStorage value
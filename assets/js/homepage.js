const getUserRepos = function () {
    fetch("https://api.github.com/users/ladystephani/repos").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
    console.log("outside");
};
getUserRepos();
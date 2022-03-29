// Add your code here
function submitData(userName, userEmail) {
    const userObj = {
        name: `${userName}`,
        email: `${userEmail}`
    }
    const userPost = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(userObj)
    }
    return fetch("http://localhost:3000/users", userPost)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
       const p = document.createElement("p");
        document.body.append(p)
        p.textContent = object.id
        return object.id
    })
    .catch(function (error) {
        const p = document.createElement("p");
        document.body.append(p)
        p.textContent = error
        return error
    })
}
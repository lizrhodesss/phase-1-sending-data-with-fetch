function submitData(name, email) {
    fetch ("http://localhost:3000/users", {
     method: "POST",
     headers: {
        "Content-Type": "application/json",
        "Accept": "applocation/json",
    },
    body: JSON.stringify({
        name: name,
        email: email        
    })
})
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => console.log(error.message))
}
//submitData('Todd', 'todd@gmail.com')
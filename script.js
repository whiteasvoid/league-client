function check() {
    form = document.getElementById("login")
    let login = form.children[0].value
    let password = form.children[1].value
    let button = form.children[3].children[0]
    
    if(login.length > 0 && password.length > 0) {
        button.classList.add("btn-active")
        button.disabled = false
    } else {
        button.classList.remove("btn-active")
        button.disabled = true
    }
}
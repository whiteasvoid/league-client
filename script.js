//Button color change when inserted credentials
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

//Disable right click on client
document.addEventListener('contextmenu', event => event.preventDefault());

//Check if page is totally loaded
if(document.readyState === 'ready' || document.readyState === 'complete') {
    console.log("Not totally loaded!");
    console.log("Create a new issue on https://github.com/whiteasvoid/league-client/issues please.")
  } else {
    document.onreadystatechange = function () {
      if (document.readyState == 'complete') {
        console.log("Loaded successfully!");
      }
    }
  }
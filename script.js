//Variables
var repository = "https://github.com/whiteasvoid/league-client/";
var version = "v1.0.3";
var version_location = document.getElementById("version");

//Set version
version_location.textContent = version;

//Console details
console.log("%c whiteasvoid", "color:#3f55d1;font-size:20px;font-weight:bold;");
console.group("%c Client -|- Repository", "color:cyan;font-size:18px")
console.log("%c This client is being created with the purpose of using it as an application to bypass League-API", "color:#6a39c4;font-size:14px")
console.log("%c Current Client version: " + version, "color:#6a39c4")
console.log("\n")
console.log("%c You can find all the updates and changes for this client in my GitHub: \n" + repository, "color:#6a39c4;font-size:14px")
console.groupEnd("Client -|- Repository")

//Button color change when inserted credentials
function check() {

  form = document.getElementById("login")
  let login = form.children[0].value
  let password = form.children[1].value
  let button = form.children[3].children[0]

  if (login.length > 0 && password.length > 0) {
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
if (document.readyState === 'ready' || document.readyState === 'complete') {
  console.group("%c Client Status", "color:##ff3b5f; font-style:bold; font-size:18px");
  console.alert("Not totally loaded!");
  console.alert("Create a new issue on https://github.com/whiteasvoid/league-client/issues please.");
  console.groupEnd("Client Status");
} else {
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      console.group("%c Client Status", "color:#3bffaa; font-style:bold; font-size:18px");
      console.log("%c Loaded successfully!", "color:green; font-size:14px");
      console.groupEnd("Client Status");
    }
  }
}

//Login redirect button
function loginredirectfunc() {

  window.open('#', '_self');
  return false;

}

//Open github when click on riotgames logo
function OpenGitHub() {

  window.open(repository);

}
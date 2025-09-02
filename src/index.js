import "./styles.css";

const nav = document.getElementsByTagName("nav")[0];
nav.classList.add("nav");
let butt1 = document.getElementById("Home");
let butt2 = document.getElementById("About");
let butt3 = document.getElementById("Menu");
butt1.addEventListener("click",() => {
    displayHome();
})
butt2.addEventListener("click",() => {
    displayAbout();
})
butt3.addEventListener("click",() => {
    displayMenu();
})
const content = document.getElementById("content")
function displayHome(){
    content.innerHTML ="";

    let header = document.createElement("h2");
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("box")
    header.textContent = "Treetop Cafe";
    headerDiv.appendChild(header);
    content.appendChild(headerDiv);

    let welcome = document.createElement("p");
    let welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("box")
    welcome.textContent = "Welcome to The Treetop Cafe, where we serve the best Coffee found in Atlanta.";
    welcomeDiv.appendChild(welcome);
    content.appendChild(welcomeDiv);

    let hours = document.createElement("p");
    let hoursDiv = document.createElement("div");
    hoursDiv.classList.add("box")
    hours.textContent = "Our hours consist of: ";
    hoursDiv.appendChild(hours);
    content.appendChild(hoursDiv);

}
function displayMenu(){
    content.innerHTML ="";
    let a = document.createElement("p")
    a.textContent = "Menu";
    content.appendChild(a);
}
function displayAbout(){
    content.innerHTML ="";
    let a = document.createElement("p")
    a.textContent = "About";
    content.appendChild(a);

}
displayHome();
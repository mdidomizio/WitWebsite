var darkButton = document.getElementById("darkButton")
var upButton = document.getElementById("hamburger")
var modalButton = document.getElementById("buttonStarter")
var modalButton1 = document.getElementById("closeButton")
var button = document.getElementById("buttonUp")


 // this function triggers the dark-mode
function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");  
}
darkButton.addEventListener("click", darkMode)


// this function triggers the menu on the mobile version
function menuFun(){
    var htmlBody1 = document.body;
    htmlBody1.classList.toggle("visibility")
}
upButton.addEventListener("click", menuFun)


// this function triggers the modal buttons
function showModal(){
    var htmlBody2 = document.body;
    htmlBody2.classList.toggle("visibilityModal")
}
modalButton.addEventListener("click", showModal)
modalButton1.addEventListener("click", showModal)


// this function triggers the "go to the top" button
function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({top:0, behavior:'smooth'})
} 
button.addEventListener("click", toTop)
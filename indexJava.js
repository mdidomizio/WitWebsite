var darkButton = document.getElementById("darkButton")
 
function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");  
}
darkButton.addEventListener("click", darkMode)



var upButton = document.getElementById("hamburger")

function menuFun(){
    var htmlBody1 = document.body;
    htmlBody1.classList.toggle("visibility")
}
upButton.addEventListener("click", menuFun)



var modalButton = document.getElementById("buttonStarter")
var modalButton1 = document.getElementById("closeButton")

function showModal(){
    var htmlBody2 = document.body;
    htmlBody2.classList.toggle("visibility")
}
modalButton.addEventListener("click", showModal)
modalButton1.addEventListener("click", showModal)


var button = document.getElementById("buttonUp")

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({top:0, behavior:'smooth'})
} 
button.addEventListener("click", toTop)
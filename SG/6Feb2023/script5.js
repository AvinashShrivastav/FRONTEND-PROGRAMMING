
clickMe = document.getElementById("btn");
console.log(clickMe)

function doDemo () {
    console.log("inside")
    var button = this;
    var square = document.getElementById("square");
    square.style.backgroundColor = "fa4";
    button.disabled = true;
    setTimeout(clearDemo, 2000, button);
}
function clearDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "transparent";
    button.disabled = false;

}

clickMe.onclick = doDemo();
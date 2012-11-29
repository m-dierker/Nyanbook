window.setInterval(changeColors, 1000);

var colors = ["#880011", "#dd0066", "#bbee00", "#55eeff", "#ff6600"];

var logo = document.getElementById("pageLogo").getElementsByTagName("a")[0];

console.log(logo);
console.log(chrome.extension.getURL("nyanbook.png"));

logo.style.backgroundImage = 'url("' + chrome.extension.getURL("nyanbook.png") + '")';
logo.style.backgroundPosition = "0px 0px";
logo.style.marginLeft = "7px";


function changeColors() {
    changeBackgroundColorForClass("shareRedesignContainer");
    changeBackgroundColorForClass("shareRedesignText");
    changeBackgroundColorForClass("UFIRow");
    changeBackgroundColorForID("blueBar");
}

/**
 * Changes the background color based on ID
 */
function changeBackgroundColorForID(idName) {
    var elements = document.getElementById(idName);
    processElement(elements);
}

/**
 * Changes the background color for all elements of a class
 */
function changeBackgroundColorForClass(className) {
    var elements = document.getElementsByClassName(className);
    changeBG(elements);
}

/**
 * Processes a list of elements
 */
function changeBG(elements) {
    for(var a = 0; a < elements.length; a++) {
        processElement(elements[a]);
    }
}

/**
 * Processes an element and changes the color
 */
function processElement(element) {
    if(element.colorChanged) {
        return;
    }

    element.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
    element.colorChanged = true;
}

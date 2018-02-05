var pElementsAll = document.querySelectorAll("p");
document.getElementById("p_count").innerHTML = pElementsAll.length.toString();

var boldLarge = document.querySelectorAll(".large");

boldLarge.forEach(function (value) { value.style.fontSize = "large" });

var ulItalics = document.querySelectorAll("ul>li>i");

ulItalics.forEach(function (value) { value.style.color = "#2759aa" });

var copier = document.querySelectorAll(".copyme");
var reverseStr = "";

for (var x = copier.length - 1 ; x >= 0 ; x--){
    reverseStr += copier[x].innerHTML + " ";
}

var node = document.createTextNode(reverseStr);

var divEle = document.getElementById("copyhere");
var newPara = document.createElement("p");
newPara.appendChild(node);
divEle.appendChild(newPara);

var listElements = document.querySelectorAll("ul>li");
var lastElement = listElements[listElements.length - 1];

lastElement.addEventListener("mouseover", changeColor);
lastElement.addEventListener("mouseout", changeBack);

function changeColor(){
    lastElement.style.color = "#f20909";
}

function changeBack() {
    lastElement.style.color = "#000000";
}

//console.log(reverseCopyStr);

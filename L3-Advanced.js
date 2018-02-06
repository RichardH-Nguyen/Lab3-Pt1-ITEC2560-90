document.getElementById("myBtn").addEventListener("click", changeToRandomColor);
document.getElementById("btnSave").addEventListener("click", saveTable);
var colorString = "";

function saveTable(){
    var node1 = document.createTextNode("");
    var node2 = document.createTextNode(colorString);
    var table = document.getElementById("colorTable");
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");

    col1.style.backgroundColor = colorString;
    col1.appendChild(node1);
    row.appendChild(col1);

    col2.appendChild(node2);
    row.appendChild(col2);
    table.appendChild(row);
}

function changeToRandomColor() {
    document.getElementById("colorDisplay").style.backgroundColor = randomColor();
}
function randomColor() {
    var r = Math.floor(Math.random() * 255);   //Pick a random number between 0 and 1
    var g = Math.floor(Math.random() * 255);   //Multiply by 255 to get a number in the correct range
    var b = Math.floor(Math.random() * 255);   //Then convert it to an int

    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    colorString = "#" + hexR + hexG + hexB;
    console.log(colorString);   //Avoid for production apps, OK for developing.
    // You can see the output from this in the developer JavaScript console.
    return colorString
}

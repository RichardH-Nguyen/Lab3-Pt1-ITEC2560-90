var pixelNum = document.getElementById("pixelCount");
var widthWindow = window.innerWidth;
var heightWindow = window.innerHeight;
var totalPixels = widthWindow * heightWindow;
pixelNum.innerHTML =" " + totalPixels;

window.addEventListener("resize", windowResize);

function windowResize() {
    pixelNum = document.getElementById("pixelCount");
    widthWindow = window.innerWidth;
    heightWindow = window.innerHeight;
    totalPixels = widthWindow * heightWindow;
    pixelNum.innerHTML = " " + totalPixels;
}

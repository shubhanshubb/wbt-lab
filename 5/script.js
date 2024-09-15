var click = document.getElementById("onclick");
click.onclick = function () {
fun1(click, "clicked", "red");
};
var mouseover = document.getElementById("onmouseover");
mouseover.onmouseover = function () {
fun1(mouseover, "mouseover", "green");
};
mouseover.onmouseout = function () {
fun1(mouseover, "mouse out", "blue");
};
function fun1(elem, str, color) {
elem.innerHTML = str;
elem.style.backgroundColor = color;
}
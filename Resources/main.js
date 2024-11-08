let elements = document.getElementsByClassName("change");


for (let i = 0; i<elements.length; i++) {
    elements[i].onclick = function () {
        elements[i].style.backgroundColor = "aqua";
    };
}

function start() {
}
function crearInput() {
    /**input */
    var newInput = document.createElement("INPUT");
    newInput.setAttribute("name", 'inputs');
    newInput.className = "form-control";
    newInput.addEventListener("keypress", checkInput, false);
    var inputs = document.getElementById("inputs");
    inputs.appendChild(newInput);
}
function checkInput(event) {
    var inputs = document.getElementById("inputs");
    var input = event.target;
    console.log(input.value);
    if (input.value === 'colorme') {
        var color = prompt("Color", "");
        if (color != null) {
            input.setAttribute("style", "background-color:" + color);
        }
    }
    else if (input.value === 'colornext') {
        var color = prompt("Color", "");
        if (color != null) {
            input.nextElementSibling.setAttribute("style", "background-color:" + color);
        }
    }
    else if (input.value === 'delme') {
        input.remove();
    }
    else if (input.value === 'delprev') {
        input.previousElementSibling.remove();
    }
    else if (input.value === 'insertprev') {
        inputs.insertBefore(input, input.previousElementSibling);
    }
}

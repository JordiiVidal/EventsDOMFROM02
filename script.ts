function start() {
  let inputName = <HTMLInputElement>document.forms["form-user"]["name"];
  inputName.addEventListener("keypress",checkName,false);
  let inputData = <HTMLInputElement>document.forms["form-user"]["data"];
  inputData.addEventListener("keypress",checkData,false);
}

function checkName(event){
  let inputName =<HTMLInputElement>event.target;
  checkNameForm(inputName);
}

function checkNameForm(inputName){
  if(inputName.value.match(/^[A-z]{3,15}$/) && inputName.value != ''){
      trueElement('true-name','false-name');
      return true;
  }else{
      falseElement('true-name','false-name');
      return false;
  }
}

function checkData(event){
  let inputData =<HTMLInputElement>event.target;
  checkDataForm(inputData);
}

function checkDataForm(inputData){
  var fecha = new Date(inputData.value);
  if(isNaN(fecha.getTime())){
      falseElement('true-data','false-data');
      return false;
  }else{
      trueElement('true-data','false-data');
      return true;
  }
}

function trueElement(trueElement:string,falseElement:string){
  let correct = <HTMLElement>document.getElementById(trueElement);
  let incorrect = <HTMLElement>document.getElementById(falseElement);
  correct.hidden = false;
  incorrect.hidden = true;
}

function falseElement(trueElement:string,falseElement:string){
  let correct = <HTMLElement>document.getElementById(trueElement);
  let incorrect = <HTMLElement>document.getElementById(falseElement);
  correct.hidden = true;
  incorrect.hidden = false;
}

function validateForm(){
  let inputName = <HTMLInputElement>document.forms["form-user"]["name"];
  let inputData = <HTMLInputElement>document.forms["form-user"]["data"];
  let checkbox = <HTMLInputElement>document.forms["form-user"]["aliments"];

  var valid = true;

  if(!checkNameForm(inputName)){
      valid = false;
  } 
  if(!checkDataForm(inputData)){
      valid = false;
  }
  if(!checkBoxForm(checkbox)){
    valid = false;
  }

  return valid;
  
}

function checkBoxForm(checbox){
  if(checbox != undefined){
    if(checbox[0]){
      var selected1 = false;
      checbox.forEach(element => {
        var checkbox1 = <HTMLInputElement> document.getElementById(element.value);
        if(checkbox1.checked){
          selected1 = true;
        }
      });
      return selected1;
    }
    if(checbox.value){
      var element = <HTMLInputElement> document.getElementById(checbox.value);
      return element.checked;
    }
  }else{
    return false;
  }

}

function eat(){

  var eat = prompt("Nom nou menjar", "");
  if (eat != null) {

    let newAliment = document.createElement("div");
    newAliment.className = "col-12 mt-2 mb-2 pt-2 pb-2 bg-light";

    /**eliminar */
    let btnEliminar = document.createElement("span");
    btnEliminar.setAttribute("style","font-size: 20px;padding: 20px;");
    let iEliminar = document.createElement("i");
    iEliminar.className = "far fa-trash-alt";
    btnEliminar.appendChild(iEliminar);
    btnEliminar.addEventListener("click",eliminarEat,false);

    /**up */
    let btnUp = document.createElement("span");
    btnUp.setAttribute("style","font-size: 20px;padding: 20px;");
    let iUp = document.createElement("i");
    iUp.className = "far fa-hand-point-up";
    btnUp.appendChild(iUp);
    btnUp.addEventListener("click",upEat,false);

    /**down */
    let btnDown = document.createElement("span");
    btnDown.setAttribute("style","font-size: 20px;padding: 20px;");
    let iDown = document.createElement("i");
    iDown.className = "far fa-hand-point-down";
    btnDown.appendChild(iDown);
    btnDown.addEventListener("click",downEat,false);

    /**input */
    let spanInput = document.createElement("span");
    spanInput.setAttribute("style","font-size: 20px;padding: 20px;");
    let newInput = document.createElement("INPUT");
    newInput.setAttribute("type","checkbox");
    newInput.setAttribute("id",eat);
    newInput.setAttribute("name",'aliments');
    newInput.setAttribute("value",eat);
    spanInput.appendChild(newInput);

    /**text */
    let spanText = document.createElement("span");
    spanText.setAttribute("style","font-size: 20px;padding: 20px;");
    spanText.innerHTML = eat;

    newAliment.appendChild(btnEliminar);
    newAliment.appendChild(btnUp);
    newAliment.appendChild(btnDown);
    newAliment.appendChild(spanInput);
    newAliment.appendChild(spanText);

    let aliments = document.getElementById("aliments");
    aliments.appendChild(newAliment);
    
  }

}

function eliminarEat(event){
    let i = <HTMLDivElement>event.target;
    let span = <HTMLDivElement> i.parentNode;
    let div = <HTMLDivElement> span.parentNode;
    div.remove();
}

function upEat(event){

    let aliments = document.getElementById("aliments");
    let i = <HTMLDivElement>event.target;
    let span = <HTMLDivElement> i.parentNode;
    let div = <HTMLDivElement> span.parentNode;

    aliments.insertBefore(div,div.previousElementSibling);
}

function downEat(){

  let aliments = document.getElementById("aliments");

  let i = <HTMLDivElement>event.target;
  let span = <HTMLDivElement> i.parentNode;
  let div = <HTMLDivElement> span.parentNode;
  
  aliments.insertBefore(div.nextSibling,div);
}

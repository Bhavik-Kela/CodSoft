let display = document.querySelector("#displayin");

function appendtoScr(input){
    display.value += input;
    display.style.color = "white";

}
function clearscr(){
    display.value = "";
}
function calcValue(){
    try{
    display.value = eval(display.value);
    display.style.color= "green";
    }
    catch(error){
        display.value = "Syntax Error"
    }
}

function deleteVal(){
    display.value = display.value.slice(0,-1);
    display.style.color = "white";
}

let deleteValue =  document.querySelector(".delete");

deleteValue.addEventListener("click",()=>{
    deleteVal();
})
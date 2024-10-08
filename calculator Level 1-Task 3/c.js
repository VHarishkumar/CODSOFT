const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";

}
function calculate(){
  try{
    display.value = eval(display.value);
    if('+'){
        display.value = eval(display.value);
    }else if('-'){
        display.value = eval(display.value);
    }else if('*'){
        display.value = eval(display.value);
    }else if('/'){
        display.value = eval(display.value);
    }else if('%'){
        display.value = eval(display.value);
    }
    else{
        display.value = "error";
    }
}
    
   catch(error){
        display.value = "Error";
    }
}
function Delete(){
    display.value = display.value.toString().slice(0,-1)
}
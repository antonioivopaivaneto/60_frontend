const buttonsEl = document.querySelectorAll("button");
const displayEl = document.getElementById("result");

for(let i =0;i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click",()=>{
        const buttonValue = buttonsEl[i].textContent
        if(buttonValue ==="C"){
            clearResult()
        }else if(buttonValue === "="){
            calculateResult()
        }else{
            appendValue(buttonValue)
        }

    })
}

function clearResult(){
    displayEl.value =''
}
function calculateResult(){
    displayEl.value = eval(displayEl.value)
}
function appendValue(buttonValue){
    displayEl.value += buttonValue


}
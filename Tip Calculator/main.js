const btnEl = document.getElementById('calculate');
const resultEl = document.getElementById('total');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');


function calculateTotal(){
    const billValue = billInput.value
    const tipValue = tipInput.value

    const totalValue = billValue * (1 + tipValue / 100)

    resultEl.innerText = totalValue.toFixed(2)
 }

btnEl.addEventListener('click',calculateTotal)
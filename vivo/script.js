const btnProx = document.getElementById('prox');
const pass = document.getElementById('pass');
const msg = document.getElementById('msg');


btnProx.addEventListener('click', () =>{
    

    if(pass.value =='123'){
        window.location.href='home.html'

    }else{
        msg.innerHTML = "Senha incorreta"

    }

})
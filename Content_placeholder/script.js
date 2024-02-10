const allskeletom = document.querySelectorAll('.skeleton')


const load = () =>{
    allskeletom.forEach(item =>{
        item.classList.remove('skeleton')
    })
}

setTimeout(load, 1000);
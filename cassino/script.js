function animateNumber() {
    const randomNumber = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
    const numberElement = document.getElementById('randomNumber');
    numberElement.textContent = randomNumber;
  }
  
  const animationInterval = setInterval(animateNumber, 100); // Chama a função a cada 0.1 segundo
  
  setTimeout(() => {
    clearInterval(animationInterval); // Pára a animação após 5 segundos
  }, 5000);
  
document.addEventListener("keypress", (enter) => {
  if(enter.key === 'Enter') {
      const btn = document.querySelector("#calc");

    btn.click();
  }
});

const calcular = document.getElementById('calc')

function imc(){
  
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  
  const resultado = document.getElementById('resultado')

  if(nome !== '' && altura !== '' && peso !== ''){
    
    const valorIMC = (peso / (altura * altura))

    let classificacao = '';

    if (valorIMC < 18.5){
      classificacao = 'abaixo do peso';
    }else if(valorIMC < 25){
      classificacao = 'com o peso ideal. Parabéns!';
    }else if(valorIMC < 30){
      classificacao = 'levemente acima do peso';
    }else if(valorIMC < 40){
      classificacao = 'com obesidade';
    }else if(valorIMC > 40){
      classificacao = 'com obesidade';
    }

    resultado.textContent = `Olá ${nome}, sua altura é ${altura}, seu peso é ${peso}kg e seu IMC é ${valorIMC.toFixed(1)}. Você está ${classificacao}`

  }else{
    resultado.textContent = 'Preencha todos os campos'
  }
}


calcular.addEventListener('click', imc);
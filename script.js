document.addEventListener('click', function(e) {
    const el = e.target;
    const reais = document.querySelector('.reais').value
    const dolares = document.querySelector('.dolares').value
    const resultado = document.querySelector('.resultado')
    
    if (el.classList.contains('usd')) {
      let result = parseFloat(reais) * 5.50
      resultado.value = result.toFixed(2)
    }
    if (el.classList.contains('brl')) {
      let result = parseFloat(dolares) / 5.50
      resultado.value = result.toFixed(2)
    }
  })
  
  

// var valorEmDolarTexto = prompt("Qual o valor em Dollar você quer Converter ? ")

// var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

// var valorEmReal = valorEmDolarNumero * 5.5

// alert("O valor em Reais é: " + "R$ " + valorEmReal.toFixed(2))
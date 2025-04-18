let totalCarrinho = 0; 
const botoesComprar = document.querySelectorAll('.botao-comprar');
const contador = document.getElementById('contador-carrinho');

document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('botao-pesquisa');
    const input = document.getElementById('campo-pesquisa');
    const resultado = document.getElementById('resultado-pesquisa');
  
    botao.addEventListener('click', function () {
      const valorDigitado = input.value.trim();
  
      if (valorDigitado !== '') {
        resultado.textContent = `Você pesquisou por: ${valorDigitado}`;
      } else {
        resultado.textContent = 'Por favor, digite algo para pesquisar.';
      }
    });
  });

  botoesComprar.forEach((botao) => {
    botao.addEventListener('click', () => {
      totalCarrinho++; // aumenta o número
      contador.textContent = totalCarrinho; // atualiza no HTML
    });
  });

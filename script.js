document.addEventListener('DOMContentLoaded', function () {

  let tamanhoFonte = 100; // porcentagem base

  const aumentar = document.getElementById('aumentar-fonte');
  const diminuir = document.getElementById('diminuir-fonte');

  if (!aumentar || !diminuir) {
    console.error('Botões de acessibilidade não encontrados');
    return;
  }

  aumentar.addEventListener('click', function () {
    if (tamanhoFonte < 130) {
      tamanhoFonte += 10;
      document.documentElement.style.fontSize = tamanhoFonte + '%';
    }
  });

  diminuir.addEventListener('click', function () {
    if (tamanhoFonte > 90) {
      tamanhoFonte -= 10;
      document.documentElement.style.fontSize = tamanhoFonte + '%';
    }
  });

});

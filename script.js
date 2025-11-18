function mostrarTrimestre(numero) {
  const secoes = document.querySelectorAll('section');
  secoes.forEach(secao => {
    if (secao.id === `trimestre${numero}`) {
      secao.classList.add('ativo');
    } else {
      secao.classList.remove('ativo');
    }
  });
}

mostrarTrimestre('trimestre1');
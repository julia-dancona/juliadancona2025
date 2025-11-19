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

document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================
       LÓGICA DO MODAL
       ========================================== */
    const modal = document.getElementById('modalAtividade');
    const closeButton = document.querySelector('.close-button');

    // Elementos internos do modal
    const modalNome = document.getElementById('modalNome');
    const modalHabilidades = document.getElementById('modalHabilidades');
    const modalObjetivo = document.getElementById('modalObjetivo');
    const modalLink = document.getElementById('modalLink');
    const modalImagem = document.getElementById('modalImagem');

    // Seleciona todas as atividades
    const atividades = document.querySelectorAll('.atividade');

    // Adiciona evento de clique em cada atividade
    atividades.forEach(atividade => {
        atividade.addEventListener('click', () => {
            // 1. Pega os dados
            const nome = atividade.getAttribute('data-nome');
            const habilidades = atividade.getAttribute('data-habilidades');
            const objetivo = atividade.getAttribute('data-objetivo');
            const link = atividade.getAttribute('data-link');
            const imagemSrc = atividade.getAttribute('data-imagem-src');

            // 2. Preenche o modal
            modalNome.textContent = nome;
            modalHabilidades.textContent = habilidades;
            modalObjetivo.textContent = objetivo;
            
            if (link) modalLink.setAttribute('href', link);
            if (imagemSrc) modalImagem.setAttribute('src', imagemSrc);

            // 3. EXIBE O MODAL COM FLEX (para centralizar)
            modal.style.display = 'flex';
        });
    });

    // Fechar Modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    /* ==========================================
       LÓGICA DAS ABAS (TRIMESTRES)
       ========================================== */
    const btnTris1 = document.getElementById('btn-tris1');
    const btnTris2 = document.getElementById('btn-tris2');
    const btnTris3 = document.getElementById('btn-tris3');

    const section1 = document.getElementById('trimestre1');
    const section2 = document.getElementById('trimestre2');
    const section3 = document.getElementById('trimestre3');

    function ativarTrimestre(secaoAtiva) {
        // Esconde todas
        section1.classList.remove('ativo');
        section2.classList.remove('ativo');
        section3.classList.remove('ativo');
        
        // Mostra a escolhida
        secaoAtiva.classList.add('ativo');
    }

    // Adiciona eventos aos botões (se eles existirem no HTML)
    if(btnTris1) btnTris1.addEventListener('click', () => ativarTrimestre(section1));
    if(btnTris2) btnTris2.addEventListener('click', () => ativarTrimestre(section2));
    if(btnTris3) btnTris3.addEventListener('click', () => ativarTrimestre(section3));
});

mostrarTrimestre('trimestre1');
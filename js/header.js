// Espera o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Pega todos os links dentro do header
    const links = document.querySelectorAll('.glass-header a');

    // Adiciona um "ouvinte" de clique para cada link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // e.preventDefault(); // Descomente se não quiser que a página recarregue

            // 1. Remove a classe 'active' de TODOS os links
            links.forEach(l => l.classList.remove('active'));

            // 2. Adiciona a classe 'active' APENAS no link que foi clicado
            this.classList.add('active');
        });
    });

});
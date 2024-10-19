document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentText = document.getElementById('comment-text');
    const commentsContainer = document.getElementById('comments-container');

    // Carregar comentários salvos no localStorage ao carregar a página
    loadComments();

    // Adicionar evento de submit ao formulário de comentário
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar o recarregamento da página

        // Criar um objeto com o comentário e a data atual
        const comment = {
            text: commentText.value,
            date: new Date().toLocaleString()
        };

        // Adicionar o comentário ao localStorage
        addComment(comment);

        // Limpar o campo de texto após adicionar o comentário
        commentText.value = '';

        // Recarregar os comentários para exibir o novo comentário adicionado
        loadComments();
    });

    // Função para carregar os comentários salvos no localStorage
    function loadComments() {
        commentsContainer.innerHTML = ''; // Limpar o conteúdo atual

        // Obter os comentários salvos no localStorage
        const comments = JSON.parse(localStorage.getItem('comments')) || [];

        // Exibir os comentários na página
        comments.forEach(function(comment) {
            const commentEl

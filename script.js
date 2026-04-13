const editaveis = document.querySelectorAll('[contenteditable="true"]');

editaveis.forEach((el, index) => {
    const chave = "conteudo_" + index;

    // carregar conteúdo salvo
    if(localStorage.getItem(chave)){
        el.innerHTML = localStorage.getItem(chave);
    }

    // salvar automaticamente
    el.addEventListener("input", () => {
        localStorage.setItem(chave, el.innerHTML);
    });
});
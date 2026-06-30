function mensagem(event){

    event.preventDefault();

    let nome = document.getElementById('nome').value
    document.getElementById("popup").style.display = "block";
    document.getElementById("alteracao").style.opacity = 0.1;
    document.getElementById('nome_ag').innerText = `Obrigado ${nome},pelo seu feedback!`
};

function fechar() {
    location.reload();
};

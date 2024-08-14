const textoEntrada = document.querySelector('.texto-entrada');
const mensagem = document.querySelector('.texto-saida');
const botoes = document.querySelectorAll('button');


//Função para detectar o comando qual botão foi clicado.
function criptografar(event) {
    
    const entrada = textoEntrada.value;
    const button = event.target;

    if (entrada === '') {
        return;
    }

    if (button.className === 'btn-criptografa') {
        mensagem.value = codificarMensagem(entrada, 0);
    } else {
        mensagem.value = codificarMensagem(entrada, 1);
    }

    textoEntrada.value = "";
    mensagem.style.backgroundImage = 'none';
    document.querySelector('.texto-saida-alerta').innerHTML = '';

    alterarCorBotao(button)


}


//Fun~ção para alterar a cor do botão clicado.
function alterarCorBotao(btn) {

    botoes.forEach(botao => {
        botao.style.backgroundColor = '#D8DFE8';
        botao.style.color = '#0A3871';       
    });

    btn.style.backgroundColor = '#0A3871';
    btn.style.color = '#FFF';
}



//Função para copiar a mensagem encriptada.
function copiarMensagem(event){

    if (mensagem.value === '') {
        return;
    }

    navigator.clipboard.writeText(mensagem.value);
    mensagem.value = '';
    document.querySelector('.texto-saida-alerta').innerHTML = 'Texto copiado para a área de tranferencia.';
    mensagem.style.backgroundImage = 'url(img/menina.svg)';
    mensagem.style.backgroundRepeat = 'no-repeat';

    alterarCorBotao(event.target)

}



//Função para cifrar e decifrar a mensagem
function codificarMensagem(strMensagem, tipo) {
  
    strMensagem = strMensagem.toLowerCase();

    let matrizChaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    if (tipo == 1) {
        matrizChaves = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];      
    }

    for (let i = 0; i < matrizChaves.length; i++) {
        if (strMensagem.includes(matrizChaves[i][0])) {
            strMensagem = strMensagem.replaceAll(matrizChaves[i][0], matrizChaves[i][1]);
        }
        
    }

    return strMensagem;

}
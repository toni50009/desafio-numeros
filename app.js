// Constantes
let level = 1;
let tentativas = 6;
let qtdInput;
let texto;
let listaNumeros = ['Alfa 1-5','Beta 6-10','Alfa 10-20','Beta 21-30','Gama 31-40','Alfa 15-25','Beta 40-50','Gama 90-100','Zeta 101 - 111'];
let indice = 0;
let nomeNumero;
let campo;
let input;

//Inputs e numeros gerados
let numeroGerado1;
let numeroGerado2;
let numeroGerado3;
let numeroGerado4;
let numeroDigitado1;
let numeroDigitado2;
let numeroDigitado3;
let numeroDigitado4;
let listaTentativas = [];
let textoTentativas = document.getElementById('tentativasRestantes');
let campoResposta = document.getElementById('lista-Respostas');
let botaoChutar = document.getElementById('botaoChutar');
let botaoGerar = document.getElementById('botaoGerar');
let mensagemVitoria = 'Você descobriu todos os números do nível!';
botaoChutar.setAttribute('disabled',true);


function gerar(){
    botaoChutar.removeAttribute('disabled');
    botaoGerar.setAttribute('disabled',true);
    textoTentativas.classList.remove('invisivel');
    textoTentativas.textContent = 'Tentativas: 6';
    if(level == 1){
    geraCampo(2);
    numeroGerado1 = gerarNumeroAleatorio(1,5);
    console.log(numeroGerado1);
    numeroGerado2 = gerarNumeroAleatorio(6,10);
    console.log(numeroGerado2);
    document.querySelector('h1').textContent = 'Foram gerados 2 números, Alfa e Beta. O número Alfa está entre 1 e 5. O Número Beta está entre 6 e 10. Digite os números nos campos, depois Clique em "Chutar" para tentar!';
}
    else if(level ==2){
        geraCampo(3);
    numeroGerado1 = gerarNumeroAleatorio(10,20);
    console.log(numeroGerado1);
    numeroGerado2 = gerarNumeroAleatorio(21,30);
    console.log(numeroGerado2);
    numeroGerado3 = gerarNumeroAleatorio(31,40);
    console.log(numeroGerado3);
    document.querySelector('h1').textContent = 'Foram gerados 3 números, Alfa,Beta e Gama. O número Alfa está entre 10 e 20. O Número Beta está entre 21 e 30. O Número Gama está entre 31 e 40. Clique em Chutar depois de digitar os números nos campos.';
}else{
        geraCampo(4);
    numeroGerado1 = gerarNumeroAleatorio(15,25);
    console.log(numeroGerado1);
    numeroGerado2 = gerarNumeroAleatorio(40,50);
    console.log(numeroGerado2);
    numeroGerado3 = gerarNumeroAleatorio(90,100);
    console.log(numeroGerado3);
    numeroGerado4 = gerarNumeroAleatorio(101,111);
    console.log(numeroGerado4);
    document.querySelector('h1').textContent = 'Foram gerados 4 números Finais: Alfa,Beta, Gama e Zeta. O número Alfa está entre 15 e 25. O Número Beta está entre 40 e 50. O Número Gama está entre 90 e 100.O número Zeta está entre 101 e 111 Clique em Chutar depois de digitar os números nos campos.';

}
    

}


function gerarNumeroAleatorio(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function geraCampo(qtdInput){
    let numeroID = 1;
    for(let i = 0; i < qtdInput; i++){
    nomeNumero = listaNumeros[indice];
    input = document.createElement('input');
    campo = document.getElementById('campo_jogo');
    texto = document.createElement('text');
    texto.type = 'text';
    texto.className = '.texto_resultado';
    input.type = 'number';
    input.className = 'campo_numero';
    input.id = `numero-digitado${numeroID}`;
    campo.appendChild(input);
    campo.appendChild(texto);
    texto.textContent = `Digite o número ${nomeNumero}`;
    indice ++;
    numeroID ++;
}
}

function verificarNumero(nomeNumero, numeroDigitado, numeroGerado) {
    let itemResposta = document.createElement('li');
    campoResposta = document.getElementById('lista-Respostas');
    campoResposta.appendChild(itemResposta);
    itemResposta.className = '.container_texto';
    if (numeroDigitado === numeroGerado) {
        itemResposta.textContent = `${nomeNumero}: Você descobriu o número ${nomeNumero}! `;
    } else if (numeroDigitado > numeroGerado) {
        itemResposta.textContent = `${nomeNumero}: O número ${nomeNumero} é MENOR do que você digitou!`;
       listaTentativas.push('1');
    } else {
        itemResposta.textContent = `${nomeNumero}: O número ${nomeNumero} é MAIOR do que você digitou!`;
        listaTentativas.push('1');
    }

}



function atualizaTentativas() {
    textoTentativas.textContent = `Tentativas restantes: ${tentativas}`;
}


function chutar(){
    atualizaTentativas();
    numeroDigitado1 = parseInt(document.getElementById('numero-digitado1').value);
    numeroDigitado2 = parseInt(document.getElementById('numero-digitado2').value);
    if(tentativas <= 0){
        return;
        }
    campoResposta.textContent = '';
    if(level == 1){
        if (isNaN(numeroDigitado1) || isNaN(numeroDigitado2)) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        verificarNumero('Alfa',numeroDigitado1,numeroGerado1);
        verificarNumero('Beta',numeroDigitado2,numeroGerado2);
        if(listaTentativas.includes('1')){
            listaTentativas = [];
            tentativas --;
            if (tentativas <= 0) {
                reseta();
                document.querySelector('h1').textContent = 'Sem mais tentativas! Clique em Gerar para tentar novamente';
                level = 1;
                indice = 0;
                tentativas = 6;
            }else{
            textoTentativas.textContent = `Tentativas: ${tentativas}`;
            }
        }
        console.log(tentativas);
        if(numeroDigitado1 == numeroGerado1 && numeroDigitado2 == numeroGerado2){
            tentativas = 6;
            alert(mensagemVitoria);
            reseta();
            document.querySelector('h1').textContent = 'Você está agora no nível 2! Clique em Gerar para Iniciar!';
            level ++;
        }

    }else if(level == 2){
        numeroDigitado3 = parseInt(document.getElementById('numero-digitado3').value);
        if (isNaN(numeroDigitado1) || isNaN(numeroDigitado2) || isNaN(numeroDigitado3)) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        verificarNumero('Alfa',numeroDigitado1,numeroGerado1);
        verificarNumero('Beta',numeroDigitado2,numeroGerado2);
        verificarNumero('Gama',numeroDigitado3,numeroGerado3);
        if(listaTentativas.includes('1')){
            listaTentativas = [];
            tentativas --;
            if (tentativas <= 0) {
                reseta();
                document.querySelector('h1').textContent = 'Sem mais tentativas! Clique em Gerar para tentar novamente';
                level = 1;
                indice = 0;
                tentativas = 6;
            }else{
            textoTentativas.textContent = `Tentativas: ${tentativas}`;
            }
        }
        console.log(tentativas);
        if(numeroDigitado1 == numeroGerado1 && numeroDigitado2 == numeroGerado2 && numeroDigitado3 == numeroGerado3){
            tentativas = 6;
            alert(mensagemVitoria);
            reseta();
            document.querySelector('h1').textContent = 'Você está agora no nível 3! Clique em Gerar para Iniciar!';
            level ++;
        }
    }else{
        numeroDigitado3 = parseInt(document.getElementById('numero-digitado3').value);
        numeroDigitado4 = parseInt(document.getElementById('numero-digitado4').value);
        if (isNaN(numeroDigitado1) || isNaN(numeroDigitado2) || isNaN(numeroDigitado3) || isNaN(numeroDigitado4)) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        verificarNumero('Alfa',numeroDigitado1,numeroGerado1);
        verificarNumero('Beta',numeroDigitado2,numeroGerado2);
        verificarNumero('Gama',numeroDigitado3,numeroGerado3);
        verificarNumero('Zeta',numeroDigitado4,numeroGerado4);
        if(listaTentativas.includes('1')){
            listaTentativas = [];
            tentativas --;
            if (tentativas <= 0) {
                reseta();
                document.querySelector('h1').textContent = 'Sem mais tentativas! Clique em Gerar para tentar novamente';
                level = 1;
                indice = 0;
                tentativas = 6;
            }else{
            textoTentativas.textContent = `Tentativas: ${tentativas}`;
            }
        }
        console.log(tentativas);
        if(numeroDigitado1 == numeroGerado1 && numeroDigitado2 == numeroGerado2 && numeroDigitado3 == numeroGerado3 && numeroDigitado4 == numeroDigitado4){
            alert(mensagemVitoria);
            reseta();
            document.querySelector('h1').textContent = 'Você voltou ao nível 1, clique em Gerar para Iniciar!';
            level = 1;
            indice = 0;
            tentativas = 6;
        }
    }

}


function reseta() {
    // Remova o campo atual do jogo e recrie
    let pai = document.getElementById('pai');
    let campo = document.getElementById('campo_jogo');
    campo.remove();
    
    // Crie novamente o div de jogo
    let returnDiv = document.createElement('div');
    returnDiv.className = 'container_jogo';
    returnDiv.id = 'campo_jogo';
    pai.appendChild(returnDiv);
    
    // Crie a lista de respostas
    let returnLista = document.createElement('ul');
    returnLista.className = 'container_texto';
    returnLista.id = 'lista-Respostas';
    returnDiv.appendChild(returnLista);
    

    // Atualize o estado dos botões
    botaoChutar.setAttribute('disabled', true);
    botaoGerar.removeAttribute('disabled');

    // Esconde tentativas
    textoTentativas.classList.add('invisivel');

}

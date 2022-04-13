// Cria as variáveis globais
var largura = 0
var altura = 0
var vidas = 1 
var tempo = 30
var criaMorcegoTempo = 1500
// Criação da var nivel
var nivel = window.location.search
// Troca do caracter '?' pelo vazio
nivel = nivel.replace('?', '')
// Criação do nivel de dificuldade do jogo
if(nivel === 'normal'){
    criaMorcegoTempo = 1500
}else if(nivel === 'dificil'){
    criaMorcegoTempo = 1000
}else if(nivel === 'impossivel'){
    criaMorcegoTempo = 850
}
//retornar a altura e largura do window
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}
//Chama a função que retorna a altura e largura do window assim que a página é recarregada
ajustaTamanhoPalcoJogo()
//Criando o cronômetro
var cronometro = setInterval(function(){
    //Diminua em o tempo
    tempo--
    //Se o tempo for < 0
    if(tempo < 0){
        //Para de exibir o cronômetro
        clearInterval(cronometro)
        //Para de de criar mais morcegos
        clearInterval(criaMorcegoTempo)
        //Encaminha para a página de vitória
        window.location.href = 'vitoria.html'
    }
    else{
        //Exibe o cronômetro
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)
//Criando função para as posições randomicas
function posicaoRandomica(){
    //Se existir um elemento com o id 'morcego'
    if(document.getElementById('morcego')){
        //Remover morcego anterior
        document.getElementById('morcego').remove()
        //Caso var vidas > 3
        if(vidas > 3){
            //Encaminha para a página de game over
            window.location.href = 'fim_de_jogo.html'
        } else{
            //Caso var vidas <= 3
            //Selecionar o elemento e alterar a imagem do coração
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            //Adicionar mais 1 na var vidas
            vidas++
        }
    }
    //Criando as posições randomicas
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    //Operador ternário caso as posições randomicas seja menor que 0  
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    // Criando elemento HTML
    var morcego = document.createElement('img')
    morcego.src = 'imagens/morcego.png'
    //Passando o tamanho do morcego
    morcego.className = tamanhoAleatorio() +' '+ ladoAleatorio()
    //Indicando a posição do morcego na tela
    morcego.style.left = posicaoX + 'px'
    morcego.style.top = posicaoY + 'px'
    morcego.style.position = 'absolute'
    //Criando o id do elemento
    morcego.id = 'morcego'
    //Remover o morcego após o clique
    morcego.onclick = function(){
        this.remove()
    }
    //Adicionar o elemento criado dentro do body 
    document.body.appendChild(morcego)
    
}
//Criando os tamanhos aleatórios do morcego
function tamanhoAleatorio(){
    //Criando um tamanho de 1 a 3 para o morcego
    var classe = Math.floor(Math.random() * 3) 
    //Retorna um valor para o tamanho do morcego
    switch(classe){
        case 0:
            return 'morcego1'
        case 1: 
            return 'morcego2'
        case 2: 
            return 'morcego3'
    }
}
//Criando um random para o lado em que o morcego vai está virado
function ladoAleatorio(){
    //Random para escolher o lado  1 ou 2 para o morcego
    var classe = Math.floor(Math.random() * 2)
    //rRetorna um valor para lado do morcego
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
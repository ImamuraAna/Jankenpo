let userScore = 0;
let computerScore = 0;
const userSocre_span = document.getElementById("pontos-vc");
const computerSocre_span = document.getElementById("pontos-pc");
const socreBoard_div = document.querySelector(".placar");
const resultado_p = document.querySelector(".resultado > p");
const pedra_div = document.getElementById("pd");
const papel_div = document.getElementById("pp");
const tesoura_div = document.getElementById("tsr");

function getEscolhaComputador(){
    const escolha = ["pd", "pp", "tsr"];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return escolha[numeroAleatorio];
}

function converterEscolhas (letter){
    if (letter == "pd") return "Pedra";
    if (letter == "pp") return "Papel";
    if (letter == "tsr") return "Tesoura";
}

function vitoria(escolhaUsuario, escolhaComputador){
    userScore++;
    userSocre_span.innerHTML = userScore;
    computerSocre_span.innerHTML = computerScore;
    resultado_p.innerHTML = converterEscolhas(escolhaUsuario) + " ganha de " + converterEscolhas(escolhaComputador) + ". Você venceu!"
    console.log("venceu!");
    console.log(userScore);
}

function derrota(escolhaUsuario, escolhaComputador){
    computerScore++;
    userSocre_span.innerHTML = userScore;
    computerSocre_span.innerHTML = computerScore;
    resultado_p.innerHTML = converterEscolhas(escolhaUsuario) + " perde para " + converterEscolhas(escolhaComputador) + ". Você perdeu..."
    console.log("perdeu...");
    console.log(computerScore);
}

function empate(escolhaUsuario, escolhaComputador){
    resultado_p.innerHTML = "Ops ... Deu empate! Tente novamente!"; 
    
}

function game(escolhaUsuario) {
    const escolhaComputador = getEscolhaComputador();
    switch (escolhaUsuario + escolhaComputador) {
        case ("pdtsr"):
        case ("pppd"):
        case ("tsrpp"):
            vitoria(escolhaUsuario, escolhaComputador);
            break;
        case ("pdpp"):
        case ("pptsr"):
        case ("tsrpd"):
            derrota(escolhaUsuario, escolhaComputador);
            break;
        case ("pdpd"):
        case ("pppp"):
        case ("tsrtsr"):
            empate(escolhaUsuario, escolhaComputador);
            break;
    }
  
}


function principal(){
    pedra_div.addEventListener('click', function() {
        game("pd");
    })

    papel_div.addEventListener('click', function() {
        game("pp");
    })

    tesoura_div.addEventListener('click', function() {
        game("tsr");
    })

}

principal();

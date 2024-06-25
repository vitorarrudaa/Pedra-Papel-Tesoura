let humanScore = 0;
let computerScore = 0;
let inputHuman;

function zerar (){
    humanScore = "";
    computerScore = "";
    inputHuman = "";
    placar_jog.textContent = humanScore;
    placar_comp.textContent = computerScore;
}

function getComputerChoice () {
    let randomN = Math.floor(Math.random() * 3);
    let resComp;
    switch (randomN){
        case 0:
            resComp = ("pedra");
        break;
        case 1: 
            resComp = ("papel");
        break;
        case 2: 
            resComp = ("tesoura");
        break
    }
    return (resComp);
}

function getHumanChoice (escolha){
    inputHuman = escolha.toLowerCase();
}

function playRound (humanChoice, computerChoice){

    if ((humanChoice === "pedra") && (computerChoice === "tesoura")){
        humanScore++;
    } else if ((humanChoice === "papel") && (computerChoice === "pedra")){
        humanScore++;
    } else if((humanChoice === "tesoura") && (computerChoice === "papel")){
        humanScore++;
    } else {
        computerScore++;
    }

    inputHuman = "";
    placar_jog.textContent = humanScore;
    placar_comp.textContent = computerScore;
}

function playGame () {

    let humanChoice = inputHuman;
    let computerChoice = getComputerChoice();

    window.alert (`Escolha do jogador: ${humanChoice} \nEscolha do computador: ${computerChoice}`);

    playRound(humanChoice, computerChoice);
}

const botao_pedra = document.querySelector("#botao_pedra");
const botao_papel = document.querySelector("#botao_papel");
const botao_tesoura = document.querySelector("#botao_tesoura");
const botao_jogar = document.querySelector("#botao_jogar");
const placar_jog = document.querySelector("#placar_jog");
const placar_comp = document.querySelector("#placar_comp");

botao_pedra.addEventListener ("click", () => {
    getHumanChoice(botao_pedra.textContent);
});

botao_papel.addEventListener ("click", () => {
    getHumanChoice(botao_papel.textContent);
});

botao_tesoura.addEventListener ("click", () => {
    getHumanChoice(botao_tesoura.textContent);
});

botao_jogar.addEventListener ("click", () => {
    if (inputHuman === ""){
        window.alert("Selecione uma opção primeiro!")
    }else{
        playGame();

        if (humanScore > 2){
            window.alert ("Você venceu!");
            zerar();
        }else if (computerScore > 2){
            window.alert("Você perdeu...")
            zerar();
        }
    }
});

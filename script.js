let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice (){
    let inputHuman = prompt ("Qual a opção escolhida? ");
    inputHuman = inputHuman.toLowerCase();

    if ((inputHuman != "pedra") && (inputHuman != "papel") && (inputHuman != "tesoura")){ 
        window.alert (`A opção "${inputHuman}" é inválida!`);
        inputHuman = getHumanChoice();
    }
    return (inputHuman);
}

function playRound (humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        window.alert("Empate!")
    } else if ((humanChoice === "pedra") && (computerChoice === "tesoura")){
        humanScore++;
        window.alert ("Você venceu!");
    } else if ((humanChoice === "papel") && (computerChoice === "pedra")){
        humanScore++;
        window.alert ("Você venceu!");
    } else if((humanChoice === "tesoura") && (computerChoice === "papel")){
        humanScore++;
        window.alert ("Você venceu!");
    } else {
        computerScore++;
        window.alert ("Você perdeu...")
    }
}

function playGame () {
    for (let i = 0; i < 3; i++ ){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        window.alert (`Escolha do usuario: ${humanChoice} \nEscolha do computador: ${computerChoice}`);
        playRound(humanChoice, computerChoice); 
    }
    window.alert (`Pontuação final\nUsuário: ${humanScore}\nComputador: ${computerScore} `);
}

playGame();

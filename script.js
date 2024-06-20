console.log ("          PEDRA - PAPEL - TESOURA");
console.log ("-----------------------------------------");
console.log ("                 PLACAR")
console.log  ("Usuario: " );
console.log ("Computador: ");
console.log ("-----------------------------------------");

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
        console.log (`A opção "${inputHuman}" é inválida!`);
        inputHuman = getHumanChoice();
    }
    return (inputHuman);
}

function playRound (humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log("Empate!")
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log (`Escolha do usuario: ${humanChoice}`);
console.log (`Escolha do computador: ${computerChoice}`);

playRound(humanChoice, computerChoice);


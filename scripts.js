function playGame() {

    var humanScore = 0
    var computerScore = 0

    function getComputerChoice(number) {
        number = Math.floor(Math.random() * number)
        if (number === 0) {
            return "rock"
        }
        else if (number === 1) {
            return "paper"
        }
        else {
            return "scissors"
        }
    }


    function getHumanChoice(number) {
        var number = prompt("Digite um número:")
        if (number == 0) {
            return "rock"
        }
        else if (number == 1) {
            return "paper"
        }
        else if (number == 2) {
            return "scissors"
        }
        else {
            return invalido = number > 2
        }
    }


    function playRound(humanSelection, computerSelection) {
        if (humanSelection === "paper" && computerSelection === "rock") {
            console.log("Você ganhou")
            humanScore++
        }
        else if (humanSelection === "scissors" && computerSelection === "paper") {
            console.log("Você ganhou")
            humanScore++
        }
        else if (humanSelection === "rock" && computerSelection === "scissors") {
            console.log("Você ganhou")
            humanScore++
        }
        else if (humanSelection === computerSelection) {
            return "Empate"
        }
        else if (humanSelection === true) {
            return "OPÇÃO INVÁLIDA"
        }
        else {
            console.log("Você perdeu")
            computerScore++
        }
        console.log(humanScore + " - " + computerScore)
    }


    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(3);


        console.log(playRound(humanSelection, computerSelection))
    }
}

console.log('0 = Rock | 1 = Paper | 2 = Scissors')
console.log(playGame())

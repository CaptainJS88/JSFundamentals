let userInput = prompt("Enter number upto which fibonacci sequence needs to be printed");

function generateFibonacci(userInput) {
    const sequence = [0,1];
    
    for (let i = 2; i < userInput; i++) {
        const next = sequence[i-2] + sequence[i-1]
        sequence.push(next);
    }

    return sequence;
}

generateFibonacci(userInput);

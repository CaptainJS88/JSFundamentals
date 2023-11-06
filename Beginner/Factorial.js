let numberInput = prompt("Enter number for factorial");

function calculateFactorial(numberInput) {
    let sum = 1;
    for (let i = numberInput; i >= 1; i--) {
        sum = sum * i;
    }
    console.log("factorial of ",numberInput,"is ", sum);

}

calculateFactorial(numberInput);
let userInput = prompt("Enter number of prime numbers needed for generation");
let primeNumArray = []

function isPrime(number) {
    // 0 and 1 are not prime
    if (number <= 1) {
        return false;
    } 
    // 2 and 3 are prime
    if (number <= 3) {
        return true;
    }
    // Numbers divisible by 2 or 3 are not prime
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }

    for (let i = 5; i * i < number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }

    return true;
}

function generatePrimes(userInput) {
    for (let i = 2; primeNumArray.length < userInput; i++) {
        if (isPrime(i)) {
            primeNumArray.push(i);
        }
    }
    primeNumArray.forEach((number) => {
        console.log(number);
    })
}

generatePrimes(userInput);
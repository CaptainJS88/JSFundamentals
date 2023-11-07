const userInput = prompt("Palindrome checker");
let reverse = [];

function isPalindrome (userInput) {
    for (let i = (userInput.length - 1); i >= 0; i--) {
        reverse.push(userInput[i])
    }
    if (reverse.join('').toLowerCase == userInput.toLowerCase){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

isPalindrome(userInput);
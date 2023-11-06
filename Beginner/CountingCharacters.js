let userInput = prompt("Enter string");

function countVowels (userInput) {
    let count = 0;
    for (let i = 0; i <= userInput.length; i++) {
        if (userInput[i] == 'a' || 'e' || 'i' || 'o' || 'u') {
            count++
        }
    }

    return count;
} 

countVowels(userInput);
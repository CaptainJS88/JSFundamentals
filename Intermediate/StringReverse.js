const userInput = prompt("Enter string");
let stringArray = [];
let reverseArray = [];

function reverseString(userInput) {
    for (let i = 0; i <= userInput.length; i++) {
        stringArray.push(userInput[i]);
    }
    for (let j = stringArray.length; j >= 0; j--) {
        reverseArray.push(stringArray[j])
    }
   
    const reverseString = reverseArray.join('');
    console.log(reverseString);

}

reverseString(userInput);
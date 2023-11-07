const userInput = prompt("Enter size of numbers");
let arr = [];
let temp;
let sorted = false;

function getInput () {
    for (let i = 0; i < parseInt(userInput); i++) {
        let num = prompt('enter num');
        arr.push(num)
    }
}
getInput();

function bubbleSort(arr) {
    do {
        sorted = false;
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] > arr[i+1]) {

                temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp;

                sorted = true;
            } 
        }
    } while (sorted)

    console.log(arr,"sorted array");

}
bubbleSort(arr);
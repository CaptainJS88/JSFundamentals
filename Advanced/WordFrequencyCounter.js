const userParagraph = prompt("enter a paragraph");

const paragraphArray = userParagraph.split(' ');

let obj = {};

function countWords (paragraphArray) {
    debugger;
    paragraphArray.forEach((word) => {
        if (!obj[word]) {
            obj[word] = 1;
        } else {
            obj[word] += 1;
        }
    })
    console.log(obj);
}
countWords(paragraphArray);
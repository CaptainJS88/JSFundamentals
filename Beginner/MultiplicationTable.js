let tableNumber = prompt("Enter number who's table you want");
let tableUpto = prompt("Enter count");

function printTable (tableNumber, tableUpto) {
    for (let i = 0; i <= tableUpto; i++) {
        let value = tableNumber * i;
        let tableText = `${tableNumber} x ${i} = ${value}`;

        console.log(tableText);
    }
}

printTable(tableNumber, tableUpto);
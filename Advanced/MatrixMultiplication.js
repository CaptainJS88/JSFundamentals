let matrixA = [
    [],
    [],
    []
]
let matrixB = [
    [],
    [],
    []
]
let result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function getMatrixInput(matrix) {
    for (let i = 0; i < 3; i++) {
        let arr = [];
        for (let j = 0; j < 3; j++) {
            let input = prompt("Enter matrix");
            arr.push(input);
            console.log(arr);
        }

        matrix[i] = arr;
    }
    console.log(matrix);
}
getMatrixInput(matrixA);
getMatrixInput(matrixB);

let sum = 0

function multiplyMatrix(a, b) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

multiplyMatrix(matrixA, matrixB);


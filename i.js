function checkMatrixSymmetry(matrix) {
    const n = matrix.length;
    let hori = true;
    let vertical = true;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (matrix[i] !== matrix[n - i - 1]) {
            hori = false;
            break;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            if (matrix[i][j] !== matrix[i][n - j - 1]) {
                vertical = false;
                break;
            }
        }
        if (!vertical) break;
    }

    if (hori && vertical) {
        console.log("Both")
    } else if (hori) {
        console.log("Horizontal")
    } else if (vertical) {
        console.log('Vertical');
        
    } 
}

// Example usage:
let matrix = [
  ['*', '.', '*'],
  ['.', '*', '.'],
  ['*', '.', '*']
];

console.log(checkMatrixSymmetry(matrix)); // Output: Both


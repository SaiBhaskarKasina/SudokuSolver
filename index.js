function generate(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(Array(n).fill(0));
    }
    console.log(matrix);
}
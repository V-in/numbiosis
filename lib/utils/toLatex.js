

function humanize(x){
    return x.toFixed(4).replace(/\.?0*$/,'');
}


/**
 * Returns Latex representation of a quadratic coefficient matrix and its variables
 * @param {{Matrix: [[]], Y: [] }} data
 */
const toLatex = (arg) => {
    //Zip matrices
    var matrix = [...arg.matrix]
    let Y = [...arg.y]
    Y.map((elem, index) => {
        matrix[index].push(elem)
    })

    let string = String.raw`\begin{array}`

    //{cc|c}a & b\\c & d
    let parcial = String.raw`{`
    //quantidade de colunas data[0].length
    for (let i = 0; i < matrix[0].length - 1; i = i + 1) {

        parcial = parcial + String.raw`c`

    }
    parcial = parcial + String.raw`|c}`

    //quantidade de linhas data.length
    for (let i = 0; i < matrix.length; i = i + 1) {
        for (let j = 0; j < matrix[0].length; j = j + 1) {
            parcial = parcial + JSON.stringify(matrix[i][j])
            //parcial = parcial + (humanize(matrix[i][j]))
            if (j != (matrix[0].length - 1))
                parcial = parcial + String.raw` & `
        }
        if (i != (matrix.length - 1)) {
            parcial = parcial + String.raw` \\ `
        }
    }

    let end = String.raw`\end{array}`
    let incapsulate = string + parcial + end;
    incapsulate = String.raw`\begin{bmatrix}` + incapsulate + String.raw`\end{bmatrix}`
    return incapsulate
}

export default toLatex
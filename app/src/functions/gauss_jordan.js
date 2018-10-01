/**
 @param  array A matrix
 */
const math = require('mathjs');

function operating(A, i, j, Y) {
    var fator = 0;
    // console.log("i:" + i);
    // console.log("j:" + j);
    // console.log("A[j][i]" + A[i][j]);
    //percorre linhas
    for (var k = 0; k < A[0].length; k++) {
        if (k != i) {
            if (Math.abs(A[i][j]) > Math.abs(A[k][j])) {
                fator = (A[i][j] / A[k][j]);
                // console.log("fator:" + fator);

                //percorre colunas da linha e multiplica pelo termo
                for (var l = 0; l < A.length; l++) {
                    // console.log('k:'+ k);
                    if (fator < 0) {
                        A[k][l] = (Math.abs(fator) * A[k][l]) + A[i][l];
                    }
                    else {
                        A[k][l] = (fator * A[k][l]) - A[i][l];
                    }
                }
                if (fator < 0) {
                    Y[k] = (Math.abs(fator) * Y[k]) + Y[i];
                }
                else {
                    Y[k] = fator * Y[k] - Y[i];
                }
            } else {
                fator = (A[k][j] / A[i][j]);
                // console.log("fator:" + fator);

                //percorre colunas da linha e multiplica pelo termo
                for (var l = 0; l < A.length; l++) {
                    // console.log('k:'+ k);
                    if (fator < 0) {
                        A[k][l] = A[k][l] + (Math.abs(fator) * A[i][l]);
                    }
                    else {
                        A[k][l] = A[k][l] - (fator * A[i][l]);
                    }
                }
                if (fator < 0) {
                    Y[k] = Y[k] + (Math.abs(fator) * Y[i]);
                }
                else {
                    Y[k] = Y[k] - (fator * Y[i]);
                }
            }
            // console.log('A:', A);
            // console.log('Y:', Y);
        }
    }
}
function gaussjordan(A, Y) {

    var i, k, j;
    var fator;
    var n = A.length;
    // console.log(n)
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i == j) {
                operating(A, i, j, Y)
            }
        }
    }
    for (i = 0; i < Y.length; i++) {
        fator = 1 / A[i][i];
        A[i][i] *= fator;
        Y[i] *= fator;
    }
    console.log('A:', A);
    console.log('Y:', Y);
}




Matrix = [[2, 3, -1], [1, 1, 1], [-1, -2, 3]];
Y = [-7, 4, 15];
gaussjordan(Matrix, Y);
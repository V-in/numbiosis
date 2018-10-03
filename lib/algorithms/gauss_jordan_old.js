/**
    @author Gabriel Belarmino
    Links:
        https://www.youtube.com/watch?v=C3Tpj2BS46I
        https://www.youtube.com/watch?v=YvWpAOoDZcQ
 */
const math = require('mathjs');
/**
    *Função Principal  
    * @param
    * Matriz A Quadratica i.e. 2x2,3x3,4x4...
    * Vetor Y especifiando o Y do Método
    */
function gaussjordan(A, Y) {

    var i, k, j;
    var fator;
    var n = A.length;
    // Escalonando a Matriz para todos os seus elementos
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            //Se o elemento estiver na diagonal principal sera o pivo
            if (i == j) {
                //Chama a função que zera a coluna da diagonal principal
                operating(A, i, j, Y)
            }
        }
    }
    //Tornando a matriz identidade e obtendo resultado final
    for (i = 0; i < Y.length; i++) {
        fator = 1 / A[i][i];
        A[i][i] *= fator;
        Y[i] *= fator;
    }
    //Checagem da Resposta
    console.log('A:', JSON.stringify(A));
    console.log('Y:', JSON.stringify(Y));
    //Retornando Y agora {X0,X1,X3,...} ==> Resultado da Operação 
    return Y;
}
/**
    *Função de Escalonamento  
    * @param
    * Matriz A Quadratica i.e. 2x2,3x3,4x4...
    * Vetor Y especifiando o Y do Método
    * int i: identificador da linha da diogonal principal
    * int j: identificador da coluna da diogonal principal
    */
function operating(A, i, j, Y) {
    var fator = 0;
    //percorre linhas
    for (var k = 0; k < A[0].length; k++) {
        //opera sobre as outras linhas mantendo a do atual elemento passado
        if (k != i) {
            // Se o elemento da linha a ser operada ja for zero não a nada a ser feito 
            if (A[k][j] != 0) {
                //Codigo abaixo zera a matriz seguindo metodo de gauss-jordan
                if (Math.abs(A[i][j]) > Math.abs(A[k][j])) {
                    fator = (A[i][j] / A[k][j]);

                    //percorre colunas da linha e multiplica pelo termo
                    for (var l = 0; l < A.length; l++) {
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

                    //percorre colunas da linha e multiplica pelo termo
                    for (var l = 0; l < A.length; l++) {
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
            }
        }
    }
}

// Exemplo 1
// Matrix = [[2, 3, -1], [1, 1, 1], [-1, -2, 3]];
// Y = [-7, 4, 15];
// Exemplo 2
// Matrix = [[1, 1], [2, 3]];
// Y = [5,13];
// Exemplo 3
Matrix = [[1, 2, 2], [0, 1, 1], [0, 9, 3]];
Y = [35, 17, 99];
gaussjordan(Matrix, Y);


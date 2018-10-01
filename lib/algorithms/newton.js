/**
 * Metodo de newton para sistemas não-lineares 
 * @param {string} f1 Primeira funcao
 * @param {string} f2 Segunda funcao
 * @param {float} xk1 x1 inicial
 * @param {float} xk2 x2 inicial
 * @param {float} tol Tolerancia
 */
function newtonMethod(f1, f2, xk1, xk2, tol) {
    /*
            Especificacao das Funções 
            --exp(2) -> e^2, exp(x) -> e^x
            --log(x) -> ln(x), log10(x) -> log(x)
            --cos(x),tan(1/2),sin(x)
        */

    // load math.js (using node.js)
    const math = require('mathjs');

    //****** TRATANDO AS FUNÇÕES
    // Adicionar a chamada do método correspondente de Math
    f1 = f1.replace(/(cos|sin|tan|exp|log10|log|log2)/, 'Math.$1');
    f2 = f2.replace(/(cos|sin|tan|exp|log10|log|log2)/, 'Math.$1');
    // Expressão regular para isolar a variável da função
    let regexVar = /([a-zA-Z][\w]*) ?([\+\-\/\*]|$|\))/

    // tentativa de identificar a variável
    let variavel = regexVar.exec(f);

    // Caso não encontre a variável
    if (!variavel) {
        console.log('Não foi possível encontrar a variável!');
    }

    // Remove símbolos inválidos da variável
    variavel = variavel[0].replace(/\W+/, '');

    // converte o erro para valor
    tol = parseFloat(tol).toFixed(20);
    console.log("tol: " + tol);
    // Criando uma arrow function a partir da string
    f = eval('(' + variavel + ') => ' + f);
    // Verficar se a função foi escrita corretamente
    try {
        f(1)
    } catch (Error) {
        console.log("A função não está correta!");
        return;
    }
    //FIM DO TRATAMENTO********

    //METODO DE NEWTON EM SI
    //definido valores iniciais
    let valorx = xk1;
    let valory = xk2;

    //Criando as matrizes J e F
    /*
        F = |f1(x,y)|
            |f2(x,y)|

        J = |(d/dx)*f1(x,y)  (d/dy)*f1(x,y)|
            |(d/dx)*f2(x,y)  (d/dy)*f2(x,y)|
    */
    let F = math.matrix([[f1(valorx, valory)], [f2(valorx, valory)]]);
    let J = math.matrix([[math.derivative(f1, 'x').eval({ x: valorx }, { y: valory }),
    math.derivative(f1, 'y').eval({ x: valorx }, { y: valory })], [math.derivative(f2, 'x').eval({ x: valorx }, { y: valory }),
    math.derivative(f2, 'y').eval({ x: valorx }, { y: valory })]]);

    // s = (J^-1)*(-F)
    let s = math.matrix(math.multiply(math.inv(J), math.multiply(-1, F)));

    //calculando os primeiros valores fazendo o valor inicial + o valor da matriz s correspondente
    let valorx_ln = valorx + math.subset(s, math.index(0, 0));
    let valory_ln = valory + math.subset(s, math.index(1, 0));

    //verificando a condiçao se o máximo entre o |s[0]| e |s[1]| for maior que a tolerancia e
    //se o maximo entre |f1(x,y)| e |f2(x,y)| for maior que a tolerancia
    while (Math.max(Math.abs(math.subset(s, math.index(0, 0))), Math.abs(math.subset(s, math.index(1, 0))) > tol) &&
        ((Math.max(f1(valorx_ln, valory_ln), f2(valorx_ln, valory_ln))) > tol)) {
        valorx = valorx_ln;
        valory = valory_ln;

        F = math.matrix([[f1(valorx, valory)], [f2(valorx, valory)]]);
        J = math.matrix([[math.derivative(f1, 'x').eval({ x: valorx }, { y: valory }), math.derivative(f1, 'y').eval({ x: valorx }, { y: valory })], [math.derivative(f2, 'x').eval({ x: valorx }, { y: valory }), math.derivative(f2, 'y').eval({ x: valorx }, { y: valory })]]);

        s = math.matrix(math.multiply(math.inv(J), math.multiply(-1, F)));

        valorx_ln = valorx + math.subset(s, math.index(0, 0));
        valory_ln = valory + math.subset(s, math.index(1, 0));
    }
    //nao sei se é para plotar esses dados, poderia retornar só o valor encontrado
}


newtonMethod()
// https://www.youtube.com/watch?v=-Ws7cEH7w_U
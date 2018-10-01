const math = require('mathjs')

function muller({ f, p0, p1, p2, tol, N }) {
    function f_(x) {
        let tmp = f.replace(/\*\*/g, '^')
        tmp = tmp.replace(/x/g, `(${x})`)
        try{
            return math.eval(tmp);
        }catch(e){
            return{
                error: 'Entrada invalida!'
            }
        }
    }

    //Saida
    let results = []

    let h1 = math.subtract(p1, p0);
    let h2 = math.subtract(p2, p1);
    let delta1 = math.divide(math.subtract(f_(p1), f_(p0)), h1); //f_(p1) = 1.1875, f_(p0) = 1.4375
    let delta2 = math.divide(math.subtract(f_(p2), f_(p1)), h2);
    let d = math.divide(math.subtract(delta2, delta1), math.add(h2, h1));
    let i = 1

    let b
    let E
    let h
    let p
    let Discriminant

    while (i <= N) {
        b = math.add(delta2, math.multiply(h2, d));
        Discriminant = math.sqrt(math.subtract(math.pow(b, 2), math.multiply(4, f_(p2), d)));

        let cmp = math.compare(math.abs(math.subtract(b, Discriminant)), math.abs(math.add(b, Discriminant)))
        if (cmp === -1) {
            E = math.add(b, Discriminant);
        } else {
            E = math.subtract(b, Discriminant);
        }

        h = math.divide(math.multiply(-2, f_(p2)), E)

        if (h === Infinity || h === -Infinity) {
            return {
                data: results
            }
        }

        p = math.add(p2, h)
        results.push(p)

        // Passo 6
        if (math.compare(math.abs(h), math.abs(tol)) == -1) {
            return {
                data: results
            }
        }

        // Passo 7 (Preparar para a proxima iteração)
        p0 = p1;
        p1 = p2;
        p2 = p;
        h1 = math.subtract(p1, p0);
        h2 = math.subtract(p2, p1);
        delta1 = math.divide(math.subtract(f_(p1), f_(p0)), h1);
        delta2 = math.divide(math.subtract(f_(p2), f_(p1)), h2);
        d = math.divide(math.subtract(delta2, delta1), math.add(h2, h1));
        i = i + 1;
    }
    return {
        error: `Metodo falhou apos ${N} iterações`
    }
}

//muller({f: "x^4-3*(x^3)+x^2+x+1", p0: 0.5, p1: -0.5, p2: 0, tol: 10e-10, N: 25})
//muller({ f: "x**2 - 6", p0: 0, p1: 3, p2: 6, tol: 10e-2, N: 12, })
//muller({ f: "x^2 - 4", p0: 0, p1: 3, p2: 6, tol: 10e-4, N: 12 })

export default muller
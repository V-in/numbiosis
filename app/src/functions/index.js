const secant = ({ f, x0, x1, tol, N }) => {
   /* 
      Params:
          f -> Função em string
          a -> Limite A
          b -> Limite B
          tol -> Tolerância de erro
          N -> Quantidade máxima de iterações
  */

  /*
      Especificacao das Funções 
      --exp(2) -> e^2, exp(x) -> e^x
      --log(x) -> ln(x), log10(x) -> log(x)
      --cos(x),tan(1/2),sin(x)
      
      Ex1:
          f -> -42 + 686.7*(1 - exp(-6*c/35))/c
          a -> 12
          b -> 16
          tol -> 1e-5
          N -> 100
      
      Ex2:
          f -> -0.016 + (x + 4)/((-2*x + 42)**2*(-x + 28))
          a -> 0
          b -> 20
          tol -> 5e-3
          N -> 100
      Ex3:
          f ->x * log10(x) -1
          x0 -> 2
          x1 -> 3
          tol -> 2e-10
          N -> 100
  */
  
  // Adicionar a chamada do método correspondente de Math
  f = f.replace(/(cos|sin|tan|exp|log|log10|log2)/, 'Math.$1');

  // Expressão regular para isolar a variável da função
  let regexVar = /([a-zA-Z][\w]*) ?([\+\-\/\*]|$|\))/
  
  // tentativa de identificar a variável
  let variavel = regexVar.exec(f);

  // Caso não encontre a variável
  if(!variavel) {
      console.log('Não foi possível encontrar a variável!');
  }

  // Remove símbolos inválidos da variável
  variavel = variavel[0].replace(/\W+/, '');

  // converte o erro para valor
  tol = parseFloat(tol).toFixed(20);
  console.log(tol);
  // Criando uma arrow function a partir da string
  f = eval('('+ variavel +') => ' + f);

  // Verficar se a função foi escrita corretamente
  try {
      f(1)
  } catch (Error) {
      console.log("A função não está correta!");
      return;
  }

  // Valor da função nos extremos
  let f_before = f(x0);
  console.log(f_before);
  let f_after = f(x1);
  console.log(f_after);
  // Verificando se os sinais do intervalo
  // if(fa*fb > 0) {
  //     console.log("A função deve ter sinais opostos em A e B!");
  //     return;
  // }

  /*
      Flag para previnir a obtenção da raiz antes do
      intervalo ter sido suficiente reduzido
  */
  let done = false;

  let i = 0;
  let fx;

  let x_s = [];
  let fx_s = [];

  let x

  while (!done && i < N) {
      x = ((x0 * f_after)-(x1 * f_before))/(f_after - f_before)
      fx = f(x);
      x_s.push(x);
      fx_s.push(fx);

      console.log("(x["+i+"] = "+ x +  ") f(x)=  " + fx +
       " | f("+i+")= " + f_before + " | f("+i+")= " + f_after);

      f_before = f_after;
      x0 = x1;
      f_after = fx;
      x1 = x;
      if(Math.abs(fx) < tol){
          done = true;
      }

      i++;
  }

  console.log("Solução Encontrada: " + x)
  /*
      retorno especifica:
          raiz encontrada: x
          todas as raizes obtidas pelas iterações: x_s
          todos os fs das razes obtidas: fx_s    
  */
  return { x, x_s, fx_s }
}

const muller = ({ f, a, b, c, tol, N }) => {
    /* 
        Params:
            f -> Função em string
            a -> Valor Inicial A
            b -> Valor Inicial B
            c -> Valor Inicial C
            tol -> Tolerância de erro
            N -> Quantidade máxima de iterações
    */

    // Adicionar a chamada do método correspondente de Math
    f = f.replace(/(cos|sin|tan|exp|log10|log|log2)/, 'Math.$1');

    // Expressão regular para isolar a variável da função
    let regexVar = /([a-zA-Z][\w]*) ?([\+\-\/\*]|$|\))/

    // tentativa de identificar a variável
    let variavel = regexVar.exec(f);

    // Caso não encontre a variável
    if(!variavel) {
        console.log('Não foi possível encontrar a variável!');
    }

    // Remove símbolos inválidos da variável
    variavel = variavel[0].replace(/\W+/, '');

    // converte o erro para valor
    tol = parseFloat(tol).toFixed(20);
    console.log("tol: "+tol);
    // Criando uma arrow function a partir da string
    f = eval('('+ variavel +') => ' + f);
 
    // Verficar se a função foi escrita corretamente
    try {
        f(1)
    } catch (Error) {
        console.log("A função não está correta!");
        return;
    }


    
    var i;
    var resultado;

    let x_s = [];
    let iteracao_de_recorrencia = [];


    for (i = 0;;i += 1)
    {
        var f0 = f(a);
        var f1 = f(b);
        var f2 = f(c);
        var h0 = b - a;
        var h1 = c - b;
        var d0 = (f1 - f0)/h0;
        var d1 = (f2 - f1)/h1;

        var c = f2;
        var a = (d1 - d0)/(h1 + h0);
        var b = a*h1 -d1;

        var r0 = ((-2*c) / (b + Math.abs(Math.sqrt(b*b - 4*a*c))));
        var r1 = ((-2*c) / (b - Math.abs(Math.sqrt(b*b - 4*a*c))));

        if (b > 0){
            resultado = c + r0;
        }
        else{
            resultado = c + r1;
        }

        var m = resultado*100;
        var n = c*100;
        m = Math.floor(m);
        n = Math.floor(n);
        if (m == n)
            break;

        a = b;
        b = c;
        c = resultado;

        x_s.push(resultado)
        
        if (i > N)
        {
            console.log("A Raiz nao pode ser encontrada utilizando o metodo de Muller")
            alert("A Raiz nao pode ser encontrada utilizando o metodo de Muller")
            break;
        }
    }
    if (i <= N){
        console.log("O valor da raiz eh " + resultado)
        alert("O valor da raiz eh " + resultado) 
        
    }
    
    for(i=0;i<=x_s.length;i++)
        iteracao_de_recorrencia.push(i)
        
    /*
        retorno especifica:
            raiz encontrada: x
            todas as raizes obtidas pelas iterações: x_s
            todos os fs das razes obtidas: fx_s    
    */
    return ({x: resultado, x_s: x_s, iteracao_de_recorrencia: iteracao_de_recorrencia})
}

const regula_falsi = ({f, a, b, tol, N}) => {
        /* 
            Params:
                f -> Função em string
                a -> Limite A
                b -> Limite B
                tol -> Tolerância de erro
                N -> Quantidade máxima de iterações
        */
    
        /*
            Especificacao das Funções 
            --exp(2) -> e^2, exp(x) -> e^x
            --log(x) -> ln(x), log10(x) -> log(x)
            --cos(x),tan(1/2),sin(x)
            
            Ex1:
                f -> -42 + 686.7*(1 - exp(-6*c/35))/c
                a -> 12
                b -> 16
                tol -> 1e-5
                N -> 100
            
            Ex2:
                f -> -0.016 + (x + 4)/((-2*x + 42)**2*(-x + 28))
                a -> 0
                b -> 20
                tol -> 5e-3
                N -> 100
            Ex3:
                f ->x * log10(x) -1
                x0 -> 2
                x1 -> 3
                tol -> 2e-10
                N -> 100
        */
        
        // Adicionar a chamada do método correspondente de Math
        f = f.replace(/(cos|sin|tan|exp|log10|log|log2)/, 'Math.$1');
    
        // Expressão regular para isolar a variável da função
        let regexVar = /([a-zA-Z][\w]*) ?([\+\-\/\*]|$|\))/
        
        // tentativa de identificar a variável
        let variavel = regexVar.exec(f);
    
        // Caso não encontre a variável
        if(!variavel) {
            console.log('Não foi possível encontrar a variável!');
        }
    
        // Remove símbolos inválidos da variável
        variavel = variavel[0].replace(/\W+/, '');
    
        // converte o erro para valor
        tol = parseFloat(tol).toFixed(20);
        console.log("tol: "+tol);
        // Criando uma arrow function a partir da string
        f = eval('('+ variavel +') => ' + f);
    
        // Verficar se a função foi escrita corretamente
        try {
            f(1)
        } catch (Error) {
            console.log("A função não está correta!");
            return;
        }
    
        // Valor da função nos extremos
        let fa = f(a);
        console.log("fa:"+fa);
        let fb = f(b);
        console.log("fb: "+fb);
        console.log('fa*fb:'+fa*fb);
        // Verificando se os sinais do intervalo
        if(fa*fb > 0) {
            console.log("A função deve ter sinais opostos em A e B!");
            return;
        }
    
        /*
            Flag para previnir a obtenção da raiz antes do
            intervalo ter sido suficiente reduzido
        */
        let done = false;
    
        let i = 0;
        let fx;
    
        let x_s = [];
        let fx_s = [];

        let x
    
        while (!done && i < N) {
            x = ((a * fb)-(b * fa))/(fb - fa)
            fx = f(x);
            x_s.push(x);
            fx_s.push(fx);
    
            console.log("(x["+i+"] = "+ x +  ") f(x)=  " + fx +
             " | f(a)= " + fa + " | f(b)= " + fb);
    
            if(fa*fx < 0) {
                b = x;
                fb = fx;
            } else {
                a = x;
                fa = fx;
            }if(Math.abs(fx) < tol){
                done = true;
            }
    
            i++;
        }
    
        console.log("Solução Encontrada: " + x);
        /*
            retorno especifica:
                raiz encontrada: x
                todas as raizes obtidas pelas iterações: x_s
                todos os fs das razes obtidas: fx_s    
        */
        return {x, x_s, fx_s}}

export {
  secant,
  regula_falsi,
  muller,
}

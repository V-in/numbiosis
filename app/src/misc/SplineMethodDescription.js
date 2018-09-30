import React from 'react'

const SplineMethodDescription = () => (
  <div>
    <h2>Método Spline - Not a Knot</h2>
    <div style={{textAlign: 'center'}}>
      <img src={require('../assets/images/secant_graph.png')} width={300}/>
    </div>
    <div style={{textAlign: 'justify'}}>
      <p>
        &emsp; Splines podem ser definidas como funções resultantes da junção de
        várias partes de polinômios. Na spline not-a-knot, S(x) não muda para 
        cúbica nos dois primeiros nós internos de cada extremo do intervalo ​ 
        x ​ 1 e ​ ​ x ​ n-1​ , como ocorre nos outros tipos onde a mudança ocorre em
        cada nó interno, para isso os polinômios dos dois primeiros intervalos 
        ([​ x ​ o​ ,​ x ​ 1​ ] e [​ x ​ 1​ ,​ x ​ 2​ ]) precisam ser os mesmos.
        A sua aplicação é feita da seguinte forma: impõe-se a continuidade
        da derivada terceira da spline em ​ x ​ 2 e em ​ x ​ n-1 e descarta-se os 
        extremos, efetivamente fazendo com que a spline se comporte como se 
        esses pontos não fossem mais nós.
      </p>
    </div>
  </div>
)

export default SplineMethodDescription

import React from 'react'
import PlotlyGraph from '../components/PlotlyGraph'

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.elements.fun.value)
}

const InputForm = () => (
    <form className='form top-gap' onSubmit={handleSubmit}>
        <input type='text' name='f' placeholder='Funcao' />
        <input type='text' name='a' placeholder='Funcao' />
        <input type='text' name='b' placeholder='Funcao' />
        <input type='text' name='c' placeholder='Funcao' />
        <input className="btn" type="submit" value="Confirmar" />
    </form>
)

export default () => {
    return (
        <div style={{ zIndex: 90 }}>
            <h1>Metodo da Secante</h1>
            <div className='flex-center'>
                <img src='/static/images/regula_falsi.png' width={400} />
            </div>
            <div style={{ textAlign: 'justify' }}>
                <p>
                    &emsp; Neste método partimos das duas aproximações iniciais <b>p0</b> e
                    <b> p1</b> e determinamos a reta que passa pelos pontos <b>(p0, f(p0)) </b>
                    e <b>(p1, f(p1))</b>. A intersecção desta reta com o eixo <b>x </b>
                    fornece o ponto <b>x2</b>. Em seguida é calculado uma nova aproximação
                    para a raiz a partir dos pontos <b>(p1, f(p1))</b> e <b>(x2, f (x2))</b>.
                    O processo se repete até que seja satisfeito o critério de parada.
               </p>
                <p>
                    &emsp; Observe que não necessitamos da característica que é fundamental
                    no método da falsa posição que é o teste do sinal. A raiz não necessita
                    estar entre as duas aproximações iniciais <b>(p0 e p1)</b>. A convergência
                    deste método é mais rápido que o da falsa posição.
               </p>
            </div>
            <h2>Aplicação</h2>
            <InputForm />
        </div>
    )
}

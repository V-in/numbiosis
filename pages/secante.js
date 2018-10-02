import React from 'react'
import GenericMethod from '../components/GenericMethod'
import PlotlyGraph from '../components/PlotlyGraph'
import secant from '../lib/algorithms/secant'

export default () => (
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
        <GenericMethod
            fields={fields}
            f={secant}
            renderResult={renderResult}
        />
    </div>
)

const renderResult = ({ x_s, fx_s }) => (
    <div className='flex-center'>
        <PlotlyGraph
            data={[
                {
                    x: x_s,
                    y: fx_s,
                    mode: 'markers',
                    type: 'scatter',
                    marker: {
                        size: 8,
                        color: x_s.map((elem, i) => i)
                    },
                },
            ]}
            layout={{
                title: 'Resultado',
                width: 600,
                height: 400,
            }}
        />
    </div>
)


const fields = [
    {
        name: 'f',
        placeholder: 'x**2 - 6',
        label: 'Função'
    },
    {
        name: 'x0',
        placeholder: '0',
        label: 'Primeiro X'
    },
    {
        name: 'x1',
        placeholder: '4',
        label: 'Segundo X',
    },
    {
        name: 'tol',
        placeholder: '2e-10',
        label: 'Tolerância',
    },
    {
        name: 'N',
        placeholder: '5',
        label: 'Iterações'
    },
]



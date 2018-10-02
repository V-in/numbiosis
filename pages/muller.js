import GenericMethod from '../components/GenericMethod'
import { chunk } from 'lodash'
import muller from '../lib/algorithms/muller'

export default () => (
    <div>
        <h1>Metodo de Muller</h1>
        <div style={{ textAlign: 'center' }}>
            <img src='/static/images/muller_graph.png' width={300} />
        </div>
        <div style={{ textAlign: 'justify' }}>
            <p>
                &emsp; O Método de Muller é uma técnica modificada do Método da Secante,
                 mas que ao invés de estimar a raiz de uma função prolongando uma reta
                 através de dois pontos, utiliza-se de uma parábola através de três
                 pontos para aproximação da derivada.
      </p>
            <p>
                &emsp; Embora este algoritmo seja válido na busca de raízes de polinômios
                 (também pode aproximar raízes complexas), ele pode ser utilizado para
                 encontrar raízes de outras classes de funções, da mesma forma que o
                 Método da Secante.Assim, o método converge relativamente rápido em
                 geral, além de que a estimativa para a raiz é melhor pelo Método de
                 Muller do que pelo das Secantes.
      </p>
        </div>
        <h2>Aplicação</h2>
        <GenericMethod
            f={muller}
            renderResult={renderResult}
            fields={fields} />
    </div>
)

const renderResult = ({ data }) => (
    <table className='table'>
        <caption>Resultado</caption>
        <thead>
            <tr>
                <th>Iteracao</th>
                <th>Real</th>
                <th>Imaginario</th>
            </tr>
        </thead>
        <tbody>
            {
                chunk(data).map((elem, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {index}
                            </td>
                            <td>{elem[0]}</td>
                            <td>{elem[1] || 0}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
)

const fields = [
    {
        name: 'f',
        placeholder: 'x**2 - 6',
        label: 'Função',
    },
    {
        name: 'p0',
        placeholder: '0',
        label: 'Primeiro X',
    },
    {
        name: 'p1',
        placeholder: '4',
        label: 'Segundo X',
    },
    {
        name: 'p2',
        placeholder: '6',
        label: 'Terceiro X',
    },
    {
        name: 'tol',
        placeholder: '2e-10',
        label: 'Tolerância',
    },
    {
        name: 'N',
        placeholder: '5',
        label: 'Iterações',
    },
]
import GenericMethod from '../components/GenericMethod'

export default () => (
    <div style={{ zIndex: 90 }}>
        <h1>Interpolaçao por spline cúbica</h1>
        <div style={{ textAlign: 'justify' }}>
            <p>
                &emsp; Splines podem ser definidas como funções resultantes da junção de
                várias partes de polinômios. Na spline not-a-knot, S(x) não muda para
                cúbica nos dois primeiros nós internos de cada extremo do intervalo
                x ​ 1 e ​ ​ x ​ n-1​ , como ocorre nos outros tipos onde a mudança ocorre em
                cada nó interno, para isso os polinômios dos dois primeiros intervalos
                ([​ x ​ o​ ,​ x ​ 1​ ] e [​ x ​ 1​ ,​ x ​ 2​ ]) precisam ser os mesmos.
                A sua aplicação é feita da seguinte forma: impõe-se a continuidade
                da derivada terceira da spline em ​ x ​ 2 e em ​ x ​ n-1 e descarta-se os
                extremos, efetivamente fazendo com que a spline se comporte como se
                esses pontos não fossem mais nós.
            </p>
        </div>
        <h2>Aplicação</h2>
        <GenericMethod />
    </div>
)

const mapResultToData = (x_s, y_s) => {
    let data = [
        {
            x: x_s,
            y: y_s,
            name: `Entradas`,
            mode: 'markers',
            type: 'scatter',
            marker: { color: 'black' },
        },
        {
            x: math.range(x_s[0], x_s[x_s.length - 1], getPrecision(x_s))._data,
            y: sample(x_s),
            name: `Spline`,
            type: 'scatter',
            mode: 'lines+points',
            marker: { color: 'red' },
        }
    ]
    return data
}

const renderResults = (results) => (

)

const fields = [

]
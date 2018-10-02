import MethodsLayout from "../layouts/MethodsLayout";
import GenericMethod from "../components/GenericMethod";


export default () => (
    <MethodsLayout>
        <h2>Método da Gauss Jordan</h2>
        <div style={{ textAlign: 'center' }}>
            <img src='/static/images/secant_graph.png' width={300} />
        </div>
        <div style={{ textAlign: 'justify' }}>
            <p>
                &emsp; Método de escalonamento complementar ao de Gauss, onde todos os
                elementos fora da diagonal principal são nulos. Este método pode ser
                utilizado para reduzir qualquer matriz á forma escalonada reduzida por
                linhas, realizando operações na matriz aumentada do sistema. A vantagem
                de utilizar Gauss-Jordan é que em um sistema onde a matriz aumentada
                esta na forma escalonada reduzida a solução é imediata, quando
                utilizamos um sistema onde a matriz está apenas na forma escalonada é
                necessário que se faça uma série de substituições para chegar ao
                resultado final. Este método requer 2^n2 operações por iteração.
            </p>
        </div>
        <h2>Aplicaçao</h2>
        <GenericMethod
            fields={fields}

            renderResult={renderResult}
        />
    </MethodsLayout>
)

const renderResult = () => (
    <span>Resultado</span>
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
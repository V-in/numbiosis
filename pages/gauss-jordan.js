import MethodsLayout from "../layouts/MethodsLayout";
import GenericMethod from "../components/GenericMethod";
import MatrixInput from "../components/MatrixInput"

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
            renderForm={renderForm}
            f={f}
            renderResult={renderResult}
        />
    </MethodsLayout>
)

const renderResult = (result) => (
    <span>{JSON.stringify(result)}</span>
)

const f = (x) => x

const renderForm = (onSubmit) => (
    <MatrixInput rows={3} columns={3} onSubmit={onSubmit} />
)

import MethodsLayout from "../layouts/MethodsLayout";
import GaussJordan from '../components/GaussJordan'
import Mathjax from '../components/Mathjax'

export default () => (
    <MethodsLayout>
        <h2>Método da Gauss Jordan</h2>
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
                resultado final. Este método requer  &nbsp;

                <Mathjax.Provider>
                    <Mathjax.Node inline formula={String.raw` 2^{2n} `} />
                </Mathjax.Provider>

                &nbsp;
                operações por iteração.

            </p>
        </div>
        <h2>Aplicação</h2>
        <GaussJordan />
    </MethodsLayout>
)


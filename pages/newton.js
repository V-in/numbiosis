import MethodsLayout from "../layouts/MethodsLayout";


export default () => (
    <MethodsLayout>
        <div>
            <h2>Método da Newton</h2>
            <div style={{ textAlign: 'justify' }}>
                <p>
                    &emsp; Este método determina, a cada iteração, a solução da aproximação
                    linear da função. A cada iteração o método de Newton requer a avaliação
                    da matriz Jacobiana e a resolução de um sistema linear. A vantagem de
                    utilizá-lo é que, sob certar condições temos que a aproximação inicial
                    <b>(​ x0​ )</b>, a função <b>F</b> e a matriz jacobiana <b>J</b> , a
                    sequência produzida pelo método converge para F(x) = 0, com uma taxa
                    quadrática,o problema é este método é computacionalmente caro.
                </p>
            </div>
        </div>
    </MethodsLayout>
)
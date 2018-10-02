import MethodsLayout from "../layouts/MethodsLayout";


export default () => (
    <MethodsLayout>
        <div>
            <h1>Introdução</h1>
            <div style={{ textAlign: 'center' }}>
                <img avatar src='/static/images/numbiosis-logo.png' height={320} />
            </div>
            <div>
                <p>
                    &emsp;O projeto Numbiosis tem como objetivo facilitar o aprendizado e utilização de métodos
                    numéricos atráves da introdução de uma interface minimalista e funcional que apresenta
                    explanação de múltiplos métodos de análise numérica e possibilidade de aplicação dos mesmos.
            </p>
                <p>
                    &emsp;Para utilizar dessa aplicação escolha um método na aba lateral direita. Para em seguida
                    executá-la basta escolher a opção Aplicação; na nova tela serão apresentadas as entradas necessarias
                    como um formulário; ao preenche-lo clique submeter.
            </p>

            </div>
        </div>
    </MethodsLayout>

)

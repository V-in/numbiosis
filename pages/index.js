import MethodsLayout from "../layouts/MethodsLayout";
import { withRouter } from 'next/router'



class Home extends React.Component {
    componentDidMount() {
        this.props.router.prefetch('/secante')
        this.props.router.prefetch('/falsa-posicao')
        this.props.router.prefetch('/gauss-jordan')
        this.props.router.prefetch('/spline-cubica')
        this.props.router.prefetch('/newton')
        this.props.router.prefetch('/about')
    }

    render() {
        return (
            <MethodsLayout>
                <div>
                    <h1>Introdução</h1>
                    <div style={{ textAlign: 'center' }}>
                        <img src='/static/images/numbiosis-logo.png' height={320} />
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
    }
}
export default withRouter(Home) 
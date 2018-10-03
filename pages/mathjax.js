import { Provider, Node } from '../components/Mathjax'
import MethodsLayout from '../layouts/MethodsLayout'

//Exemplo de entrada
const initial = [[1, 2, 3, 5], [3, 4, 5, 1], [1, 2, 3, 5]]

//TODO: Funçao que retorna latex de uma matriz a partir de um objeto do tipo [[float]] - array de arrays
const mapDataToArgs = (data = initial) => {
    return `
        a=3
    `
}

export default () => {
    return (
        <MethodsLayout>
            <div style={{ marginTop: 4 }}>
                <Provider>
                    Olha essa bosta de mathjax: <Node inline formula={mapDataToArgs()} />
                </Provider>
            </div>
        </MethodsLayout>
    )
}
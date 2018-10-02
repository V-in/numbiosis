import Mathjax from 'react-mathjax'
import MethodsLayout from '../layouts/MethodsLayout'

//Exemplo de entrada
const initial = [[1, 2, 3], [3, 4, 5], [1, 2, 3]]

//TODO: Funçao que retorna latex de uma matriz a partir de um objeto do tipo [[float]] - array de arrays
const mapDataToArgs = (data = initial) => {
    `
        a=3
    `
}

export default () => (
    <MethodsLayout>
        <Mathjax.Provider>
            Olha essa bosta de mathjax: <Mathjax.Node inline formula={mapDataToArgs()} />
        </Mathjax.Provider>
    </MethodsLayout>

)
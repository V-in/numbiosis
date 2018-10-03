import Mathjax from 'react-mathjax'
import MethodsLayout from '../layouts/MethodsLayout'

//Sample input
const initial = {
    Matrix: [[1, 2, 3], [3, 4, 5], [1, 9, 2]],
    Y: [1, 2, 10]
}

/**
 * Returns Latex representation of a quadratic coefficient matrix and its variables
 * @param {{Matrix: [[]], Y: [] }} data
 */
const mapDataToArgs = (data = initial) => {
    //Zip matrices
    var matrix = data.Matrix
    data.Y.map((elem, index) => {
        matrix[index].push(elem)
    })

    let string = String.raw`\begin{array}`
    
    //{cc|c}a & b\\c & d
    let parcial = String.raw`{`
    //quantidade de colunas data[0].length
    for(let i=0; i < matrix[0].length - 1; i = i+ 1 ){
 
        parcial = parcial + String.raw`c`
        
    }
    parcial = parcial + String.raw`|c}`

    
    //quantidade de linhas data.length
    for(let i = 0; i< matrix.length; i = i + 1){
        for(let j = 0; j< matrix[0].length; j = j + 1){
            parcial = parcial + JSON.stringify(matrix[i][j])
            if (j != (matrix[0].length - 1))
                parcial = parcial + String.raw` & `    
        }
        if(i != (matrix.length-1)){
            parcial = parcial + String.raw` \\ `
        }
    }  
    

    let end = String.raw`\end{array}`

    console.log(string+parcial+end)

    let incapsulate = string + parcial + end;

    incapsulate = String.raw`\begin{bmatrix}` + incapsulate + String.raw`\end{bmatrix}`

    return incapsulate

}

export default () => (
    <MethodsLayout>
        <Mathjax.Provider>
            Alguma coisa em cima <br/>
            Olha esse teste de mathjax: <Mathjax.Node inline formula={mapDataToArgs()} />
        </Mathjax.Provider>
    </MethodsLayout>

)
import Matrixinput from '../components/MatrixInput'
import Mathjax from 'react-mathjax'
import toLatex from '../lib/utils/toLatex';

const callback = (values) => {
    console.log('Values: ', JSON.stringify(values))
}

export default () => (
    <div className='top-gap container'>
        <div>
            <h5>Form test:</h5>
            <div className='flex-left'>
                <Matrixinput rows={2} columns={3} onSubmit={callback} />
            </div>
            <h5>Mathjax test</h5>
            <div className='flex-left'>
                <Mathjax.Provider>
                    <Mathjax.Node formula={toLatex({ "matrix": [[1, 0], [0, 1]], "y": [2, 7] })} />
                </Mathjax.Provider>
            </div>
        </div>
    </div>
)
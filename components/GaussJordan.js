import React from 'react'
import GenericMethod from './GenericMethod'
import MatrixInput from './MatrixInput'
import Mathjax from 'react-mathjax'
import gaussjordan from '../lib/algorithms/gauss_jordan'
import toLatex from '../lib/utils/toLatex';

class GaussJordan extends React.Component {
    state = {
        size: 2
    }

    _onChange = (event) => {
        event.preventDefault()
        this.setState({
            size: parseInt(event.target.value)
        })
    }

    render() {
        return (
            <div className='top-gap'>
                <form className='form'>
                    <label>Numero de equaçoes</label>
                    <input type='number' value={this.state.size} onChange={this._onChange} />
                </form>
                <GenericMethod
                    renderForm={renderForm(this.state.size)}
                    f={gaussjordan}
                    renderResult={renderResult}
                    mapFormToArgs={mapFormToArgs}
                />
            </div>
        )
    }
}

const renderResult = (result) => (
    <div>
        <h5>Passo-a-passo</h5>
        <Mathjax.Provider>
            {
                result.map(elem => <Mathjax.Node formula={toLatex(JSON.parse(JSON.stringify(elem)))} />)
            }
        </Mathjax.Provider>
    </div>
)

const mapFormToArgs = (result) => {
    console.log('resultado: ', result)
    let A = result.map(elem => elem.slice(0, -1))
    let Y = result.flatMap(elem => elem.slice(-1))
    return {
        A,
        Y
    }
}

const renderForm = (rows) => (onSubmit) => (
    <MatrixInput rows={rows} columns={rows + 1} onSubmit={onSubmit} />
)

export default GaussJordan
import React from 'react'
import GenericMethod from './GenericMethod'
import MatrixInput from './MatrixInput'
import Mathjax from 'react-mathjax'
import gaussjordan from '../lib/algorithms/gauss_jordan'
import toLatex from '../lib/utils/toLatex';

class GaussJordan extends React.Component {
    state = {
        size: 3,
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
                    <label>Número de equações</label>
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
                result.map((elem, index) => (
                    <React.Fragment>
                        <h6>{(index == result.length - 1) ? 'Resultado:' : `Passo ${index + 1}:`}</h6>
                        <Mathjax.Node key={index} formula={toLatex(JSON.parse(JSON.stringify(elem)))} />
                    </React.Fragment>
                ))
            }
        </Mathjax.Provider>
    </div>
)

const mapFormToArgs = (result) => {
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
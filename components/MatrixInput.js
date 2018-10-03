import React from 'react'
import { range } from 'lodash'

/**
 * Get user input as a matrix of specified dimensions
 * @param {integer} props.rows Number of rows
 * @param {integer} props.columns Number of columns
 * @param {function} props.onSubmit OnSubmit callback to form
 */
class MatrixInput extends React.Component {
    inputs = []

    componentDidMount = () => {
        let {
            rows,
            columns
        } = this.props
        this.inputs = range(0, rows).map(_i => (range(0, columns, _j => 0)))
    }

    _renderRow = (size, i) => (
        <tr key={i}>
            {
                range(0, size).map((_, j) => (
                    <td key={j} >
                        <input
                            size='2'
                            lang='en'
                            placeholder='0'
                            type='number'
                            step='any' i={i} j={j} onChange={this._handleChange} />
                    </td>
                ))
            }
        </tr>
    )

    _renderMatrix = () => (
        <form className='form' onSubmit={this._handleSubmit}>
            <table className='table'>
                <tbody>
                    {range(0, this.props.rows).map((_, i) => (
                        this._renderRow(this.props.columns, i)
                    ))}
                </tbody>
            </table>
            <input size='3' className='btn btn-primary' type='submit' value='CALCULAR' />
        </form>
    )

    _handleChange = (event) => {
        let i = event.target.attributes.i.value
        let j = event.target.attributes.j.value
        let value = parseFloat(event.target.value)
        this.inputs[i][j] = value
    }

    _handleSubmit = (event) => {
        event.preventDefault()
        console.log('inputs: ', this.inputs)
        this.props.onSubmit(this.inputs)
    }


    render() {
        let {
            rows,
            columns
        } = this.props
        return (
            <div>
                {
                    this._renderMatrix(rows, columns)
                }
            </div>
        )
    }
}

export default MatrixInput
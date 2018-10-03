import React from 'react'
import PropTypes from 'prop-types'

class GenericMethod extends React.Component {
  state = {
    success: false,
  }

  _handleChange = (event) => {
    event.preventDefault()
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  _onSubmit = (event) => {
    event.preventDefault()
    let { mapFormToArgs } = this.props
    try {
      this.setState({
        result: this.props.f((mapFormToArgs == undefined) ? this.state : mapFormToArgs(this.state))
      }, this.setState({ success: true }))
    }
    catch (error) {
      console.warn(error)
    }
  }

  _renderPlotPage = () => {
    let {
      fields,
      renderResult,
    } = this.props

    return (
      <React.Fragment>
        <div>
          <form onSubmit={this._onSubmit} className='form' action='#'>
            {
              fields.map((elem, index) => (
                <div key={index} className='flex-left units-gap'>
                  <label className='unit-0 text-right' > {elem.label}</label>
                  <div className='unit'>
                    <input key={index}
                      type='text'
                      onChange={this._handleChange}
                      placeholder={elem.placeholder}
                      name={elem.name} />
                  </div>
                </div>
              ))
            }
            <input className='btn btn-primary' type='submit' value='CALCULAR' />
          </form>
        </div>
        {
          this.state.success &&
          <div>
            {
              (renderResult === undefined) ? this._renderPlot() : renderResult(this.state.result)
            }
          </div>
        }
      </React.Fragment >
    )
  }

  _renderPlot = () => (
    this.state.success &&
    <div>
      <b>Resultado final:</b> {this.state.result.x}
    </div>
  )

  render = () => {
    return (
      this._renderPlotPage()
    )
  }
}

GenericMethod.propTypes = {
  //Declaraçao dos campos que devem estar presentes no formulario de entrada
  fields: PropTypes.arrayOf(PropTypes.shape({
    //Nome interno do campo
    name: PropTypes.string,
    //Placeholder 
    placeholder: PropTypes.string,
    //Label acima da entrada
    label: PropTypes.string
  })),
  mapFormToArgs: PropTypes.func,
  //Algoritimo a ser chamado
  f: PropTypes.func,
  //Funcao que renderiza o resultado do algoritmo
  renderResult: PropTypes.func
}

export default GenericMethod


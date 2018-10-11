import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {[Field]} fields Array de fields 
 * @param {string} field.name Nome do campo
 * @param {string} field.placeholder Placeholder do campo
 * @param { string } field.label Label do campo
 * @param {(Object) => Object} f Funcao que implementa o metodo
 * @param {(Object) => Object} mapFormToArgs Funcao que traduz entradas do usuario para um objeto que a funcao que implementa o metodo entende 
 * @param {(Object) => Element} renderResult Funcao que renderiza o resultado da chamada de f
 * @param {(Fields) => Element } renderForm Funcao opcional que renderiza formulario personalizado
 * @param {(Object) => Object} onSubmit Funcao que é chamada quando formulario personalizado é submetido, deve retornar seu argumento de entrada como ultimo passo
 */
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
    let {
      f,
      mapFormToArgs,
    } = this.props
    //If using default result renderer, set state and call 
    this.setState({
      result: f((mapFormToArgs == undefined) ? this.state : mapFormToArgs(this.state))
    }, this.setState({ success: true }))
  }

  _onCustomSubmit = (data) => {
    let {
      f,
      mapFormToArgs
    } = this.props
    this.setState({
      result: f((mapFormToArgs == undefined) ? data : mapFormToArgs(data))
    }, this.setState({ success: true }))
  }

  _renderForm = () => {
    let {
      renderForm,
      onSubmit,
      fields
    } = this.props
    //If no form renderer was given, render default form
    if (renderForm == undefined) {
      return (
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
      )
    } else {
      return renderForm(this._onCustomSubmit)
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
          {this._renderForm()}
        </div>
        {
          this.state.success &&
          <div>
            {
              //Use user defined or default result renderer
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
  //Middleware entre saida do formulario e entrada do algoritmo. Use para tratamento de entrada
  mapFormToArgs: PropTypes.func,
  //Algoritimo a ser chamado
  f: PropTypes.func,
  //Funcao opcional que renderiza o resultado do algoritmo de form costumizada
  renderResult: PropTypes.func,
  //Funcao opcional que renderiza formulario personalizado. 
  renderForm: PropTypes.func,
  //Callback de envio de formulario personalizado
  onSubmit: PropTypes.func
}

export default GenericMethod


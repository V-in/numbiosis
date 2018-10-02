import React from 'react'
import PropTypes from 'prop-types'

class GenericMethod extends React.Component {
  state = {
    success: false,
  }

  handleChange = (event) => {
    event.preventDefault()
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = (event) => {
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

  renderPlotPage = () => {
    let {
      fields,
      renderResult,
    } = this.props

    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.onSubmit} className='form' action='#'>
            {
              fields.map((elem, index) => (
                <div key={index} className='flex-left units-gap'>
                  <label className='unit-0 text-right' > {elem.label}</label>
                  <div className='unit'>
                    <input key={index}
                      type='text'
                      onChange={this.handleChange}
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
              (renderResult === undefined) ? this.renderPlot() : renderResult(this.state.result)
            }
          </div>
        }
      </React.Fragment >
    )
  }

  renderPlot = () => (
    this.state.success &&
    <div>
      <b>Resultado final:</b> {this.state.result.x}
    </div>
  )

  render = () => {
    return (
      this.renderPlotPage()
    )
  }
}

GenericMethod.propTypes = {
  //Fields required by the method. These will be visible under state after submission
  fields: PropTypes.arrayOf(PropTypes.shape({
    //Name of the field in state
    name: PropTypes.string,
    //Placeholder
    placeholder: PropTypes.string,
    //Label above input
    label: PropTypes.string
  })),
  mapFormToArgs: PropTypes.func,
  //Function that will be called with state as input, 
  f: PropTypes.func,
  //Overloads renderPlot. Use this if you want to render a costum component when result is available
  //This function will be called with f(fields) as parameter
  renderResult: PropTypes.func
}

export default GenericMethod


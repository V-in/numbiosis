import React from 'react'
import PropTypes from 'prop-types'
import { chunk } from 'lodash'
import { PlotlyGraph } from '../'

class GenericMethod extends React.Component {
  state = {
    success: false,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onSubmit = () => {
    try{
      this.setState({
        result: this.props.f(this.state)
      }, this.setState({success: true}))
    }
    catch(error) {
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
        <div vertical>
          <form onSubmit={this.onSubmit} >
            {
              fields.map((outer, i) => (
                  outer.map( ({ label, name, placeholder, options}, j) => (
                    <orm.Field key={j} required control={Input} {...options} fluid label={label} name={name} placeholder={placeholder} onChange={this.handleChange}/>
                  ))
              ))
            }
            <Form.Button primary type='submit' content='CALCULAR'/>
          </Form>
        </div>
        {
          this.state.success &&
          <div>
            {
              (renderResult === undefined)?  this.renderPlot() : renderResult(this.state.result)
            }
          </div>
        }
      </React.Fragment>
    )
  }

  renderPlot = () => (
    this.state.success && 
    <div>
      <PlotlyGraph x_s={this.state.result.x_s} fx_s={this.state.result.fx_s} title='Resultado'/>
      <b>Resultado final:</b> {this.state.result.x}
    </div>
  )

  render = () => {
    return (
      <TabularPage tabs={[
        {
          name: 'Descrição',
          content: this.props.description
        },
        {
          name: 'Aplicação',
          content: this.renderPlotPage
        }
      ]}/>
    )
  }
}

GenericMethod.propTypes = {
  //Title of the implemented method
  title: PropTypes.string,
  //Element to render at method description page
  description: PropTypes.element,
  //Fields required by the method. These will be visible under state after submission
  fields: PropTypes.arrayOf(PropTypes.shape({
    //Name of the field in state
    name: PropTypes.string,
    //Placeholder
    placeholder: PropTypes.string,
    //Label above input
    label: PropTypes.string
  })),
  //Function that will be called with user inputs as argument. It should return {x, x_s, fx_s}
  f: PropTypes.func,
  //Overloads renderPlot. Use this if you want to render a costum component when result is available
  //This function will be called with f(fields) as parameter
  renderResult: PropTypes.func
}

export default GenericMethod


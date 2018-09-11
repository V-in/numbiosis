import React from 'react'
import { PlotlyGraph } from '../'
import { GenericMethod } from '../'
import { secant } from '../../functions'
import SecantMethodDescription from '../../misc/SecantMethodDescription'
import {
  Form,
  Segment,
  Input,
  Button
} from 'semantic-ui-react'

class SecantMethod extends React.Component {
  render() {
    return (
      <GenericMethod title='Método da Secante'
                     description={<SecantMethodDescription/>}
                     f={secant}
                     fields={fieldsConfig}/>
    )
  }
}

const fieldsConfig = [
  {
    name: 'f',
    placeholder: 'x**2 - 6',
    label: 'Função'
  },
  {
    name: 'x0',
    placeholder: '0',
    label: 'Primeiro X'
  },
  {
    name: 'x1',
    placeholder: '4',
    label: 'Segundo X',
  },
  {
    name: 'tol',
    placeholder: '2e-10',
    label: 'Tolerância',
  },
  {
    name: 'N',
    placeholder: '5',
    label: 'Iterações'
  },
]

export default SecantMethod


import React from 'react'
import { GenericMethod } from 'components'
import { secant } from 'functions'
import NewtonMethodDescription from 'misc/NewtonMethodDescription'

class NewtonMethod extends React.Component {
  render() {
    return (
      <GenericMethod title='Método de Newton'
                     description={<NewtonMethodDescription/>}
                     f={secant}
                     fields={fieldsConfig}/>
    )
  }
}

const fieldsConfig = [
  {
    name: 'f',
    placeholder: 'x**2 + y - 6',
    label: 'Função 1 de duas variáveis'
  },
  {
    name: 'x0',
    placeholder: '0',
    label: 'Função 2 de duas variáveis'
  },
  {
    name: 'x1',
    placeholder: '4',
    label: 'Primeiro valor para X',
  },
  {
    name: 'x1',
    placeholder: '4',
    label: 'Primeiro valor para Y',
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

export default NewtonMethod


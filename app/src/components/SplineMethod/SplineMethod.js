import React from 'react'
import { GenericMethod } from 'components'
import { secant } from 'functions'
import SplineMethodDescription from 'misc/SplineMethodDescription'

class SplineMethod extends React.Component {
  render() {
    return (
      <GenericMethod title='Método Spline'
                     description={<SplineMethodDescription/>}
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

export default SplineMethod


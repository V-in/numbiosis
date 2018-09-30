import React from 'react'
import { TabularPage } from 'components'
import { SecantMethod } from 'components'
import { MullerMethod } from 'components'
import { RegulaFalsiMethod } from 'components'

import { NewtonMethod } from 'components'
import { GaussJordanMethod } from 'components'
import { SplineMethod } from 'components'

import Numbiosis from 'misc/Numbiosis'
import About from 'misc/About'

const routes = [
  {
    sidebarName: 'Home',
    path: '/',
    options: {
      exact: true
    },
    component: () => <TabularPage tabs={[
      {
        name: 'Numbiosis',
        content: <Numbiosis/>
      },
      {
        name: 'Autores',
        content: <About/>
      }  
    ]}/>
  },
  {
    sidebarName: 'Método da Falsa Posição',
    path: '/falsa_posicao',
    component: () => <RegulaFalsiMethod />
  },
  {
    sidebarName: 'Método Secante',
    path: '/secante',
    component: () => <SecantMethod />
  },
  {
    sidebarName: 'Método Muller',
    path: '/muller',
    component: () => <MullerMethod />
  },
  {
    sidebarName: 'Método Gauss-Jordan',
    path: '/gauss_jordan',
    component: () => <GaussJordanMethod />
  },
  {
    sidebarName: 'Método Newton',
    path: '/newton',
    component: () => <NewtonMethod />
  },
  {
    sidebarName: 'Método Spline',
    path: '/spline',
    component: () => <SplineMethod />
  },
  ///*
]

export default routes

import { useRoutes } from 'react-router-dom'
import Home from './pages/home/Home'
import React from 'react'
import Admin from './layout/Admin'
import NaoLocalizado404 from './pages/naoLocalizado404/NaoLocalizado404'
import Logar from './pages/logar/Logar'
import { verificarChave } from './auth/verificaChaveDeAutorizacao'
import NaoAutorizado401 from './pages/naoAutorizado401/NaoAutorizado401'

export default function Routes () {
  const routing = useRoutes([
    {
      path: '/admin',
      element: <Admin />,
      children: [
        {
          path: 'home',
          element: verificarChave('KOA') ? <Home /> : <NaoAutorizado401 />
        }
      ]
    },
    {
      path: '/',
      element: <Admin />,
      children: [
        { path: '/', element: <Logar /> },
        { path: '*', element: <NaoLocalizado404 /> }
      ]
    }
  ])

  return routing
}

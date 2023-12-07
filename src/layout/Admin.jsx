import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import componentKey from '../key/keyComponent'

export default function Admin () {
  return (
    <React.Fragment key={componentKey}>
      <Navbar />
      <Outlet />
    </React.Fragment>
  )
}

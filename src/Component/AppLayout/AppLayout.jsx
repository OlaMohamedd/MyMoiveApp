import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Navbar/navbar'


export default function AppLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

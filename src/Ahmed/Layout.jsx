import React from 'react'
import { Outlet } from 'react-router-dom'
import Navv from './Navv'
import Footer from './Footer'


export default function Layout() {
  return <>
  <Navv/>
  <Outlet></Outlet>
  <Footer/>
  </>
}

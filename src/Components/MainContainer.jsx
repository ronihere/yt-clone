import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const MainContainer = () => {
// overflow-y-auto
  return (
    <div className='bg-black text-white h-screen overflow-hidden'>
      <Header/>
    <div className='flex '>
        <SideNav />
      <Outlet/>
    </div>
    </div>
  )
}

export default MainContainer

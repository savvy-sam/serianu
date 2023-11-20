import React from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumb from '../Home/Breadcrumb/Breadcrumb'
// import NavBar from '../NavBar'
import NavBarDuplicate from '../NavBarDuplicate'
import IMAGES from '../../static/images'

const HomeLayout = () => {
  return (
    <div className='flex flex-col '>
      <NavBarDuplicate />
      <div
        className='bg-cover bg-center overflow-hidden min-h-[calc(100vh-50px)]'
        style={{ backgroundImage: `url(${IMAGES.backgroundImage})` }}
      >
        <div>
          <Breadcrumb />
        </div>
        <div className='flex-1 rounded-lg'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default HomeLayout

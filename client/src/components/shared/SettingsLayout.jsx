import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useMatch, useRouteMatch } from 'react-router-dom'
import GrandChildRoutes from '../Home/GrandChildRoutes/GrandChildRoutes'
import GrandChildRouteChild from '../Home/GrandChildRoutes/GrandChildRouteChild'

const SettingsLayout = ({ url, children, name }) => {
  const [shouldRenderCards, setShouldRenderCards] = useState(false)

  const location = useLocation()

  const checkChildCount = link => {
    const childCount = link.split("/").length
    console.log(childCount)
    console.log(link.split("/"))
    return childCount
  }

  const childCount = checkChildCount(location.pathname)

  // useEffect(() => {
  //   console.log("Its called here...")
  //   const childCount = checkChildCount(location.pathname)
  //   if (childCount === 4) {
  //     if (location.pathname === url) {
  //       setShouldRenderCards(true)
  //     }
  //   }
  // }, [location.pathname])

  return <div className='py-1 px-6 h-full overflow-hidden'>

    {childCount === 4 && <>
      {children.length > 0 && <div className='w-full bg-white p-[30px]'>
        <h1 className='mb-[30px] text-center'>{name}</h1>
        <div className='flex gap-[30px] flex-wrap justify-center'>
          {children.map((child, idx) => {
            return <GrandChildRouteChild key={idx} url={child.url} name={child.name} />
          })}
        </div>
      </div>}
    </>}
    <Outlet />
  </div>
}

export default SettingsLayout
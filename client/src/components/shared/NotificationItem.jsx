import React from 'react'
import IMAGES from '../../static/images'

const NotificationItem = () => {
  return (
    <div className='bg-[#E1E6F5] p-4 rounded-xl shadow-lg border-l-2  border-b-4 border-[#e3dbdb]'>
      <div className='flex flex-row justify-between'>
        <div className='text-[#1A2857] font-Montserrat text-lg font-semibold leading-normal'>
          DELETE
        </div>
        <img src={IMAGES.closeNotification} alt='close the notification' />
      </div>
      <div className='text-[#1A2857] font-Montserrat text-base font-semibold leading-normal'>
        Imarika Sacco deleted the logo
      </div>
      <div>
        <div className='flex flex-row float-right gap-5'>
          <div className='text-black'>04/04/2023</div>
          <div className='text-black'>18:10:00</div>
          <img src={IMAGES.message} alt='message icon' />
        </div>
      </div>
    </div>
  )
}

export default NotificationItem

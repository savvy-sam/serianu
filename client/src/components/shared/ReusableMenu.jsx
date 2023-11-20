import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import IMAGES from '../../static/images'

export default function ReusableMenu({MenuName, handleClick, menuData}) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
        <Menu.Button className='w-[245px] h-[45px] rounded-[8px] py-1 px-[40Px] bg-[#E1E6F5] inline-flex items-center gap-[15px] justify-center'>
            {MenuName}
          <img src={IMAGES.arrowSquareDown} alt='arrow-square-down' />
        </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            {
              menuData.map((item)=>(
                <div className="px-1 py-1 my-1 bg-[#9BADCC] rounded-md">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={()=>{handleClick(item.linkName)}}
                    className={`${
                      active ? 'text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? item?.activeIcon : item?.inActiveIcon}
                    {item.linkName}
                  </button>
                )}
              </Menu.Item>
            </div>          
              ))
            }
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


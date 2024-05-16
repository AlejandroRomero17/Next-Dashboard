import Image from 'next/image';
import { IoBrowsers, IoCalculator, IoLogoReact } from 'react-icons/io5';
import SidebarMenuItem from './SidebarMenuItem';

const MenuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsers size={40}/>,
    title: 'Dashboard',
    subTitle: 'Main'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40}/>,
    title: 'Counter',
    subTitle: 'Counter Client Side'
  },
]

const Sidebar = () => {
  return (
    <div>
      <div id="menu"
        style={{ width: '400px' }}
        className="left-0 z-10 w-64 h-screen min-h-screen overflow-y-scroll bg-gray-900 text-slate-300">
        <div id="logo" className="px-6 my-4">
          <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
            <IoLogoReact className='mr-2' />
            <span>
              Dash
            </span>

            <span className="text-blue-500">Romero</span>.</h1>
          <p className="text-sm text-slate-500">Manage your actions and activities</p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Welcome back,</p>
          <a href="#" className="inline-flex items-center space-x-2">
            <span>
              <Image className='w-8 h-8 rounded-full'
                src={"https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/440746777_122150427014130882_4130558836942058755_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKNmRSPxBgRibEj73aWK-reQN6GUXwSih5A3oZRfBKKMhDoiGlEampMZaeypOoMA8W2weUueOe_v7jLDGILktD&_nc_ohc=FEQ38zFCBVMQ7kNvgHdPwUl&_nc_ht=scontent-atl3-2.xx&cb_e2o_trans=t&oh=00_AYCl7IZxsSYI11Wbkr6zu-FkbkvQmIfIvjppGjkFacbb0w&oe=6648A9C7"}
                width={70}
                height={50}
                alt='Photo of Romero'
              />
            </span>
            <span className="text-sm font-bold md:text-base">
              Alejandro Romero
            </span>
          </a>
        </div>
        <div id="nav" className="w-full px-6">

          {
            MenuItems.map((item) => (
              <SidebarMenuItem key={item.path} {...item} />
            ))
          }
          {/* <a href="#" className="inline-flex items-center w-full px-2 py-3 space-x-2 transition duration-150 ease-linear border-b border-slate-700 hover:bg-white/5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-5 text-slate-300">Counter</span>
              <span className="hidden text-sm text-slate-500 md:block">Local State</span>
            </div>
          </a> */}

        </div>
      </div>
    </div>
  )
}

export default Sidebar

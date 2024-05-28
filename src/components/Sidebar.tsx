import Image from 'next/image';
import { IoBrowsers, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5';
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
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40}/>,
    title: 'Pokemons',
    subTitle: 'Static Generation'
  },
]

export const Sidebar = () => {
  return (
    <div id="menu"
      className="left-0 z-10 w-64 min-h-screen overflow-y-scroll bg-gray-900 text-slate-300">
      <div id="logo" className="px-6 my-4">
        <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className="text-blue-500">Romero</span>.
        </h1>
        <p className="text-sm text-slate-500">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <Image className='w-8 h-8 rounded-full'
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png"}
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
        {MenuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
}

// export default Sidebar;

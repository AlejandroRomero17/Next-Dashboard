'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}


const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname();


  return (
    <Link href={path}
      className={`inline-flex items-center w-full px-2 py-3 space-x-2 transition duration-150 ease-linear border-b border-slate-700 hover:bg-white/5
      ${currentPath === path ? 'bg-blue-800' : ''}
      `}>
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="hidden text-sm text-white/50 md:block">{subTitle}</span>
      </div>
    </Link>
  )
}

export default SidebarMenuItem

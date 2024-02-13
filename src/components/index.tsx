import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, Users } from 'lucide-react'
import { Logo } from "./Logo";

import { NavItem } from './NavItem';
import { UsedSpaceWidget } from './UserSpaceWidget';
import { Profile } from './Profile';
import { InputControl, InputPrefix, InputRoot } from './Input';


export function SiderBar (){
    return <aside className='flex flex-col gap-6 border-r border-zinc-200  px-5 py-8 '>
        <Logo />
     <InputRoot className='flex w-1/2'>
      <InputPrefix >
        <Search className=' text-zinc-500' />
      </InputPrefix>
      <InputControl  className="focus:outline-none" placeholder="Posso Ajudar?"  />
     </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} href="/categories" />
          <NavItem title="DashBoard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />

        </nav>
        <div className='flex flex-col gap-6 mt-auto'>
            <nav className='space-y-0.5'>
            <NavItem title="Suport" icon={LifeBuoy} />
            <NavItem title="Setting" icon={Cog} />
            </nav>
            <UsedSpaceWidget />

            <div className='h-px bg-zinc-200' />

            <Profile />
        
        </div>
        </aside>
}
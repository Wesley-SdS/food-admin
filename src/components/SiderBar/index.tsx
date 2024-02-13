'use client';
import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, Users } from 'lucide-react'
import { Logo } from "./Logo";

import { NavItem } from './NavItem';
import { UsedSpaceWidget } from './UserSpaceWidget';
import { Profile } from './Profile';
import { InputControl, InputPrefix, InputRoot } from '../Input';


export function SiderBar (){
    return <aside className='flex flex-col gap-6 border-r border-zinc-200  px-5 py-8 '>
        <Logo />
     <InputRoot>
      <InputPrefix>
        <Search className='h-5 w-5 text-zinc-500' />
      </InputPrefix>
      <InputControl className="w-48 focus:outline-none" placeholder='Posso Ajudar?' />
     </InputRoot>

        <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} href="/categories"  />
<NavItem title="Dashboard" icon={BarChart}  href={"/dashboard" }  />
<NavItem title="Pedidos" icon={SquareStack}  href="/order"  />
          <NavItem title="Balção" icon={CheckSquare} href="/pdv" />   
          <NavItem title="Usuários" icon={CheckSquare} href="/pdv" />       
          <NavItem title="Robô" icon={CheckSquare} href="/pdv" />    
          <NavItem title="Entregadores" icon={CheckSquare} href="/pdv" />    
          <NavItem title="Minha Conta" icon={CheckSquare} href="/pdv" />    
          <NavItem title="Configurações" icon={CheckSquare} href="/pdv" />    
        
          <NavItem title="Integrações" icon={Flag}  href="/integrations"  />
          <NavItem title="API" icon={Users}  href="/api"  />

        </nav>
        <div className='flex flex-col gap-6 mt-auto'>
            <nav className='space-y-0.5'>
            <NavItem title="Suporte" icon={LifeBuoy}  href="/Balcao"   />
            <NavItem title="Preferências" icon={Cog}  href="/Balcao"   />
            </nav>
            <UsedSpaceWidget />

            <div className='h-px bg-zinc-200' />

            <Profile />
        
        </div>
        </aside>
}
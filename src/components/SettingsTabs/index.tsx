'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'
import { Caixa } from './caixa'

export function SettingTabs(){
  const [currentTab, setCurrentTab] = useState('tab1')
    return(
        
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
      <TabItem value='tab1' title='Atendimento' isSelected={currentTab === 'tab1'} />
<TabItem value='tab2' title='Pedidos' isSelected={currentTab === 'tab2'} />
<TabItem value='tab3' title='Clientes' isSelected={currentTab === 'tab3'} />
<TabItem value='tab4' title='Cardápio' isSelected={currentTab === 'tab4'} />
<TabItem value='tab5' title='WhatsApp' isSelected={currentTab === 'tab5'} />
<TabItem value='tab6' title='Billing' isSelected={currentTab === 'tab6'} />
<TabItem value='tab7' title='Faturamento' isSelected={currentTab === 'tab7'} />
<TabItem value='tab8' title='Notifications' isSelected={currentTab === 'tab8'} />
<TabItem value='tab9' title='Integrations' isSelected={currentTab === 'tab9'} />
<TabItem value='tab10' title='API' isSelected={currentTab === 'tab10'} />


      </Tabs.List>
      <Tabs.Content className="TabsContent" value="tab1">

<Caixa />

  </Tabs.Content>
  <Tabs.Content className="TabsContent" value="tab2">



</Tabs.Content>
<Tabs.Content className="TabsContent" value="tab3">



</Tabs.Content>
    </Tabs.Root>
    )
}
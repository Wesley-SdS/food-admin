'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function Caixa(){
  const [currentTab, setCurrentTab] = useState('tab1')
    return(
        
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
      <TabItem value='tab1' title='Caixa' isSelected={currentTab === 'tab1'} />
<TabItem value='tab2' title='Caixa 2' isSelected={currentTab === 'tab2'} />
<TabItem value='tab3' title='Caixa 3' isSelected={currentTab === 'tab3'} />



      </Tabs.List>
    </Tabs.Root>
    )
}
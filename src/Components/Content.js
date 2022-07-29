import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react'
import React from 'react'

function Content() {
  return (
    <div style={{
      width: '100%',
    }}>
    <Tabs>
      <TabList aria-label="List of tabs" contained activation='automatic' style={{
        width: '50%',
      }}>
       <Tab disabled={false}>1</Tab>
       <Tab disabled={false}>2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>For tab 1</TabPanel>
        <TabPanel>For tab 2</TabPanel>
      </TabPanels>
    </Tabs>
    </div>
  )
}

export default Content
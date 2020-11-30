import React from 'react'
import Skills from '../Skills'
import TopBar from '../TopBar'
import Content from '../Content'

import { Grid } from './styles'

const Layout = ({children}) => {
   return (
      <Grid>
         <TopBar LeftTitle={<h2>WebDev Thiago</h2>}/>
         <Skills />
         <Content>
            {children}
         </Content>
      </Grid>
   )
}

export default Layout
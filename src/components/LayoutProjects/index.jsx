import React from 'react'
import Skills from '../Skills'
import TopBar from '../TopBar'
import Content from '../Content'

import { Grid } from './styles'

const Layout = ({children}) => {
   return (
      <Grid>
         <TopBar />
         <Skills />
         <Content>
            {children}
         </Content>
      </Grid>
   )
}

export default Layout
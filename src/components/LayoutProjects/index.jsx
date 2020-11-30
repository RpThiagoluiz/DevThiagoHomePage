import React from 'react'
import MainHeader from '../MainHeader'
import TopBar from '../TopBar'
import Content from '../Content'

import { Grid } from './styles'

const Layout = ({children}) => {
   return (
      <Grid>
         <MainHeader />
         <TopBar />
         <Content>
            {children}
         </Content>
      </Grid>
   )
}

export default Layout
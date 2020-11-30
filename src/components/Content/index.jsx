import React from 'react'

import { Container } from './styles'


const Content = ({children}) => {
   return (
      <Container>
         {children}
         <h3>Content</h3>
      </Container>
   )
}

export default Content
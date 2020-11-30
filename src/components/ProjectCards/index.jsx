import React from 'react'

import { Container } from './styles'


const Card = ({
   title,
   description,
   linkGit,
   iconGit,
   backgroundImg
}) => {
   return (
      <Container background={backgroundImg} >


         <h3>{title}</h3>
         <span>{description}</span>
         <a href={linkGit} target="blank"><img src={iconGit} alt=""/></a>
         

      </Container>
   )
}

export default Card
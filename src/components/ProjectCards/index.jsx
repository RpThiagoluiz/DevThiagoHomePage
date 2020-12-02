import React, { useMemo } from 'react'

import { Container } from './styles'

import { Link } from 'react-router-dom'

import reactSvg from '../../assets/img/imgCards/react.svg'
import cssSvg from '../../assets/img/imgCards/css.svg'
import tscriptSvg from '../../assets/img/imgCards/typescript.svg'

const Card = ({
   title,
   description,
   link,
   icon,
   backgroundImg
}) => {

   const iconSelected = useMemo (()=>{
      switch(icon) {
         case 'react':
            return reactSvg
         case 'css':
            return cssSvg
         case 'typeScript':
            return tscriptSvg
         default:
            return undefined
      }
   },[icon])

   return (
      <Container background={backgroundImg} >

         
         <h3>{title}</h3>
         <span>{description}</span>
         <button><Link to={link}>Bora!</Link></button>
         <img src={iconSelected} alt={title} />

      </Container>
   )
}

export default Card
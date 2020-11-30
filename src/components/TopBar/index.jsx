import React from 'react'
import { MdHome, MdMovieFilter, MdPeopleOutline } from "react-icons/md"

//Styles
import {
   Container,
   Ul,
   MenuItemLink

} from './styles'

const TopBar = () => {
   return (
      <Container>
         
         <Ul>
            <h2>WebDev Thiago</h2>
            
            <MenuItemLink href="/">
               <MdHome className="icons" />
               <li>Home</li>
            </MenuItemLink>

            <MenuItemLink href="/project">
               <MdMovieFilter className="icons" />
               <li>Projetos</li>
            </MenuItemLink>

            <MenuItemLink href="/about">
               <MdPeopleOutline className="icons" />
               <li>Sobre Min</li>
            </MenuItemLink>

         </Ul>
      </Container>
   )
}

export default TopBar
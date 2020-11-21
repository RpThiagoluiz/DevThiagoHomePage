import React from 'react'
import { Ul, MenuItemLink } from './styles'
import { MdHome,MdMovieFilter,MdPeopleOutline } from "react-icons/md"


const RightNav = ({ open }) => {
   return (
      <Ul open={open}>

            <MenuItemLink href="/">
               <MdHome className="icons"/>
                  <li>Home</li>
            </MenuItemLink>

            <MenuItemLink href="/project">
               <MdMovieFilter className="icons"/>
               <li>Project</li>
            </MenuItemLink>

            <MenuItemLink href="/about">
               <MdPeopleOutline className="icons"/>
               <li>About</li>
            </MenuItemLink>
         
     </Ul>
   )
 }
 
 export default RightNav
import styled from 'styled-components'

export const Container = styled.div `
   grid-area: TB;

   margin: .2em;
   border-radius: 7px;

   background-color:#181818;
   color: #f0f0f0;

   
`

export const Ul = styled.ul `

   display: flex;
   justify-content:space-around;
   align-items: center;
  
   margin: 10px 0;
   list-style:none;

   > h2 {
      position: absolute;
      left: .5em ;
      top: 1em;
   }

    :nth-child(1){
      margin-left: 8vw;
   }
   
`

export const MenuItemLink = styled.a `
   
   display: flex;
   justify-content:center;
   align-items: center;

   
   padding: .5em;
   text-decoration:none;
   color: #f0f0f0;

   > li {
      cursor:pointer;
   }
 
   > .icons {
      margin: auto 5px;

   }

   transition: all .5 ease-in-out;

   & :hover {
      
   }

 
`
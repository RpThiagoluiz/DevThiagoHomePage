import styled from 'styled-components'



export const Container = styled.div `

   background: ${props => `url(${props.background})`};
   background-size: cover;
   background-position: center;

   width: 250px;
   height:250px;

   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

   margin: 2.75em .75em;
   padding: .5em;
   border-radius: 8px 25px 5px 25px;

   overflow:hidden;
   transition: all .6s ease-in-out;

   > a {
      
      > img {
         margin-top: 2.25em;

         width: 28px;
         height: 28px;
      }
   }

   &:hover {
      transform: scale(1.2);
      
   }

   
`
import styled from 'styled-components'



export const Container = styled.div `

   background: ${props => `url(${props.background})`};
   background-size: cover;
   background-position: center;

   width: 28%;
   height:250px;
   text-align:center;

   position:relative;

   margin: 2.75em .75em;
   padding: .5em;
   border-radius: 8px 25px 5px 25px;

   overflow:hidden;
   

   > h3 {
      margin-top: 15px;
      
   }

   > span {
      position:absolute;
      top: 35%;
      right: 5%;
   }




   > a {
      
      > img {
         margin-top: 2.25em;

         width: 28px;
         height: 28px;
      }
   }

   > button {
      position:absolute;
      bottom: 5px;
      left: 30%;

      cursor: pointer;
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      background-color: black;
      border-radius: 8px;
      box-shadow: -5px -5px 12px black;

      > a {
         font-size: 0.65rem;
         font-weight: bold;
         letter-spacing: 0.025rem;
         text-transform: uppercase;
         text-decoration:none;
         color: #f0f0f0;
      }

     
   }

   > img {
      height: 100%;
      position: absolute;
      top: -5px;
      right: -120px;
      opacity: 0.3
   }

//Effect
   transition: all .6s ease-in-out;

   
   &:hover {
      > button {
         bottom: 25px;
      }


      
   }

   
`
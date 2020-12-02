import styled from 'styled-components'



export const Container = styled.div `

   background-color: rgba(250, 250, 250, .6);
   background-size: cover;
   background-position: center;

   width: 32%;
   height:250px;
   text-align:center;

   position:relative;

   margin: 1.75em .75em;
   padding: .5em;
   border-radius: 18px;

   display:flex;
   flex-direction:column;
   justify-content:space-evenly;
   align-items:center;

   z-index: -2;
   overflow:hidden;
   transition: all .8s ease-in-out;

   box-shadow: 
      10px -10px 0 -3px white, 10px -10px rgba(135,135,135, .7),
      20px -20px 0 -3px white, 20px -20px rgba(45,45,45, .7);
      
      

   :before {
      content:'';
      background: ${props => `url(${props.background})`};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover ;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.9;

      

      
   }

   &:hover {
      background-color: rgba(250, 250, 250, 1);

      width:40%;
      height:350px;

      box-shadow: 
         0 0 0 -3px #000, 0 0 0 0 rgba(135,135,135, .7),
         0 0 0 -3px rgba(135,135,135, .7), 0 0 0 0  rgba(45,45,45, .7),
         0 0 0 -3px rgba(45,45,45, .7), 0 0 0 0  rgba(221,221,221, .7),
         0 0 0 -3px  rgba(221,221,221, .7), 0 0 0 0  #000;

      border:5px solid black;
      border-radius: 24px;
      

      > h3 {
         color: #000;
      }
      >span{
         color:#000;
      }
      > button{
         background-color: #000;
         z-index:9;
         > a{
            color: #fff;
         }
      }

   }
   

   > h3 {
      margin-top: 15px;
      font-size: 24px;
      text-transform:uppercase;
      color: white;
      
   }

   > span {
      padding: 1em;
      color: #fff;
      transition: all .5s ease-in;

      
   }




   > a {
      
      > img {
         margin-top: 2.25em;

         width: 28px;
         height: 28px;
      }
   }

   > button {
      

      cursor: pointer;
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: -5px -5px 12px black;

      > a {
         font-size: 0.65rem;
         font-weight: bold;
         letter-spacing: 0.025rem;
         text-transform: uppercase;
         text-decoration:none;
         color: #000;
      }

     
   }

   > img {
      height: 100%;
      position: absolute;
      top: -5px;
      right: -120px;
      opacity: 0.3;

      transition: all 1.2s ease-in;

      &:hover{
         top:10px;
         right:20px;
      }
   }



   
`
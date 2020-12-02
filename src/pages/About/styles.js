import styled from 'styled-components'
import bckImg from '../../assets/img/imgAboutme/mario.svg'

export const TopSide = styled.div`
   
   position:absolute;
   top: 0;
   right: 50px;

   width: 75%;
   
   
   
`

export const Container = styled.div `
   display:flex;
   text-align: center;
   justify-content:center;
   flex-direction: column;
   padding: 5em;
   height:100vh;
   color: white;
   
   background-size: 300% 100%;

   background-image: repeating-linear-gradient( 90deg, rgba(135,135,135, .2), rgba(221,221,221, .2), rgba(45,45,45, .2), rgba(235,235,235, .2), #000 5px );
   //background-image: repeating-linear-gradient(90deg, rgb(255, 165, 0, .2) , rgb(255, 255, 0, .5), rgb(0, 255, 0, .2), rgb(0, 205, 157, .2), rgb(0, 0, 255, .5), rgb(106, 90, 205, .2) 50px);
   animation: gradient 100s infinite linear;

   overflow:hidden;

   @keyframes gradient {
	   0% {
	   	background-position: 0 0;
	   }
	   
	   100% {
	   	background-position: 100% 0%;
	   }
   }

   :before {
      content: '';
      background-image: url(${bckImg});
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
   
`

export const Content = styled.main`
   

   background-color:#f0f0f0;
   color: #000;
   border-radius: 5px;
   border: 3px solid;
   

   height: calc(100% - 200px);
   width: calc(100% - 200px);

   display:flex;
   flex-direction:column;
   align-items:center;

   padding: 15px;


  

   box-shadow: 
      10px -10px 0 -3px white, 10px -10px rgba(135,135,135, .7),
      20px -20px 0 -3px white, 20px -20px rgba(45,45,45, .7), 
      30px -30px 0 -3px white, 30px -30px rgba(221,221,221, .7), 
      40px -40px 0 -3px white, 40px -40px #000;
  transition: all 2s, top 1s, left 1s;
 
   }     

   &:hover {
      top: -40px;
      left: 40px;
      box-shadow: 
         0 0 0 -3px red, 0 0 0 0 rgba(135,135,135, .7),
         0 0 0 -3px blue, 0 0 0 0  rgba(45,45,45, .7),
         0 0 0 -3px cyan, 0 0 0 0  rgba(221,221,221, .7),
         0 0 0 -3px  purple, 0 0 0 0  #000;

      color: #fff;
      background-color: black;
      border-image: linear-gradient(to bottom, cyan, purple, yellow) 1 100%;
   
   }

   > h2 {
      padding: 20px;
      font-size: 2.75em;  
   }

   > p {

   }

   >.icons {
      
      display:flex;
      align-items:center;
      justify-content:center;
      
      

      > a {

         padding: 1em;
         
         text-decoration:none;
         > img {
            width:30px;
            height:30px;

            &:hover{
               width:56px;
               height: 56px;
            }
            
         } 
      }
   }

  

`
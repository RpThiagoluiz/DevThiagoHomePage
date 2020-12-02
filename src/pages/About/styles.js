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
   background-image: repeating-linear-gradient(90deg, rgb(255, 165, 0, .2) , rgb(255, 255, 0, .5), rgb(0, 255, 0, .2), rgb(0, 205, 157, .2), rgb(0, 0, 255, .5), rgb(106, 90, 205, .2) 50px);
   animation: gradient 50s infinite linear;

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

   background-color:#0f0f0f;
   border-radius: 5px;

   height: calc(100% - 100px);

`